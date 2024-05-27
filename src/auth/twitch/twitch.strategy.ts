import { PassportStrategy } from '@nestjs/passport';
import { Inject, Injectable } from '@nestjs/common';
import authConfig from 'src/configs/auth.config';
import { ConfigType } from '@nestjs/config';
import { AuthProfile, DiscordAuthProfile } from '../interfaces/profile.interface';
import { Strategy } from './twitch.passport';

@Injectable()
export class TwitchStrategy extends PassportStrategy(Strategy, 'twitch') {
    constructor(
        @Inject(authConfig.KEY)
        private config: ConfigType<typeof authConfig>
    ) {
        super({
            clientID: config.twitchClientId,
            clientSecret: config.twitchSecretKey,
            callbackURL: 'http://localhost:3000/auth/twitch/redirect',
            scope: "user_read"
        });
    }

    async validate(
        accessToken: string,
        refreshToken: string,
        profile: DiscordAuthProfile,
        done: (err: any, user: any, info?: any) => void
    ): Promise<any> {
        const { id, username, email, avatar } = profile
        console.log(profile);
        
        const user = {
            accessToken,
            refreshToken,
            ...profile
        };
        done(null, user);
    }
}