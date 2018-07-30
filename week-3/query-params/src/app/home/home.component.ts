import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <p>
      Home base!
    </p>
  `,
  styles: [ `
  .container {
    margin-top: 20px;
  }
  h2 {
    color: blue;
  }
`]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
