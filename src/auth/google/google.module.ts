import { Module } from "@nestjs/common";
import { GoogleController } from "./google.controller";
import { GoogleService } from "./google.service";
import { GoogleStrategy } from "./google.strategy";
import { ConfigModule } from "@nestjs/config";

@Module({
    imports: [ConfigModule],
    controllers: [GoogleController],
    providers: [GoogleService, GoogleStrategy]
})
export class GoogleModule { }