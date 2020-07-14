import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Dresseur extends Document {
  @Prop()
  name: string;

}

export const DresseurSchema = SchemaFactory.createForClass(Dresseur);