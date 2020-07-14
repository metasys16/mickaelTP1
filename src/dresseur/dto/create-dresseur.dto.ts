import { ApiProperty } from "@nestjs/swagger";

export class CreateDresseurDto {
  @ApiProperty()
  readonly name: string;
}