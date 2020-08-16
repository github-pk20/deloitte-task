import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productDetails = PRODUCTS;

  constructor() { }

  ngOnInit(): void {
  }

}
