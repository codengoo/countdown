import { Injectable } from "@nestjs/common";
import { Request } from "express";

@Injectable()
export class MicrosoftService {
    microsoftLogin(req: Request) {
        if (!req.user) {
            return "No user from microsoft"
        }

        return {
            message: "User information from microsoft",
            user: req.user
        }
    }
}