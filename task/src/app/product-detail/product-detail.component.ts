import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PRODUCTS } from '../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  selectedProductDetail = [];
  routeSub: any;
  productDetails = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  	this.productDetails = PRODUCTS;
  	this.routeSub = this.route.params.subscribe(params => {
      this.selectedProductDetail = this.productDetails.filter((detail) => detail.id == params['id']);
    });
  }

}
