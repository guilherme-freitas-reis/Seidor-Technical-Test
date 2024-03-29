import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {
  constructor(private prisma: PrismaService) { }

  create(createCarDTO: CreateCarDto) {
    return this.prisma.car.create({
      data: createCarDTO,
    })
  }

  findAll() {
    return this.prisma.car.findMany();
  }

  findOne(id: string) {
    return this.prisma.car.findUnique({
      where: { id },
    });
  }

  update(id: string, updateCarDTO: UpdateCarDto) {
    return this.prisma.car.update({
      where: { id },
      data: updateCarDTO,
    });
  }

  remove(id: string) {
    return this.prisma.car.delete({
      where: { id },
    });
  }
}
