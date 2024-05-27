import { PassportStrategy } from '@nestjs/passport';
import { Inject, Injectable } from '@nestjs/common';
import { Strategy } from 'passport-microsoft';
import authConfig from 'src/configs/auth.config';
import { ConfigType } from '@nestjs/config';
import { DiscordAuthProfile } from '../interfaces/profile.interface';

@Injectable()
export class MicrosoftStrategy extends PassportStrategy(Strategy, 'microsoft') {
    constructor(
        @Inject(authConfig.KEY)
        private config: ConfigType<typeof authConfig>
    ) {
        super({
            clientID: config.microsoftClientId,
            clientSecret: config.microsoftSecretKey,
            callbackURL: 'http://localhost:3000/auth/microsoft/redirect',
            scope: ['user.read'],
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
            ...profile
        };
        done(null, user);
    }
}