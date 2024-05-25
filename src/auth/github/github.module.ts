import { Module } from "@nestjs/common";
import { GithubStrategy } from "./github.strategy";
import { GithubService } from "./github.service";
import { GithubController } from "./github.controller";

@Module({
    imports: [],
    controllers: [GithubController],
    providers: [GithubService, GithubStrategy]
})

export class GithubModule { }