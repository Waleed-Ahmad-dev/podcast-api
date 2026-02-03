import { Injectable } from '@nestjs/common';
import { Episode } from './episode.entity';
import { CreateEpisodeDto } from './create-episode.dto';
@Injectable()
export class EpisodesService {
    private episodes: Episode[] = [];

    findAll(){
        return this.episodes
    }

    create( createEpisodeDto: CreateEpisodeDto ){
        const newEpisode = {
        id: Date.now().toString(),
        ...createEpisodeDto,
        featured: CreateEpisodeDto.featured || false,
    };

    this.episodes.push(newEpisode);
    return newEpisode;
    }

    findOne( id: string ){
        console.log(id);
        return this.episodes.find(episode => episode.id === id )
    }

    findFeatured(){
        return this.episodes.filter(episode => episode.featured === true)
    }

    remove( id: string ){
        this.episodes = this.episodes.filter(episode => episode.id !== id);    
    }

    update( id: string, updateEpisode: Episode ){
        console.log(id, updateEpisode);
        const index = this.episodes.findIndex(episode => episode.id === id);        
        this.episodes[index] = {...this.episodes[index], ...updateEpisode}
    }
}