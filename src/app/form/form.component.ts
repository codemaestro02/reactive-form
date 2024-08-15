import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {FormService} from '../form.service';
import {NgForOf, NgIf} from "@angular/common";
import {ToastrService} from "ngx-toastr";
import {NgxSemanticModule} from "ngx-semantic";


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    NgForOf,
    NgxSemanticModule
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {
  form: FormGroup;
  countries: any[] = [];
  occupations: string[] = ['Frontend Developer', 'Backend Developer', 'Designer', 'Devops Engineer'];

  toaster = inject(ToastrService);
  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient, private formService: FormService) {
    this.form = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*[!@#$&*]).{8,}$')]],
      phone: ['', Validators.required],
      country: ['', Validators.required],
      occupation: ['', Validators.required],
      successful: ['', Validators.required]
    })
  }

  ngOnInit() {
    this.loadCountries();
  }

  loadCountries() {
    this.http.get<any[]>('https://restcountries.eu/rest/v2/all')
      .subscribe(data => {
        this.countries = data.map(country => ({
          name: country.name.common,
        }));
      });
  }

  onSubmit() {
    if (this.form.valid){
      if (this.form.controls['successful'].value === 'true'){
        this.toaster.success('Form submitted successfully!', 'Success', { timeOut:2000});
        this.formService.submitForm(this.form.value).subscribe(data => console.log(data));
        this.router.navigate(['/success']);
      }
      else {
        this.toaster.error('Form submission failed!', 'Error', { timeOut:2000})
      }

    }
    else {
      this.form.markAllAsTouched();
      this.toaster.warning('Please fill out all required fields!', 'Error', { timeOut:1000})

    }
  }
}


