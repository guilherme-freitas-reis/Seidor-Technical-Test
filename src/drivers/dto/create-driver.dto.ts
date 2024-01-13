import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateDriverDto {
  @ApiProperty({
    description: 'The name of the driver',
    type: String,
    example: 'John Doe'
  })
  @IsNotEmpty({
    message: 'The name of the driver is required'
  })
  name: string;
}
