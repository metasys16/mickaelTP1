import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { PokemonType } from 'src/pokemon-type/schemas/pokemon-type.schema';

@Schema()
export class Pokemon extends Document {
  @Prop()
  name: string;

  @Prop()
  pokemon_type: {type : string, ref: 'PokemonType', autopopulate: true} ;

}

export const PokemonSchema = SchemaFactory.createForClass(Pokemon);