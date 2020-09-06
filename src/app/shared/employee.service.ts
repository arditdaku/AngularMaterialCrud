import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor() {}

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobile: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    gendre: new FormControl('', Validators.required),
    departament: new FormControl('', Validators.required),
    hireDate: new FormControl('', Validators.required),
    isPermament: new FormControl('', Validators.required),
  });
}
