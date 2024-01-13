import { Injectable } from '@nestjs/common';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class DriversService {
  constructor(private prisma: PrismaService) { }

  create(createDriverDto: CreateDriverDto) {
    return this.prisma.driver.create({
      data: createDriverDto,
    });
  }

  findAll() {
    return this.prisma.driver.findMany();
  }

  findOne(id: string) {
    return this.prisma.driver.findUnique({
      where: { id },
    });
  }

  update(id: string, updateDriverDto: UpdateDriverDto) {
    return this.prisma.driver.update({
      where: { id },
      data: updateDriverDto,
    });
  }

  remove(id: string) {
    return this.prisma.driver.delete({
      where: { id },
    });
  }
}
