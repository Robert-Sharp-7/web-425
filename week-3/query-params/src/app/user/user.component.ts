import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <p>
      User FN2187 reports!
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
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
