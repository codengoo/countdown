import { Controller, Get, Req, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Request } from "express";
import { DiscordService } from "./github.service";

@Controller("/auth/discord")
export class DiscordController {
    constructor(private readonly discordService: DiscordService) { }
    @Get()
    @UseGuards(AuthGuard("discord"))
    async discordLogin(@Req() req: Request) { }


    @Get("redirect")
    @UseGuards(AuthGuard("discord"))
    discordRedirect(@Req() req: Request) {
        return this.discordService.discordLogin(req);
    }
}