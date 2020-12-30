import { FormDetails } from './../models/form-details.model';
import { FormDetailsService } from './../services/form-details.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertifyService } from '../services/alertify.service';
import { ActivatedRoute, Router } from '@angular/router';

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
              private userService: FormDetailsService,
              private alertify: AlertifyService,
              private router : Router,
              private route: ActivatedRoute,) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      emailId : new FormControl(null, [Validators.required, Validators.email]),
      phoneNo: new FormControl(null, [Validators.required, Validators.maxLength(10)]),
      role: new FormControl(null, Validators.required),
      gender: new FormControl(null, Validators.required),
  });
  }

  OnSubmit(){
    this.submitted = true;

    if (this.registerForm.valid) {
      this.userService.addUser(this.userData());
      this.onReset();
      this.alertify.success('Congrats, you are successfully registered');
  } else {
      this.alertify.error('Kindly provide the required fields');
  }
  }

  onReset(){
    this.submitted = false;
    this.registerForm.reset();
  }

  userData(): FormDetails {
    return this.user = {
      firstName : this.firstName.value,
      lastName:this.lastName.value,
      emailId : this.emailId.value,
      phoneNo :this.phoneNo.value,
      role: this.role.value,
      gender: this.gender.value,
    }
  }

  get firstName() {
    return this.registerForm.get('firstName') as FormControl;
  }

  get lastName() {
    return this.registerForm.get('lastName') as FormControl;
  }

  get emailId() {
    return this.registerForm.get('emailId') as FormControl;
  }

  get phoneNo() {
    return this.registerForm.get('phoneNo') as FormControl;
  }

  get role() {
    return this.registerForm.get('role') as FormControl;
  }

  get gender() {
    return this.registerForm.get('gender') as FormControl;
  }

  nextPage(){
    setTimeout(() => {
      this.router.navigate(['/users-list'], {relativeTo: this.route})     
    }, 5000);
  }
}
