import { Injectable } from "@nestjs/common";
import { Request } from "express";

@Injectable()
export class FacebookService {
    facebookLogin(req: Request) {
        if (!req.user) {
            return "No user from facebook"
        }

        return {
            message: "User information from facebook",
            user: req.user
        }
    }
}