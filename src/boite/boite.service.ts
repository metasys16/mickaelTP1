/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Model } from 'mongoose';
import { Injectable} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Boite } from './schemas/boite.schema';
import { CreateBoiteDto } from './dto/create-boite.dto';

@Injectable()
export class BoiteService {
  constructor(@InjectModel('Boite') private boiteModel: Model<Boite>) {}

  async create(createBoiteDto: CreateBoiteDto): Promise<Boite> {
    const createdBoite = new this.boiteModel(createBoiteDto);
    return createdBoite.save();
  }

  async findAll(): Promise<Boite[]> {
    return this.boiteModel.find().exec();
  }

  async findOne(boiteID): Promise<Boite> {
    return this.boiteModel.findById(boiteID).exec();
  }
  
  async updateBoite(boiteID, createBoiteDto: CreateBoiteDto): Promise<Boite> {
    const updatedBoite = await this.boiteModel
        .findByIdAndUpdate(boiteID, createBoiteDto, { new: true });
    return updatedBoite;
  }
  async deleteBoite(param): Promise<any> {
    const deletedBoite = await this.boiteModel.findByIdAndDelete(param);
    return deletedBoite;
  }
}
