import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { EpisodesService } from './episodes.service';
import { CreateEpisodeDto } from './create-episode.dto';
import { UpdateEpisodeDto } from './update-episode.dto';

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
        return this.episodeService.findFeatured();
    }

    @Get(":id")
    findOne(@Param('id') id: string) {
        console.log(id);
        return this.episodeService.findOne(id)
    }

    @Put(':id')
    update(@Body() input: UpdateEpisodeDto, @Param('id') id: string){
        console.log(input, id);
        return this.episodeService.update(id, input)
    }

    @Delete(':id')
    delete(@Param('id') id: string){
        console.log(id);
        return this.episodeService.remove(id);
    }

    @Post()
    create(@Body() input: CreateEpisodeDto ) {
        console.log(input);
        return this.episodeService.create(input);
    }
}
