import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PRODUCTS } from '../product';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Output() selectedProduct = new EventEmitter<any>();
  productDetails;
  productPerPage;
  totalItems;

  constructor() { }

  ngOnInit() {
    this.productDetails = PRODUCTS;
    this.totalItems = this.productDetails.length;
    this.productPerPage = this.productDetails.slice(0, 6);
  }

  emitProductDetail(product) {
  	this.selectedProduct.emit(product);
  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.productPerPage = this.productDetails.slice(startItem, endItem);
  }

}
