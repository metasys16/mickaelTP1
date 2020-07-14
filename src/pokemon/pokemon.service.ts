/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Model } from 'mongoose';
import { Injectable} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from './schemas/pokemon.schema';
import { CreatePokemonDto } from './dto/create-pokemon.dto';

@Injectable()
export class PokemonService {
  constructor(@InjectModel('Pokemon') private pokemonModel: Model<Pokemon>) {}

  async create(createPokemonDto: CreatePokemonDto): Promise<Pokemon> {
    const createdPokemon = new this.pokemonModel(createPokemonDto);
    return createdPokemon.save();
  }

  async findAll(): Promise<Pokemon[]> {
    return this.pokemonModel.find().exec();
  }

  async findOne(pokemonID): Promise<Pokemon> {
    return this.pokemonModel.findById(pokemonID).exec();
  }
  
  async updatePokemon(pokemonID, createPokemonDto: CreatePokemonDto): Promise<Pokemon> {
    const updatedPokemon = await this.pokemonModel
        .findByIdAndUpdate(pokemonID, createPokemonDto, { new: true });
    return updatedPokemon;
  }
  async deletePokemon(param): Promise<any> {
    const deletedPokemon = await this.pokemonModel.findByIdAndDelete(param);
    return deletedPokemon;
  }
}
