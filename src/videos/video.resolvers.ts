import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { Video } from "src/grapgql";
import { VideoDTO } from "./dto/video.dto";
import { VideoService } from "./video.service";

@Resolver('Videp')
export class VideoResolvers {
    constructor(private readonly videoService: VideoService) { }

    @Query()
    async videos() {
        return this.videoService.findAll()
    }

    @Mutation('createVideo')
    async create(@Args('input') args: VideoDTO): Promise<Video> {
        return await this.videoService.create(args);
    }
}