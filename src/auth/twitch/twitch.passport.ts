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
        authorizationURL: "https://id.twitch.tv/oauth2/authorize",
        tokenURL: "https://id.twitch.tv/oauth2/token",
        profileURL: "https://api.twitch.tv/helix/users"
    }

    private readonly options: StrategyOptions;

    constructor(options: StrategyOptions, verify: VerifyFunction) {
        super({
            ...options,
            authorizationURL: Strategy.URLS.authorizationURL,
            tokenURL: Strategy.URLS.tokenURL,
            scope: options.scope || ['user:read:email'],
            customHeaders: { 'Client-Id': options.clientID }
        }, verify);

        // Supper
        this._oauth2.useAuthorizationHeaderforGET(true);
        this.name = 'twitch';
        this.options = options;

        // Override
        this.authorizationParams = (options: any) => {
            var params = {};
            if (typeof options.forceVerify !== "undefined") {
                // @ts-ignore
                params.force_verify = !!options.forceVerify;
            }
            return params;
        }

        this.userProfile = (accessToken: string, done: (err?: Error | null, profile?: any) => void): void => {
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
                            provider: 'twitch',
                            id: json.data[0].id,
                            email: json.data[0].email,
                            username: json.data[0].name,
                            display: json.data[0].display_name,
                            avatar: json.data[0].profile_image_url,

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