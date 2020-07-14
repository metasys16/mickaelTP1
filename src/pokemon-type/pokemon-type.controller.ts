/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Body, Controller, Get, Post, Put, Delete, Param, NotFoundException, Res, HttpStatus } from '@nestjs/common';
import { PokemonTypeService } from './pokemon-type.service';
import { CreatePokemonTypeDto } from './dto/create-pokemon-type.dto';
import { PokemonType } from './schemas/pokemon-type.schema';
import { ApiTags, ApiOperation} from '@nestjs/swagger';

@ApiTags('pokemon-type')
@Controller('pokemon-type')
export class PokemonTypeController {
  constructor(private readonly pokemonTypeService: PokemonTypeService) {}

  @Post()
  @ApiOperation({ summary: 'Create pokemon type' })
  async create(@Body() createPokemonTypeDto: CreatePokemonTypeDto) {
    await this.pokemonTypeService.create(createPokemonTypeDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all pokemon types' })
  async findAll(): Promise<PokemonType[]> {
    return this.pokemonTypeService.findAll();
  }

  @Get(':pokemonTypeID')
  @ApiOperation({ summary: 'Get pokemon type by ID' })
  async findOne(@Res() res, @Param('pokemonTypeID') pokemonTypeID: string) {
    const pokemonType = await this.pokemonTypeService.findOne(pokemonTypeID); 
    if (!pokemonType) throw new NotFoundException('Pokemon type does not exist')
    return res.status(HttpStatus.OK).json(pokemonType);
  }

  @Put(':pokemonTypeID')
  @ApiOperation({ summary: 'Update pokemon type by ID' })
  async updatePokemonType(@Res() res, @Param('pokemonTypeID') pokemonTypeID: string, @Body() createPokemonTypeDto: CreatePokemonTypeDto) {
    const pokemonType = await this.pokemonTypeService.updatePokemonType(pokemonTypeID, createPokemonTypeDto); 
    if (!pokemonType) throw new NotFoundException('Pokemon type does not exist')
    return res.status(HttpStatus.OK).json({
      message : 'Pokemon type has been updated',
      pokemonType
    })
  }

  @Delete(':param')
  @ApiOperation({ summary: 'Delete pokemon type by ID or Name' })
  async deletePokemonType(@Res() res, @Param('param') param: string) {
    const pokemonType = await this.pokemonTypeService.deletePokemonType(param); 
    if (!pokemonType) throw new NotFoundException('Pokemon type does not exist')
    return res.status(HttpStatus.OK).json({
      message : 'Pokemon type has been deleted',
      pokemonType
    })
  }
}