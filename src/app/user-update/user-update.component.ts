import { FormDetailsService } from './../services/form-details.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormDetails } from '../models/form-details.model'

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  updateForm: FormGroup;
  index:number;
  user: FormDetails;
  constructor(private route: ActivatedRoute,
              private router: Router, 
              private userService: FormDetailsService) { }

  ngOnInit(): void { }

  OnSubmit(){
    console.log('update form')
  }

}
