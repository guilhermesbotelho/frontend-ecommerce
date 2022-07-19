import { Component, Input, OnInit } from '@angular/core';
import { Food } from '../model/Food';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input()
  food!: Food

  constructor() { }

  ngOnInit(): void {
  }

}
