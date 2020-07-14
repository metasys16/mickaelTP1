import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BoiteController } from './boite.controller';
import { BoiteService } from './boite.service';
import { Boite, BoiteSchema } from './schemas/boite.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Boite.name, schema: BoiteSchema }])],
  controllers: [BoiteController],
  providers: [BoiteService],
})
export class BoiteModule {}