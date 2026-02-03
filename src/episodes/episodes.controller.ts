import { Controller, Get, Post } from '@nestjs/common';

@Controller('episodes')
export class EpisodesController {
    @Get()
    findAll() {
        return "All Episodes"
    }

    @Get("featured")
    findFeatured() {
        return "Featured Episodes"
    }

    @Post()
    create() {
        return "New Episodes"
    }
}
