import { Strategy as _Strategy, InternalOAuthError } from "passport-oauth2";

export interface StrategyOptions {
    clientID: string;
    clientSecret: string;
    callbackURL: string;
    scope?: string[]
}

export type VerifyFunction = (
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: (error: any, user?: any, info?: any) => void,
) => void;

export class Strategy extends _Strategy {
    static readonly URLS = {
        authorizationURL: "https://www.linkedin.com/oauth/v2/authorization",
        tokenURL: "https://www.linkedin.com/oauth/v2/accessToken",
        profileURL: "https://api.linkedin.com/v2/userinfo"
    }

    private readonly fields: string[]
    private readonly options: StrategyOptions;

    constructor(options: StrategyOptions, verify: VerifyFunction) {
        super({
            ...options,
            authorizationURL: Strategy.URLS.authorizationURL,
            tokenURL: Strategy.URLS.tokenURL,
            scope: options.scope || ['profile', 'email', 'openid'],
            customHeaders: { 'x-li-format': 'json' }
        }, verify);

        // Supper
        this.name = 'linkedin';
        this.options = options;

        // Override
        this.authorizationParams = (options: any) => {
            var params = {};

            // LinkedIn requires state parameter. It will return an error if not set.
            if (options.state) {
                params['state'] = options.state;
            }

            return params;
        }

        this.userProfile = (accessToken: string, done: (err?: Error | null, profile?: any) => void): void => {
            //LinkedIn uses a custom name for the access_token parameter
            this._oauth2.setAccessTokenName('oauth2_access_token');

            this._oauth2.get(
                Strategy.URLS.profileURL,
                accessToken,
                function (err, body, _res) {
                    if (err) {
                        return done(
                            new InternalOAuthError('failed to fetch user profile', err)
                        );
                    }

                    var profile;

                    try {
                        var json = JSON.parse(body);

                        profile = {
                            provider: 'linkedin',
                            id: json.sub,
                            email: json.email,
                            givenName: json.given_name,
                            familyName: json.family_name,
                            displayName: `${json.given_name} ${json.family_name}`,
                            picture: json.picture,
                            _raw: body,
                            _json: json,
                        };

                    } catch (e) {
                        return done(
                            new InternalOAuthError('failed to parse profile response', e)
                        );
                    }

                    done(null, profile);
                }.bind(this)
            );
        }
    }
}