import { Controller, Get, Req, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Request } from "express";
import { MicrosoftService } from "./microsoft.service";

@Controller("/auth/microsoft")
export class MicrosoftController {
    constructor(private readonly microsoftService: MicrosoftService) { }
    @Get()
    @UseGuards(AuthGuard("microsoft"))
    async microsoftLogin(@Req() req: Request) { }


    @Get("redirect")
    @UseGuards(AuthGuard("microsoft"))
    microsoftRedirect(@Req() req: Request) {
        return this.microsoftService.microsoftLogin(req);
    }
}