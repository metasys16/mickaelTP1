/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Body, Controller, Get, Post, Put, Delete, Param, NotFoundException, Res, HttpStatus } from '@nestjs/common';
import { BoiteService } from './boite.service';
import { CreateBoiteDto } from './dto/create-boite.dto';
import { Boite } from './schemas/boite.schema';
import { ApiTags, ApiOperation} from '@nestjs/swagger';

@ApiTags('boite')
@Controller('boite')
export class BoiteController {
  constructor(private readonly boiteService: BoiteService) {}

  @Post()
  @ApiOperation({ summary: 'Create box' })
  async create(@Body() createBoiteDto: CreateBoiteDto) {
    await this.boiteService.create(createBoiteDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all boxes' })
  async findAll(): Promise<Boite[]> {
    return this.boiteService.findAll();
  }

  @Get(':boiteID')
  @ApiOperation({ summary: 'Get box by ID' })
  async findOne(@Res() res, @Param('boiteID') boiteID: string) {
    const boite = await this.boiteService.findOne(boiteID); 
    if (!boite) throw new NotFoundException('box does not exist')
    return res.status(HttpStatus.OK).json(boite);
  }

  @Put(':boiteID')
  @ApiOperation({ summary: 'Update box by ID' })
  async updateBoite(@Res() res, @Param('boiteID') boiteID: string, @Body() createBoiteDto: CreateBoiteDto) {
    const boite = await this.boiteService.updateBoite(boiteID, createBoiteDto); 
    if (!boite) throw new NotFoundException('Box does not exist')
    return res.status(HttpStatus.OK).json({
      message : 'Box has been updated',
      boite
    })
  }

  @Delete(':param')
  @ApiOperation({ summary: 'Delete box by ID' })
  async deleteBoite(@Res() res, @Param('param') param: string) {
    const boite = await this.boiteService.deleteBoite(param); 
    if (!boite) throw new NotFoundException('Box does not exist')
    return res.status(HttpStatus.OK).json({
      message : 'Box has been deleted',
      boite
    })
  }
}