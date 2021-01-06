import { FormDetailsService } from './../services/form-details.service';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormDetails } from '../models/form-details.model'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit, OnDestroy {
  @ViewChild('f', {static: false}) slForm: NgForm;
  subscription: Subscription;
  editedItemIndex : number;
  editedItem: FormDetails

  constructor(private userService: FormDetailsService) { }

  ngOnInit(): void {
    this.subscription = this.userService.updateForm.subscribe(
      (index: number) => {
        console.log(index)
        this.editedItemIndex = index;
        this.editedItem = this.userService.getUserIndex(index);
        this.slForm.setValue({
          firstName : this.editedItem.firstName,
          lastName : this.editedItem.lastName,
          emailId : this.editedItem.emailId,
          phoneNo : this.editedItem.phoneNo,
          role : this.editedItem.role,
          gender : this.editedItem.gender
        })
      }
    );
   }

  OnSubmit(form: NgForm){
    const value = form.value
    console.log(value)
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
