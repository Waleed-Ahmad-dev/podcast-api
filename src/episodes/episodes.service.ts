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

    findOne(id:string){
        console.log(id);
        return this.episodes.find(episode => episode.id === id )
    }

    findFeatured(){
        return this.episodes.filter(episode => episode.featured === true)
    }
}