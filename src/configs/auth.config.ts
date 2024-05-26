import { registerAs } from "@nestjs/config";

export type AuthEnvType = {
    googleClientId: string;
    googleSecretKey: string;

    githubClientId: string;
    githubSecretKey: string;

    facebookClientId: string;
    facebookSecretKey: string;

    discordClientId: string;
    discordSecretKey: string;

    tiktokClientId: string;
    tiktokSecretKey: string;

    spotifyClientId: string;
    spotifySecretKey: string;
}

export default registerAs('auth', () => ({
    googleClientId: process.env.GOOGLE_CLIENT_ID,
    googleSecretKey: process.env.GOOGLE_SECRET_KEY,
    facebookSecretKey: process.env.FACEBOOK_APP_SECRET,
    facebookClientId: process.env.FACEBOOK_APP_ID,
    githubClientId: process.env.GITHUB_CLIENT_ID,
    githubSecretKey: process.env.GITHUB_SECRET_KEY,
    discordClientId: process.env.DISCORD_CLIENT_ID,
    discordSecretKey: process.env.DISCORD_SECRET_KEY,
    tiktokClientId: process.env.TIKTOK_CLIENT_ID,
    tiktokSecretKey: process.env.TIKTOK_SECRET_KEY,
    spotifyClientId: process.env.SPOTIFY_CLIENT_ID,
    spotifySecretKey: process.env.SPOTIFY_SECRET_KEY,
}) satisfies AuthEnvType)