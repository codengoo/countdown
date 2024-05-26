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
        authorizationURL: "https://www.tiktok.com/v2/auth/authorize/",
        tokenURL: "https://open.tiktokapis.com/v2/oauth/token/",
        profileURL: "https://open.tiktokapis.com/v2/user/info/"
    }

    private readonly fields: string[]
    private readonly options: StrategyOptions;

    constructor(options: StrategyOptions, verify: VerifyFunction) {
        super({
            ...options,
            authorizationURL: Strategy.URLS.authorizationURL,
            tokenURL: Strategy.URLS.tokenURL,
            scopeSeparator: ',',
            scope: options.scope || ['user.info.basic'],
            sessionKey: 'oauth2:tiktok'
        }, verify);

        // Supper
        this.name = 'tiktok';
        this._oauth2.useAuthorizationHeaderforGET(true);

        // Internal property
        this.fields = ["open_id", "union_id", "avatar_url", "avatar_url_100", "avatar_url_200", "avatar_large_url", "display_name", "email"];
        this.options = options;

        // Override
        this.authorizationParams = () => {
            return {
                client_key: this.options.clientID
            };
        }

        this.tokenParams = () => {
            return {
                client_key: this.options.clientID,
                client_secret: this.options.clientSecret
            };
        }

        this.userProfile = (accessToken: string, done: (err?: Error | null, profile?: any) => void): void => {
            var url = Strategy.URLS.profileURL;
            var fields = "?fields=" + this.fields.join(",");

            this._oauth2.get(url + fields, accessToken, function (err, body: string, res) {
                if (err) {
                    return done(
                        new InternalOAuthError("failed to fetch user profile", err)
                    );
                }

                var json = JSON.parse(body);
                try {
                    var profile = {
                        provider: 'tiktok',
                        id: json.data.user.open_id,
                        unionId: json.data.user.union_id,
                        username: json.data.user.display_name,
                        profileImage: json.data.user.avatar_url_100,
                        bioDescription: json.data.user.bio_description,
                        profileDeepLink: json.data.user.profile_deep_link,
                        isVerified: json.data.user.is_verified,
                        followerCount: json.data.user.follower_count,
                        following_count: json.data.user.following_count,
                        likes_count: json.data.user.likes_count,
                        _raw: body,
                        _json: json
                    };
                    done(null, profile);
                } catch (e) {
                    done(e);
                }
            });
        }
    }
}