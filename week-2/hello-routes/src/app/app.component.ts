import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  template: `
    <div class="container">
      <div class="row">
        <h2>Here's the About Page!</h2>
      </div>
    </div>
  `,
  styles: [`
    .container {
      margin-top: 20px;
    }
    h2 {
      color:red;
    }
    `
  ],
  template: `
    <div class="container">
      <div class="row">
        <h2>Here's the Contact Page!</h2>
      </div>
    </div>
  `, 
  styles: [`
    .container {
      margin-top: 20px;
    }
    h2 {
      color:steelblue;
    }
    `
  ], 
  template: `
    <div class="container">
      <div class="row">
        <h2>Here's the Home Page!</h2>
      </div>
    </div>
  `,
  styles: [`
    .container {
      margin-top: 20px;
    }
    h2 {
      color:darkorange;
    }
    `
  ],  
})
export class AppComponent {
  title = 'app';
}
