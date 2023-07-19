import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServicesService } from 'src/app/Services/userServices/user-services.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private user: UserServicesService
  ) {}
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassWord: ['', Validators.required],
    });
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      let payload = {
        firstName: this.registerForm.value.firstName,
        lastName: this.registerForm.value.lastName,
        emailId: this.registerForm.value.email,
        passWord: this.registerForm.value.confirmPassWord,
      };
      this.user
        .register(payload)
        .subscribe((Response: any) =>
          console.log('Register Succesfully', Response)
        );
    }
  }
}
