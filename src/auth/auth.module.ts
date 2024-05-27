import { Module } from '@nestjs/common';
import { GoogleModule } from './google/google.module';
import { FacebookModule } from './facebook/facebook.module';
import { GithubModule } from './github/github.module';
import { DiscordModule } from './discord/discord.module';
import { TiktokModule } from './tiktok/tiktok.module';
import { SpotifyModule } from './spotify/spotify.module';
import { LinkedinModule } from './linkedin/linkedin.module';
import { MicrosoftModule } from './microsoft/microsoft.module';
import { TwitchModule } from './twitch/twitch.module';

@Module({
    imports: [
        GoogleModule,
        FacebookModule,
        GithubModule,
        DiscordModule,
        TiktokModule,
        SpotifyModule,
        LinkedinModule,
        MicrosoftModule,
        TwitchModule
    ]
})
export class AuthModule { }
