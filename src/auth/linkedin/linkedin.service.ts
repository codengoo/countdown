import { Injectable } from "@nestjs/common";
import { Request } from "express";

@Injectable()
export class LinkedinService {
    linkedinLogin(req: Request) {
        if (!req.user) {
            return "No user from linkedin"
        }

        return {
            message: "User information from linkedin",
            user: req.user
        }
    }
}