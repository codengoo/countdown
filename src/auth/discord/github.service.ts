import { Injectable } from "@nestjs/common";
import { Request } from "express";

@Injectable()
export class DiscordService {
    discordLogin(req: Request) {
        if (!req.user) {
            return "No user from discord"
        }

        return {
            message: "User information from discord",
            user: req.user
        }
    }
}