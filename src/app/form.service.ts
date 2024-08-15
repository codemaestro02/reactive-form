// src/app/form.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private router: Router, private toastr: ToastrService) { }

  submitForm(data: any): Observable<boolean> {
    const isSuccess = data.successful === 'true';
    if (isSuccess) {
      this.toastr.success('Form submission successful!', 'Success');
      this.router.navigate(['/success']);
    } else {
      this.toastr.error('Form submission failed!', 'Error', { timeOut: 5000 });
      setTimeout(() => {
        this.router.navigate(['/']);
      }, 5000);
    }
    return of(isSuccess).pipe(delay(1000));
  }
}
