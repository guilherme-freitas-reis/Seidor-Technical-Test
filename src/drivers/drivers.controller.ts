import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { DriversService } from './drivers.service';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Drivers")
@Controller('drivers')
export class DriversController {
  constructor(private readonly driversService: DriversService) { }

  @Post()
  @ApiOperation({ summary: "Create a new driver" })
  create(@Body() createDriverDto: CreateDriverDto) {
    return this.driversService.create(createDriverDto);
  }

  @Get()
  @ApiOperation({ summary: "Get all drivers" })
  findAll() {
    return this.driversService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: "Get a driver by id" })
  async findOne(@Param('id') id: string) {
    const driver = await this.driversService.findOne(id);

    if (!driver)
      throw new NotFoundException(`Driver with id ${id} not found`);

    return driver;
  }

  @Patch(':id')
  @ApiOperation({ summary: "Update a driver by id" })
  update(@Param('id') id: string, @Body() updateDriverDto: UpdateDriverDto) {
    return this.driversService.update(id, updateDriverDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: "Delete a driver by id" })
  remove(@Param('id') id: string) {
    return this.driversService.remove(id);
  }
}
