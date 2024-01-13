import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsUppercase, Matches } from "class-validator";

export class CreateCarDto {
  @ApiProperty({
    description: 'The plate of the car',
    type: 'string',
    nullable: false,
  })
  @IsNotEmpty({
    message: 'Plate is required',
  })
  @Matches(/^[A-Z]{3}[0-9][0-9A-Z][0-9]{2}$/, {
    message: 'Plate must be in the format AAA0000 or AAA0A00',
  })
  @IsUppercase({
    message: 'Plate must be uppercase',
  })
  plate: string;


  @ApiProperty({
    description: 'The color of the car in hex format',
    type: 'string',
    nullable: false,
  })
  @IsNotEmpty({
    message: 'Color is required',
  })
  @Matches(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, {
    message: 'Color must be in the format #000000 or #000',
  })
  @IsUppercase({
    message: 'Color must be uppercase',
  })
  color: string;


  @ApiProperty({
    description: 'The brand of the car',
    type: 'string',
    nullable: false,
  })
  @IsNotEmpty({
    message: 'Brand is required',
  })
  brand: string;
}
