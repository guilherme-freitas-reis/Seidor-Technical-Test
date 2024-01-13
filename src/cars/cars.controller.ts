import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { CarsService } from './cars.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@ApiTags("Cars")
@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) { }

  @Post()
  create(@Body() createCarDTO: CreateCarDto) {
    return this.carsService.create(createCarDTO);
  }

  @Get()
  findAll() {
    return this.carsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const car = await this.carsService.findOne(id);

    if (!car)
      throw new NotFoundException(`Car with id ${id} not found`);

    return car;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarDTO: UpdateCarDto) {
    return this.carsService.update(id, updateCarDTO);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carsService.remove(id);
  }
}
