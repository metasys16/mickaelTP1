import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PokemonModule } from './pokemon/pokemon.module';
import { PokemonTypeModule } from './pokemon-type/pokemon-type.module';
import { DresseurModule } from './dresseur/dresseur.module';
import { BoiteModule } from './boite/boite.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), PokemonModule, PokemonTypeModule, DresseurModule, BoiteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
