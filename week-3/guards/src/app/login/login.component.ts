import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <h1>
      Login Here.
    </h1>
  `,
  styles: [`
    .home { background-color: greenyellow; }
  `]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
