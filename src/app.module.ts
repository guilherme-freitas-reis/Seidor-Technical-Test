import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { DriversModule } from './drivers/drivers.module';
import { RidesModule } from './rides/rides.module';

@Module({
  imports: [CarsModule, DriversModule, RidesModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
