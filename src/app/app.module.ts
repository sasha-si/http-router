import { CarsService } from './services/cars.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsPageComponent } from './components/cars-page/cars-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CarPageComponent } from './components/car-page/car-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsPageComponent,
    HomePageComponent,
    CarPageComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
