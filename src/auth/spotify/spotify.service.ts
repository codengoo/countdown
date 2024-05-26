import { Injectable } from "@nestjs/common";
import { Request } from "express";

@Injectable()
export class SpotifyService {
    spotifyLogin(req: Request) {
        if (!req.user) {
            return "No user from spotify"
        }

        return {
            message: "User information from spotify",
            user: req.user
        }
    }
}