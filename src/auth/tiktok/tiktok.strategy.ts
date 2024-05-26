import { PassportStrategy } from '@nestjs/passport';
import { Inject, Injectable } from '@nestjs/common';
import authConfig from 'src/configs/auth.config';
import { ConfigType } from '@nestjs/config';
import { AuthProfile } from '../interfaces/profile.interface';
import { Strategy } from './tiktok.passport';

@Injectable()
export class TiktokStrategy extends PassportStrategy(Strategy, 'tiktok') {
    constructor(
        @Inject(authConfig.KEY)
        private config: ConfigType<typeof authConfig>
    ) {
        super({
            clientID: config.tiktokClientId,
            clientSecret: config.tiktokSecretKey,
            callbackURL: 'https://l28f5txn-3000.asse.devtunnels.ms/auth/tiktok/redirect',
        });
    }

    async validate(
        accessToken: string,
        refreshToken: string,
        profile: AuthProfile,
        done: (err: any, user: any, info?: any) => void
    ): Promise<any> {
        const { id, name, emails, photos, displayName } = profile
        const user = {
            accessToken,
            refreshToken,
            ...profile
        };
        done(null, user);
    }
}