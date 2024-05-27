import { Controller, Get, Req, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Request } from "express";
import { TwitchService } from "./twitch.service";

@Controller("/auth/twitch")
export class TwitchController {
    constructor(private readonly twitchService: TwitchService) { }
    @Get()
    @UseGuards(AuthGuard("twitch"))
    async twitchLogin(@Req() req: Request) { }


    @Get("redirect")
    @UseGuards(AuthGuard("twitch"))
    twitchRedirect(@Req() req: Request) {
        return this.twitchService.twitchLogin(req);
    }
}