import { ApiProperty } from "@nestjs/swagger";

export class CreatePokemonTypeDto {
  @ApiProperty()
  readonly type: string;
}