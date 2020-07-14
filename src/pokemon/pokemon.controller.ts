/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Body, Controller, Get, Post, Put, Delete, Param, NotFoundException, Res, HttpStatus } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { Pokemon } from './schemas/pokemon.schema';
import { ApiTags, ApiOperation} from '@nestjs/swagger';

@ApiTags('pokemon')
@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Post()
  @ApiOperation({ summary: 'Create pokemon' })
  async create(@Body() createPokemonDto: CreatePokemonDto) {
    await this.pokemonService.create(createPokemonDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all pokemons' })
  async findAll(): Promise<Pokemon[]> {
    return this.pokemonService.findAll();
  }

  @Get(':pokemonID')
  @ApiOperation({ summary: 'Get pokemon by ID' })
  async findOne(@Res() res, @Param('pokemonID') pokemonID: string) {
    const pokemon = await this.pokemonService.findOne(pokemonID); 
    if (!pokemon) throw new NotFoundException('Pokemon does not exist')
    return res.status(HttpStatus.OK).json(pokemon);
  }

  @Put(':pokemonID')
  @ApiOperation({ summary: 'Update pokemon by ID' })
  async updatePokemon(@Res() res, @Param('pokemonID') pokemonID: string, @Body() createPokemonDto: CreatePokemonDto) {
    const pokemon = await this.pokemonService.updatePokemon(pokemonID, createPokemonDto); 
    if (!pokemon) throw new NotFoundException('Pokemon does not exist')
    return res.status(HttpStatus.OK).json({
      message : 'Pokemon has been updated',
      pokemon
    })
  }

  @Delete(':param')
  @ApiOperation({ summary: 'Delete pokemon by ID or Name' })
  async deletePokemon(@Res() res, @Param('param') param: string) {
    const pokemon = await this.pokemonService.deletePokemon(param); 
    if (!pokemon) throw new NotFoundException('Pokemon does not exist')
    return res.status(HttpStatus.OK).json({
      message : 'Pokemon has been deleted',
      pokemon
    })
  }
}