import { NotFoundComponent } from './components/not-found/not-found.component';
import { CarsPageComponent } from './components/cars-page/cars-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarPageComponent } from './components/car-page/car-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'cars', component: CarsPageComponent, children: [
    {path: ':id/:name', component: CarPageComponent},
  ]},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
