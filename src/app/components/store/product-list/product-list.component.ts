import { Component, OnInit } from '@angular/core';
import { FoodService } from './product-list.component.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  foods: any;
  foodService: FoodService

  constructor( foodservice: FoodService) {
    this.foodService = foodservice;
  }

  ngOnInit(): void {

    this.foods = this.foodService.getFood().subscribe((data => {

      this.foods = data;
    }))
  }

}
