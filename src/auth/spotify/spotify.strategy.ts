import { PassportStrategy } from '@nestjs/passport';
import { Inject, Injectable } from '@nestjs/common';
import { Strategy } from 'passport-spotify';
import authConfig from 'src/configs/auth.config';
import { ConfigType } from '@nestjs/config';
import { AuthProfile, DiscordAuthProfile, SpotifyAuthProfile } from '../interfaces/profile.interface';

@Injectable()
export class SpotifyStrategy extends PassportStrategy(Strategy, 'spotify') {
    constructor(
        @Inject(authConfig.KEY)
        private config: ConfigType<typeof authConfig>
    ) {
        super({
            clientID: config.spotifyClientId,
            clientSecret: config.spotifySecretKey,
            callbackURL: 'http://localhost:3000/auth/spotify/redirect',
            scope: ['user-read-email']
        });
    }

    async validate(
        accessToken: string,
        refreshToken: string,
        profile: SpotifyAuthProfile,
        done: (err: any, user: any, info?: any) => void
    ): Promise<any> {
        const { id, displayName, emails, photos } = profile
        const user = {
            accessToken,
            refreshToken,
            id, displayName, email: emails[0].value, avatar: photos[0].value
        };
        done(null, user);
    }
}