import { PassportStrategy } from '@nestjs/passport';
import { Inject, Injectable } from '@nestjs/common';
import { Strategy } from 'passport-facebook';
import authConfig from 'src/configs/auth.config';
import { ConfigType } from '@nestjs/config';
import { AuthProfile } from '../interfaces/profile.interface';

@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy, 'facebook') {
    constructor(
        @Inject(authConfig.KEY)
        private config: ConfigType<typeof authConfig>
    ) {
        super({
            clientID: config.facebookAppId,
            clientSecret: config.facebookAppSecret,
            callbackURL: 'http://localhost:3000/auth/facebook/redirect',
            scope: "email",
            profileFields: ['name', 'emails']
        });
    }

    async validate(
        accessToken: string,
        refreshToken: string,
        profile: AuthProfile,
        done: (err: any, user: any, info?: any) => void
    ): Promise<any> {
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