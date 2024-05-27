import { Injectable } from "@nestjs/common";
import { Request } from "express";

@Injectable()
export class TwitchService {
    twitchLogin(req: Request) {
        if (!req.user) {
            return "No user from twitch"
        }

        return {
            message: "User information from twitch",
            user: req.user
        }
    }
}