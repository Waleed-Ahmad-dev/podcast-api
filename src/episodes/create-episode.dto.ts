import { IsString, IsBoolean, IsOptional } from 'class-validator';

export class CreateEpisodeDto {
    @IsString()
    name: string;

    @IsString()
    description: string;

    @IsBoolean()
    @IsOptional()
    featured?: boolean;
}