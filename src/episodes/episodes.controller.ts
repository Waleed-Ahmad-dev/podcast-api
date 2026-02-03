import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('episodes')
export class EpisodesController {
    @Get()
    findAll(@Query('sort') sort: 'asc' | 'desc' = 'desc' ) {
        console.log(sort);
        return "All Episodes";
    }

    @Get("featured")
    findFeatured() {
        return "Featured Episodes";
    }

    @Get(":id")
    findOne(@Param() id: string) {
        console.log(id);
        return "One Episode";
    }

    @Post()
    create(@Body() input: any ) {
        console.log(input);
        return "New Episodes";
    }
}
