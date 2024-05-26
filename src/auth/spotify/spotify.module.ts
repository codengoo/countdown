import { Module } from "@nestjs/common";
import { SpotifyStrategy } from "./spotify.strategy";
import { SpotifyService } from "./spotify.service";
import { SpotifyController } from "./spotify.controller";

@Module({
    imports: [],
    controllers: [SpotifyController],
    providers: [SpotifyService, SpotifyStrategy]
})

export class SpotifyModule { }