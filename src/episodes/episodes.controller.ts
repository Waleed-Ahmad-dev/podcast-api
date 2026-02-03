import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { EpisodesService } from './episodes.service';

@Controller('episodes')
export class EpisodesController {

    constructor(private readonly episodeService: EpisodesService) {}

    @Get()
    findAll(@Query('sort') sort: 'asc' | 'desc' = 'desc' ) {
        console.log(sort);
        return this.episodeService.findAll();
    }

    @Get("featured")
    findFeatured() {
        return "Featured Episodes";
    }

    @Get(":id")
    findOne(@Param('id') id: string) {
        console.log(id);
        return this.episodeService.findOne(id)
    }

    @Put(':id')
    update(@Body() input: any, @Param('id') id: string){
        console.log(input, id);
        return "Update Episodes";
    }

    @Delete(':id')
    delete(@Param('id') id: string){
        console.log(id);
        return "Delete Episodes";
    }

    @Post()
    create(@Body() input: any ) {
        console.log(input);
        return this.episodeService.create(input);
    }
}
