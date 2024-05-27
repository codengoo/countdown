import { Module } from "@nestjs/common";
import { MicrosoftStrategy } from "./microsoft.strategy";
import { MicrosoftService } from "./microsoft.service";
import { MicrosoftController } from "./microsoft.controller";

@Module({
    imports: [],
    controllers: [MicrosoftController],
    providers: [MicrosoftService, MicrosoftStrategy]
})

export class MicrosoftModule { }