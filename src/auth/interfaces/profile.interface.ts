interface AuthProfileBase {
    id: string;
    provider: "google" | "facebook" | "github" | "discord" | "tiktok" | "spotify" | "linkedin";
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
    displayName: string
    email: string,
    avatar: string,
    picture: string
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