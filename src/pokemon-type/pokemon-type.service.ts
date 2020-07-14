/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Model } from 'mongoose';
import { Injectable} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PokemonType } from './schemas/pokemon-type.schema';
import { CreatePokemonTypeDto } from './dto/create-pokemon-type.dto';

@Injectable()
export class PokemonTypeService {
  constructor(@InjectModel('PokemonType') private pokemonTypeModel: Model<PokemonType>) {}

  async create(createPokemonTypeDto: CreatePokemonTypeDto): Promise<PokemonType> {
    const createdPokemonType = new this.pokemonTypeModel(createPokemonTypeDto);
    return createdPokemonType.save();
  }

  async findAll(): Promise<PokemonType[]> {
    return this.pokemonTypeModel.find().exec();
  }

  async findOne(pokemonTypeID): Promise<PokemonType> {
    return this.pokemonTypeModel.findById(pokemonTypeID).exec();
  }
  
  async updatePokemonType(pokemonTypeID, createPokemonTypeDto: CreatePokemonTypeDto): Promise<PokemonType> {
    const updatedPokemonType = await this.pokemonTypeModel
        .findByIdAndUpdate(pokemonTypeID, createPokemonTypeDto, { new: true });
    return updatedPokemonType;
  }
  async deletePokemonType(param): Promise<any> {
    const deletedPokemonType = await this.pokemonTypeModel.findByIdAndDelete(param);
    return deletedPokemonType;
  }
}
