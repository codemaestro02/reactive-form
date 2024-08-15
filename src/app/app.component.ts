import {Component} from '@angular/core';
import {FormComponent} from './form/form.component';
import {SuccessComponent} from './success/success.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterOutlet} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ReactiveFormsModule,
    FormComponent,
    SuccessComponent,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reactive-form';
}
