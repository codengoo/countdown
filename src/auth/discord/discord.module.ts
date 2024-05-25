import { Module } from "@nestjs/common";
import { DiscordStrategy } from "./discord.strategy";
import { DiscordService } from "./github.service";
import { DiscordController } from "./github.controller";

@Module({
    imports: [],
    controllers: [DiscordController],
    providers: [DiscordService, DiscordStrategy]
})

export class DiscordModule { }