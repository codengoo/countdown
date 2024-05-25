import { Controller, Get, Req, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Request } from "express";
import { GithubService } from "./github.service";

@Controller("/auth/github")
export class GithubController {
    constructor(private readonly githubService: GithubService) { }
    @Get()
    @UseGuards(AuthGuard("github"))
    async githubLogin(@Req() req: Request) { }


    @Get("redirect")
    @UseGuards(AuthGuard("github"))
    githubRedirect(@Req() req: Request) {
        return this.githubService.githubLogin(req);
    }
}