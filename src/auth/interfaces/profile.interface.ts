interface AuthProfileBase {
    id: string;
    provider: "google" | "facebook" | "github" | "discord" | "tiktok" | "spotify";
    _json: any,
    _raw: string,
}

export interface AuthProfile extends AuthProfileBase {
    displayName?: string;
    name: {
        familyName: string;
        givenName: string;
    },
    emails: {
        value: string;
        verified: boolean;
    }[],
    photos: {
        value: string;
    }[],
}

export interface DiscordAuthProfile extends AuthProfileBase {
    username: string,
    email: string,
    avatar: string,
}

export interface SpotifyAuthProfile extends AuthProfileBase {
    displayName: string
    profileUrl: string,
    emails: {
        value: string;
        verified: boolean;
    }[],
    photos: {
        value: string;
    }[],
}