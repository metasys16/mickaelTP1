import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PokemonTypeController } from './pokemon-type.controller';
import { PokemonTypeService } from './pokemon-type.service';
import { PokemonType, PokemonTypeSchema } from './schemas/pokemon-type.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: PokemonType.name, schema: PokemonTypeSchema }])],
  controllers: [PokemonTypeController],
  providers: [PokemonTypeService],
})
export class PokemonTypeModule {}