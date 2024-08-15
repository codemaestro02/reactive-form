import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success',
  standalone: true,
  imports: [],
  template: `
    <div>
      <h2>Form submitted successfully!</h2>
      <button (click)="goBack()">Go back to Home</button>
   </div>`,
  // templateUrl: './success.component.html',
  styleUrl: './success.component.css'
})
export class SuccessComponent {

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/']);
  }
}
