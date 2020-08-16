import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PRODUCTS } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Output() selectedProduct = new EventEmitter<any>();
  productDetails = PRODUCTS;

  constructor() { }

  ngOnInit(): void {
  }

  emitProductDetail(product) {
  	this.selectedProduct.emit(product);
  }

}
