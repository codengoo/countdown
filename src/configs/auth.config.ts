import { registerAs } from "@nestjs/config";

export type AuthEnvType = {
    googleClientId: string;
    googleSecretKey: string;
    facebookAppId: string;
    facebookAppSecret: string;
}

export default registerAs('auth', () => ({
    googleClientId: process.env.GOOGLE_CLIENT_ID,
    googleSecretKey: process.env.GOOGLE_SECRET_KEY,
    facebookAppSecret: process.env.FACEBOOK_APP_SECRET,
    facebookAppId: process.env.FACEBOOK_APP_ID,
}) satisfies AuthEnvType)