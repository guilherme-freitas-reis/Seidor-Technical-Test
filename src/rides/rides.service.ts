import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateRideDto } from './dto/create-ride.dto';
import { UpdateRideDto } from './dto/update-ride.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class RidesService {
  constructor(private prisma: PrismaService) { }

  async create(createRideDto: CreateRideDto) {
    const carIsUnavailable = await this.prisma.ride.findFirst({
      where: {
        carId: createRideDto.car_id,
        end: null
      }
    });

    if (carIsUnavailable)
      throw new HttpException(`Car ${createRideDto.car_id} is unavailable`, HttpStatus.CONFLICT);

    const driverIsUnavailable = await this.prisma.ride.findFirst({
      where: {
        driverId: createRideDto.driver_id,
        end: null
      }
    });

    if (driverIsUnavailable)
      throw new HttpException(`Driver ${createRideDto.driver_id} is unavailable`, HttpStatus.CONFLICT);

    const ride = await this.prisma.ride.create({
      data: {
        carId: createRideDto.car_id,
        driverId: createRideDto.driver_id,
        start: createRideDto.start,
        end: createRideDto.end,
        motive: createRideDto.motive
      }
    });

    return ride;
  }

  findAll() {
    return this.prisma.ride.findMany({
      include: {
        car: true,
        driver: true
      }
    });
  }

  findOne(id: string) {
    return this.prisma.ride.findUnique({
      where: {
        id: id
      },
      include: {
        car: true,
        driver: true
      }
    });
  }

  finishRide(id: string) {
    return this.prisma.ride.update({
      where: {
        id: id
      },
      data: {
        end: new Date()
      }
    });
  }
}
