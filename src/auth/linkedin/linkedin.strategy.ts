import { PassportStrategy } from '@nestjs/passport';
import { Inject, Injectable } from '@nestjs/common';
import authConfig from 'src/configs/auth.config';
import { ConfigType } from '@nestjs/config';
import { DiscordAuthProfile, SpotifyAuthProfile } from '../interfaces/profile.interface';
import { Strategy } from './linkedin.passport';

@Injectable()
export class LinkedinStrategy extends PassportStrategy(Strategy, 'linkedin') {
    constructor(
        @Inject(authConfig.KEY)
        private config: ConfigType<typeof authConfig>
    ) {
        super({
            clientID: config.linkedinClientId,
            clientSecret: config.linkedinSecretKey,
            callbackURL: 'http://localhost:3000/auth/linkedin/redirect',
            scope: ['email', 'profile', 'openid'],
        });
    }

    async validate(
        accessToken: string,
        refreshToken: string,
        profile: DiscordAuthProfile,
        done: (err: any, user: any, info?: any) => void
    ): Promise<any> {
        const { id, displayName, email, picture } = profile
        const user = {
            accessToken,
            refreshToken,
            id, displayName, email, picture
        };
        done(null, user);
    }
}