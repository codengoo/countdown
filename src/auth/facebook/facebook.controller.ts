import { Controller, Get, Req, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { FacebookService } from "./facebook.service";
import { Request } from "express";

@Controller("/auth/facebook")
export class FacebookController {
    constructor(private readonly facebookService: FacebookService) { }
    @Get()
    @UseGuards(AuthGuard("facebook"))
    async facebookLogin(@Req() req: Request) { }


    @Get("redirect")
    @UseGuards(AuthGuard("facebook"))
    facebookRedirect(@Req() req: Request) {
        return this.facebookService.facebookLogin(req);
    }
}