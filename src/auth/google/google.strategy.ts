import { PassportStrategy } from '@nestjs/passport';
import { Inject, Injectable } from '@nestjs/common';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import authConfig from 'src/configs/auth.config';
import { ConfigType } from '@nestjs/config';
import { AuthProfile } from '../interfaces/profile.interface';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
    constructor(
        @Inject(authConfig.KEY)
        private config: ConfigType<typeof authConfig>
    ) {
        super({
            clientID: config.googleClientId,
            clientSecret: config.googleSecretKey,
            callbackURL: 'http://localhost:3000/auth/google/redirect',
            scope: ['email', 'profile'],
        });
    }

    async validate(
        accessToken: string,
        refreshToken: string,
        profile: AuthProfile,
        done: VerifyCallback): Promise<any> {
        const { id, name, emails, photos } = profile
        const user = {
            accessToken,
            refreshToken,
            id,
            name,
            email: emails[0].value,
            picture: photos[0].value,
        };
        done(null, user);
    }
}