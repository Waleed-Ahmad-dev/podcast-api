import { Injectable, NotFoundException } from '@nestjs/common';
import { Episode } from './episode.entity';
import { CreateEpisodeDto } from './create-episode.dto';
import { UpdateEpisodeDto } from './update-episode.dto';
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
            featured: createEpisodeDto.featured || false,
        };

        this.episodes.push(newEpisode);
        return newEpisode;
    }

    findOne(id: string) {
        const episode = this.episodes.find(episode => episode.id === id);
        if (!episode) {
            throw new NotFoundException(`Episode with ID ${id} not found`);
        }
        return episode;
    }

    findFeatured(){
        return this.episodes.filter(episode => episode.featured === true)
    }

    remove( id: string ){
        this.episodes = this.episodes.filter(episode => episode.id !== id);    
    }

    update( id: string, updateEpisode: UpdateEpisodeDto ){
        console.log(id, updateEpisode);
        const index = this.episodes.findIndex(episode => episode.id === id);        
        this.episodes[index] = {...this.episodes[index], ...updateEpisode}
    }
}