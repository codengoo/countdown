import { Controller, Get, Req, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Request } from "express";
import { GoogleService } from "./google.service";

@Controller('auth/google')
export class GoogleController {
    constructor(private readonly googleService: GoogleService) { }

    @Get()
    @UseGuards(AuthGuard('google'))
    async googleLogin(@Req() req: Request) { }

    @Get('redirect')
    @UseGuards(AuthGuard('google'))
    googleRedirect(@Req() req: Request) {
        return this.googleService.googleLogin(req)
    }
}