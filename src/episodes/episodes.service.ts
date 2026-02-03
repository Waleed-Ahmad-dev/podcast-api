import { Injectable } from '@nestjs/common';
import { Episode } from './episode.entity';
@Injectable()
export class EpisodesService {
    private episodes: Episode[]

    findAll(){
        return this.episodes
    }
}
