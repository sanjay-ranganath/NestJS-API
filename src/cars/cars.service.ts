import { Injectable } from '@nestjs/common';
import { Car } from './cars.entity';

@Injectable()
export class CarsService {
    async findAll() : Promise<Car[]> {
        const car = new Car();
        car.name = "Ford Mustang";
        car.yearofmanufacture = 1999;
        car.type = "Muscle Car";

        return[car];

    }
}
