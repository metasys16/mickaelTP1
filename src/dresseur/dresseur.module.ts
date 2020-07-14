import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DresseurController } from './dresseur.controller';
import { DresseurService } from './dresseur.service';
import { Dresseur, DresseurSchema } from './schemas/dresseur.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Dresseur.name, schema: DresseurSchema }])],
  controllers: [DresseurController],
  providers: [DresseurService],
})
export class DresseurModule {}