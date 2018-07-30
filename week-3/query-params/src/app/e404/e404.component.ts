import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e404',
  template: `
    <p>
      These are not the droids you're looking for.
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
export class E404Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
