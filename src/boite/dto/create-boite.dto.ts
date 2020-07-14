import { ApiProperty } from "@nestjs/swagger";
import { PokemonType } from "src/pokemon-type/schemas/pokemon-type.schema";
import { Pokemon } from "src/pokemon/schemas/pokemon.schema";
import { Dresseur } from "src/dresseur/schemas/dresseur.schema";

export class CreateBoiteDto {
  @ApiProperty()
  readonly owner : Dresseur;

  @ApiProperty()
  readonly pokemons: Pokemon[];
}