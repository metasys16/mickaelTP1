/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Body, Controller, Get, Post, Put, Delete, Param, NotFoundException, Res, HttpStatus } from '@nestjs/common';
import { DresseurService } from './dresseur.service';
import { CreateDresseurDto } from './dto/create-dresseur.dto';
import { Dresseur } from './schemas/dresseur.schema';
import { ApiTags, ApiOperation} from '@nestjs/swagger';

@ApiTags('dresseur')
@Controller('dresseur')
export class DresseurController {
  constructor(private readonly dresseurService: DresseurService) {}

  @Post()
  @ApiOperation({ summary: 'Create trainer' })
  async create(@Body() createDresseurDto: CreateDresseurDto) {
    await this.dresseurService.create(createDresseurDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all trainers' })
  async findAll(): Promise<Dresseur[]> {
    return this.dresseurService.findAll();
  }

  @Get(':dresseurID')
  @ApiOperation({ summary: 'Get trainer by ID' })
  async findOne(@Res() res, @Param('dresseurID') dresseurID: string) {
    const dresseur = await this.dresseurService.findOne(dresseurID); 
    if (!dresseur) throw new NotFoundException('Trainer does not exist')
    return res.status(HttpStatus.OK).json(dresseur);
  }

  @Put(':dresseurID')
  @ApiOperation({ summary: 'Update trainer by ID' })
  async updateDresseur(@Res() res, @Param('dresseurID') dresseurID: string, @Body() createDresseurDto: CreateDresseurDto) {
    const dresseur = await this.dresseurService.updateDresseur(dresseurID, createDresseurDto); 
    if (!dresseur) throw new NotFoundException('Trainer does not exist')
    return res.status(HttpStatus.OK).json({
      message : 'Trainer has been updated',
      dresseur
    })
  }

  @Delete(':param')
  @ApiOperation({ summary: 'Delete trainerby ID or Name' })
  async deleteDresseur(@Res() res, @Param('param') param: string) {
    const dresseur = await this.dresseurService.deleteDresseur(param); 
    if (!dresseur) throw new NotFoundException('Trainer does not exist')
    return res.status(HttpStatus.OK).json({
      message : 'Trainer has been deleted',
      dresseur
    })
  }
}