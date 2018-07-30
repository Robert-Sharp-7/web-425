import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-seller-info',
  template: `
    <p>
      Seller is Billy-Bob, id {{ sellerId }}!
    </p>
  `,
  styles: [ `
    :host { background: yellow;}
    `
    ]
})
export class SellerInfoComponent implements OnInit {

  sellerId: string;

  constructor(route: ActivatedRoute) {
    this.sellerId = route.snapshot.paramMap.get('id');
   }

  ngOnInit() {
  }

}
