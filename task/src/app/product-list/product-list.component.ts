import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(
  	private router: Router) { }

  ngOnInit(): void {
  }

  selectedProductDetail(event) {
  	this.router.navigate(['/product-detail', event.id]);
  	localStorage.setItem('selectedProduct', JSON.stringify(event));
  }

}
