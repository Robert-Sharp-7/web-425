import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h1 class="home">
      This is the home component.
    </h1>
  `,
  styles: [`
    .home { backround-color: cyan; }
    `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
