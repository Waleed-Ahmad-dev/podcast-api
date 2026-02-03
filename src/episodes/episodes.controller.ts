import { Controller } from '@nestjs/common';

@Controller('episodes')
export class EpisodesController {
    findAll() {
        return "All Episodes"
    }
}
