import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-car-page',
  templateUrl: './car-page.component.html',
  styleUrls: ['./car-page.component.scss']
})
export class CarPageComponent implements OnInit {

  id:number = 0;
  name:string = '';
  color: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.id = +this.route.snapshot.params['id'];
    // this.name = this.route.snapshot.params['name'];

    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.name = params['name'];
    });

    this.route.queryParams.subscribe((params) => {
      this.color = params['color'];
    });
  }
}
