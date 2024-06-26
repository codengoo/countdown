import { Module } from "@nestjs/common";
import { FacebookStrategy } from "./facebook.strategy";
import { FacebookController } from "./facebook.controller";
import { FacebookService } from "./facebook.service";

@Module({
    imports: [],
    controllers: [FacebookController],
    providers: [FacebookService, FacebookStrategy]
})

export class FacebookModule { }