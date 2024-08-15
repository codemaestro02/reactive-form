import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';
import {provideAnimations} from "@angular/platform-browser/animations";
import {HttpClientModule} from '@angular/common/http';
import {routes} from './app.routes';
import {provideToastr} from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    provideToastr(),
    HttpClientModule,  // Include HttpClientModule for making HTTP requests
    provideAnimations()  // Include animations for Angular Material components
  ]
};
