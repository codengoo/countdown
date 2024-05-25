import { registerAs } from "@nestjs/config";

export type AuthEnvType = {
    googleClientId: string;
    googleSecretKey: string;
    githubClientId: string;
    githubSecretKey: string;
    facebookAppId: string;
    facebookAppSecret: string;
    discordClientId: string;
    discordSecretKey: string;
}

export default registerAs('auth', () => ({
    googleClientId: process.env.GOOGLE_CLIENT_ID,
    googleSecretKey: process.env.GOOGLE_SECRET_KEY,
    facebookAppSecret: process.env.FACEBOOK_APP_SECRET,
    facebookAppId: process.env.FACEBOOK_APP_ID,
    githubClientId: process.env.GITHUB_CLIENT_ID,
    githubSecretKey: process.env.GITHUB_SECRET_KEY,
    discordClientId: process.env.DISCORD_CLIENT_ID,
    discordSecretKey: process.env.DISCORD_SECRET_KEY,
}) satisfies AuthEnvType)