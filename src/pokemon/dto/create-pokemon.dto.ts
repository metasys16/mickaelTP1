import { PokemonType } from "src/pokemon-type/schemas/pokemon-type.schema";
import { ApiProperty } from "@nestjs/swagger";

export enum ListPokemonType {
  Eau = 'Eau',
  Feu = 'Feu',
  Terre = 'Terre'
}

export class CreatePokemonDto {
  @ApiProperty()
  readonly name: string;

  @ApiProperty({ enum: ListPokemonType, enumName: 'ListPokemonType'})
  readonly pokemon_type: {type : string, ref: 'PokemonType', autopopulate: true} ;
}

