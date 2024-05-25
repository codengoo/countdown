import { PassportStrategy } from '@nestjs/passport';
import { Inject, Injectable } from '@nestjs/common';
import { Strategy } from 'passport-discord';
import authConfig from 'src/configs/auth.config';
import { ConfigType } from '@nestjs/config';
import { AuthProfile, DiscordAuthProfile } from '../interfaces/profile.interface';

@Injectable()
export class DiscordStrategy extends PassportStrategy(Strategy, 'discord') {
    constructor(
        @Inject(authConfig.KEY)
        private config: ConfigType<typeof authConfig>
    ) {
        super({
            clientID: config.discordClientId,
            clientSecret: config.discordSecretKey,
            callbackURL: 'http://localhost:3000/auth/discord/redirect',
            scope: ['identify', 'email'],
        });
    }

    async validate(
        accessToken: string,
        refreshToken: string,
        profile: DiscordAuthProfile,
        done: (err: any, user: any, info?: any) => void
    ): Promise<any> {
        const { id, username, email, avatar } = profile
        const user = {
            accessToken,
            refreshToken,
            id, username, email, avatar
        };
        done(null, user);
    }
}