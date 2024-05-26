import { Module } from '@nestjs/common';
import { GoogleModule } from './google/google.module';
import { FacebookModule } from './facebook/facebook.module';
import { GithubModule } from './github/github.module';
import { DiscordModule } from './discord/discord.module';
import { TiktokModule } from './tiktok/tiktok.module';
import { SpotifyModule } from './spotify/discord.module';

@Module({
    imports: [
        GoogleModule,
        FacebookModule,
        GithubModule,
        DiscordModule,
        TiktokModule,
        SpotifyModule
    ]
})
export class AuthModule { }
