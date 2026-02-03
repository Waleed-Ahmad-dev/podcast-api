import { Controller, Get } from '@nestjs/common';

@Controller('episodes')
export class EpisodesController {
    @Get()
    findAll() {
        return "All Episodes"
    }
}
