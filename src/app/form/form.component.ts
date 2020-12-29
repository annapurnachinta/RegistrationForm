import { FormDetails } from './../models/form-details.model';
import { FormDetailsService } from './../services/form-details.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  user: FormDetails;

  constructor(private formBuilder: FormBuilder,
              private userService: FormDetailsService,) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      emailId : new FormControl(null, [Validators.required, Validators.email]),
      // phoneNo: new FormControl(null, [Validators.required, Validators.maxLength(10)]),
      // gender: new FormControl(null, Validators.required),
      // role: new FormControl(null, Validators.required),
  });

  }

  // registrationForm = new FormGroup({
  //   firstName : new FormControl('', Validators.required),
  // })

  OnSubmit(){
    this.submitted = true;

    if (this.registerForm.valid) {
      console.log(this.registerForm.value);

      this.userService.addUser(this.userData());
      alert('Congrats, you are successfully registered');
  } else {
    console.log(this.registerForm.value);
      alert('Kindly provide the required fields');
  }

  }

  userData(): FormDetails {
    return this.user = {
      firstName : this.firstName.value,
      lastName:this.lastName.value,
      emailId : this.emailId.value
      // phoneNo :this.phoneNo.value,
      // gender: this.gender.value,
      // role: this.role.value
    }
  }

  get firstName() {
    return this.registerForm.get('firstName') as FormControl;
  }

  get lastName() {
    return this.registerForm.get('lastName') as FormControl;
  }
  // get phoneNo() {
  //   return this.registerForm.get('passwphoneNoord') as FormControl;
  // }
  get emailId() {
    return this.registerForm.get('emailId') as FormControl;
  }
  // get gender() {
  //   return this.registerForm.get('gender') as FormControl;
  // }
  // get role() {
  //   return this.registerForm.get('role') as FormControl;
  // }

}
