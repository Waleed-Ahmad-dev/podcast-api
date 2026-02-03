import { Injectable } from '@nestjs/common';
import { Episode } from './episode.entity';
@Injectable()
export class EpisodesService {
    private episodes: Episode[] = [];

    findAll(){
        return this.episodes
    }

    create(episode: Episode){
        console.log(episode);
        episode.id = Date.now().toString()
        this.episodes.push(episode)
        return episode
    }
}