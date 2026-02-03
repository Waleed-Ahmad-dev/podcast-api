import { Controller, Get, Post, Query } from '@nestjs/common';

@Controller('episodes')
export class EpisodesController {
    @Get()
    findAll(@Query('sort') sort: 'asc' | 'desc' = 'desc' ) {
        console.log(sort)
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
