import { CarsService } from './../../services/cars.service';
import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/interfaces/car';

@Component({
  selector: 'app-cars-page',
  templateUrl: './cars-page.component.html',
  styleUrls: ['./cars-page.component.scss']
})
export class CarsPageComponent implements OnInit {

  cars: any;
  carName: string = "";
  carColor: string = "";
  colors: string[] = ["red", "blue", "green", "tomato", "aqua", "purple", "pink", "yellow"];
  appTitle: any;

  constructor(private carsService: CarsService) { };

  ngOnInit() {
    this.appTitle = this.carsService.getAppTitle()
  };

  getRandColor() {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  };

  loadCars() {
    this.carsService
      .getCars()
      .subscribe({
        next: (cars: Car[]) => {
          this.cars = cars;
        },
        error: (error) => {
          alert(error);
        }
      });
  };

  addCar() {
    this.carsService
      .addCar(this.carName, this.carColor)
      .subscribe((car: Car) => {
        this.loadCars()
      });
    this.carName = "";
    this.carColor = "";
  };

  setNewColor(car: Car) {
    this.carsService
      .changeColor({ ...car, color: this.getRandColor() })
      .subscribe((car) => {
        this.cars[car.id - 1] = car;
      });
  };

  deleteCar(car: Car) {
    this.carsService
      .deleteCar(car)
      .subscribe((data: Car) => {
        this.loadCars()
      });
  };
}
