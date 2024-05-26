import { Controller, Get, Req, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Request } from "express";
import { TiktokService } from "./tiktok.service";

@Controller("/auth/tiktok")
export class TiktokController {
    constructor(private readonly tiktokService: TiktokService) { }
    @Get()
    @UseGuards(AuthGuard("tiktok"))
    async tiktokLogin(@Req() req: Request) { }


    @Get("redirect")
    @UseGuards(AuthGuard("tiktok"))
    tiktokRedirect(@Req() req: Request) {
        return this.tiktokService.tiktokLogin(req);
    }
}