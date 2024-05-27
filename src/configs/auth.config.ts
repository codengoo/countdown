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

    linkedinClientId: string;
    linkedinSecretKey: string;

    microsoftClientId: string;
    microsoftSecretKey: string;

    twitchClientId: string;
    twitchSecretKey: string;

    redditClientId: string;
    redditSecretKey: string;
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
    linkedinClientId: process.env.LINKEDIN_CLIENT_ID,
    linkedinSecretKey: process.env.LINKEDIN_SECRET_KEY,
    microsoftClientId: process.env.MICROSOFT_CLIENT_ID,
    microsoftSecretKey: process.env.MICROSOFT_SECRET_KEY,
    twitchClientId: process.env.TWITCH_CLIENT_ID,
    twitchSecretKey: process.env.TWITCH_SECRET_KEY,
    redditClientId: process.env.REDDIT_CLIENT_ID,
    redditSecretKey: process.env.REDDIT_SECRET_KEY,

}) satisfies AuthEnvType)