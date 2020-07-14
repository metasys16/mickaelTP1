/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Model } from 'mongoose';
import { Injectable} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Dresseur } from './schemas/dresseur.schema';
import { CreateDresseurDto } from './dto/create-dresseur.dto';

@Injectable()
export class DresseurService {
  constructor(@InjectModel('Dresseur') private dresseurModel: Model<Dresseur>) {}

  async create(createDresseurDto: CreateDresseurDto): Promise<Dresseur> {
    const createdDresseur = new this.dresseurModel(createDresseurDto);
    return createdDresseur.save();
  }

  async findAll(): Promise<Dresseur[]> {
    return this.dresseurModel.find().exec();
  }

  async findOne(dresseurID): Promise<Dresseur> {
    return this.dresseurModel.findById(dresseurID).exec();
  }
  
  async updateDresseur(dresseurID, createDresseurDto: CreateDresseurDto): Promise<Dresseur> {
    const updatedDresseur = await this.dresseurModel
        .findByIdAndUpdate(dresseurID, createDresseurDto, { new: true });
    return updatedDresseur;
  }
  async deleteDresseur(param): Promise<any> {
    const deletedDresseur = await this.dresseurModel.findByIdAndDelete(param);
    return deletedDresseur;
  }
}
