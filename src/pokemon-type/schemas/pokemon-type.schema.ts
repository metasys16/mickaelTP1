import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class PokemonType extends Document {
  @Prop()
  type: string;

}

export const PokemonTypeSchema = SchemaFactory.createForClass(PokemonType);