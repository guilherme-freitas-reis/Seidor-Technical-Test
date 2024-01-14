import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { RidesService } from './rides.service';
import { CreateRideDto } from './dto/create-ride.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Rides")
@Controller('rides')
export class RidesController {
  constructor(private readonly ridesService: RidesService) { }

  @Post()
  @ApiOperation({ summary: "Create a new ride" })
  create(@Body() createRideDto: CreateRideDto) {
    return this.ridesService.create(createRideDto);
  }

  @Get()
  @ApiOperation({ summary: "Get all rides" })
  findAll() {
    return this.ridesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: "Get a ride by id" })
  async findOne(@Param('id') id: string) {
    const ride = await this.ridesService.findOne(id);

    if (!ride)
      throw new NotFoundException(`Ride with ${id} not found`);

    return ride;
  }

  @Post('finish/:id')
  @ApiOperation({ summary: "Finish a ride by id" })
  finishRide(@Param('id') id: string) {
    return this.ridesService.finishRide(id);
  }
}
