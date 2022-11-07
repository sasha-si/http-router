import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { Car } from '../interfaces/car';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private http: HttpClient) { }

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(`http://localhost:3000/cars`)
      .pipe(
        catchError(this.handleError));
  };

  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message))
  };

  getAppTitle():Observable<any> {
    return this.http.get<any>(`http://localhost:3000/title`)
    .pipe(map((data) => data.value));
  };

  addCar(carName: string, carColor: string): Observable<Car> {
    const data = {
      name: carName,
      color: carColor
    };
    return this.http.post<Car>(`http://localhost:3000/cars`, data);
  };

  changeColor(car: Car): Observable<Car> {
    const data = {
      name: car.name,
      color: car.color
    };
    return this.http.put<Car>(`http://localhost:3000/cars/${car.id}`, data);
  };

  deleteCar(car: Car): Observable<Car> {
    return this.http.delete<Car>(`http://localhost:3000/cars/${car.id}`);
  };
}
