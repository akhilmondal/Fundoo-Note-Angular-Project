import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServicesService } from 'src/app/Services/userServices/user-services.service';


@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent {
  [x: string]: any;

  forgetForm!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private user: UserServicesService
  ) {}


  ngOnInit() {
    this.forgetForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.forgetForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.forgetForm.valid) {
      let payload = {
        emailId: this.forgetForm.value.email,
      };
      // this.user
      //   .forgetPassword(payload)
      //   .subscribe((Response: any) => console.log('Mail send Successfully for reset password:', Response));
    }
  }

}
