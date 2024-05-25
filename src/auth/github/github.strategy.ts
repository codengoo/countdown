import { PassportStrategy } from '@nestjs/passport';
import { Inject, Injectable } from '@nestjs/common';
import { Strategy } from 'passport-github2';
import authConfig from 'src/configs/auth.config';
import { ConfigType } from '@nestjs/config';
import { AuthProfile } from '../interfaces/profile.interface';

@Injectable()
export class GithubStrategy extends PassportStrategy(Strategy, 'github') {
    constructor(
        @Inject(authConfig.KEY)
        private config: ConfigType<typeof authConfig>
    ) {
        super({
            clientID: config.githubClientId,
            clientSecret: config.githubSecretKey,
            callbackURL: 'http://localhost:3000/auth/github/redirect',
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
            id,
            name: name || displayName,
            email: emails[0].value,
            picture: photos[0].value,
        };
        done(null, user);
    }
}