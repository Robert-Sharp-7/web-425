import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
    <br /><br /><br />
    
    <div class="container-fluid two-way-form">
      <h2>Two-Way Binding Ex.</h2><br />
      <div class="form-group">
        <input class="form-control" type="text"
          placeholder="Your name here..."
          [{ngModel}]="name">
          
        <button class="btn btn-primary form-control" (click)="name=''">Clear Name</button>
      </div>
      
      <div class="form-group">
        <p class="alert-success">Welcome to the two-way binding example, {{name}}!</p>
      </div>
      
    </div>
  `,

  styles: [
    '
    div {
      align-content: center
    },
    .two-way-form { 
      width: 50% 
    };
    '
  ]
})
export class AppComponent {
  title = 'app';
  name: string;
}