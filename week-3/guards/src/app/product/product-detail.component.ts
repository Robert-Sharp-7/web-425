import { Component, OnInit } from "../../../node_modules/@angular/core";

@Component({
    selector: 'app-product-detail',
    template: `
        <h1 class="product">Product Detail Component</h1>
        <input placeholder="Your name here" type="text" [formControl]="name">
        `,
        styles: [ `
            .product {background-color: yellow;}
        `]
})

export class ProductDetailComponent implements OnInit {

    name: FormControl = new FormControl();

    constructor() { }

    ngOnInit() {

    }
}