import { Injectable } from "@nestjs/common";
import { Request } from "express";

@Injectable()
export class TiktokService {
    tiktokLogin(req: Request) {
        if (!req.user) {
            return "No user from tiktok"
        }

        return {
            message: "User information from tiktok",
            user: req.user
        }
    }
}