import { Module } from "@nestjs/common";
import { TiktokStrategy } from "./tiktok.strategy";
import { TiktokService } from "./tiktok.service";
import { TiktokController } from "./tiktok.controller";

@Module({
    imports: [],
    controllers: [TiktokController],
    providers: [TiktokService, TiktokStrategy]
})

export class TiktokModule { }