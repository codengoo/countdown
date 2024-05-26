import { Controller, Get, Req, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Request } from "express";
import { SpotifyService } from "./spotify.service";

@Controller("/auth/spotify")
export class SpotifyController {
    constructor(private readonly spotifyService: SpotifyService) { }
    @Get()
    @UseGuards(AuthGuard("spotify"))
    async spotifyLogin(@Req() req: Request) { }


    @Get("redirect")
    @UseGuards(AuthGuard("spotify"))
    spotifyRedirect(@Req() req: Request) {
        return this.spotifyService.spotifyLogin(req);
    }
}