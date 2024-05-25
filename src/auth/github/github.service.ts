import { Injectable } from "@nestjs/common";
import { Request } from "express";

@Injectable()
export class GithubService {
    githubLogin(req: Request) {
        if (!req.user) {
            return "No user from github"
        }

        return {
            message: "User information from github",
            user: req.user
        }
    }
}