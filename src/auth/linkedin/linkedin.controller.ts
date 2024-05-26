import { Controller, Get, Req, Res, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Request } from "express";
import { LinkedinService } from "./linkedin.service";

@Controller("/auth/linkedin")
export class LinkedinController {
    constructor(private readonly linkedinService: LinkedinService) { }
    @Get()
    @UseGuards(AuthGuard("linkedin"))
    async linkedinLogin(@Req() req: Request) {
    }


    @Get("redirect")
    @UseGuards(AuthGuard("linkedin"))
    linkedinRedirect(@Req() req: Request) {
        return this.linkedinService.linkedinLogin(req);
    }
}