import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-product-detail',
  template: `
    <p>
      This product rocks!
    </p>
  `,
  styles: [ `
    .product {
      background-color: cyan;
    }
  `
  ]
})
export class ProductDetailComponent implements OnInit {
  productId: string;
  sellerId: 1234;

  constructor(route: ActivatedRoute) {
    this.productId = route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
  }

}
