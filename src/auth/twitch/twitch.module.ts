import { Module } from "@nestjs/common";
import { TwitchStrategy } from "./twitch.strategy";
import { TwitchService } from "./twitch.service";
import { TwitchController } from "./twitch.controller";

@Module({
    imports: [],
    controllers: [TwitchController],
    providers: [TwitchService, TwitchStrategy]
})

export class TwitchModule { }