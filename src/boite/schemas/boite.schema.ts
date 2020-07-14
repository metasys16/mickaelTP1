import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Pokemon } from 'src/pokemon/schemas/pokemon.schema';
import { PokemonType } from 'src/pokemon-type/schemas/pokemon-type.schema';
import { Dresseur } from 'src/dresseur/schemas/dresseur.schema';

@Schema()
export class Boite extends Document {
  @Prop()
  owner: Dresseur;

  @Prop()
  pokemons: Pokemon[];
}

export const BoiteSchema = SchemaFactory.createForClass(Boite);