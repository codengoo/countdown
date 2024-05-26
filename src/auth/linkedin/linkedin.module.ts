import { Module } from "@nestjs/common";
import { LinkedinStrategy } from "./linkedin.strategy";
import { LinkedinService } from "./linkedin.service";
import { LinkedinController } from "./linkedin.controller";

@Module({
    imports: [],
    controllers: [LinkedinController],
    providers: [LinkedinService, LinkedinStrategy]
})

export class LinkedinModule { }