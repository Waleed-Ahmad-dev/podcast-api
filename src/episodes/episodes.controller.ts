import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

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

    @Put(':id')
    update(@Body() input: any, @Param() id: string){
        console.log(input, id);
        return "Update Episodes";
    }

    @Delete()
    delete(@Param() id: string){
        console.log(id);
        return "Delete Episodes";
    }

    @Post()
    create(@Body() input: any ) {
        console.log(input);
        return "New Episodes";
    }
}
