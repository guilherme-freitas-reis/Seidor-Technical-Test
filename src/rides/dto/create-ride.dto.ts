import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsNotEmpty, IsOptional } from "class-validator";

export class CreateRideDto {
  @ApiProperty({
    description: "Car ID",
    type: String,
    example: "1"
  })
  @IsNotEmpty({
    message: "Car ID is required"
  })
  car_id: string;

  @ApiProperty({
    description: "Driver ID",
    type: String,
    example: "1"
  })
  @IsNotEmpty({
    message: "Driver ID is required"
  })
  driver_id: string;

  @ApiProperty({
    description: "Start date",
    type: Date,
    example: "2021-10-10T00:00:00.000Z"
  })
  @IsNotEmpty({
    message: "Start date is required"
  })
  start: Date;

  @ApiProperty({
    description: "End date",
    type: Date,
    example: "2021-10-10T00:00:00.000Z"
  })
  @IsOptional()
  end?: Date;

  @ApiProperty({
    description: "Motive",
    type: String,
    example: "Work"
  })
  @IsNotEmpty({
    message: "Motive is required"
  })
  motive: string;
}
