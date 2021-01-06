import { FormDetails } from 'src/app/models/form-details.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormDetailsService {
  users = JSON.parse(localStorage.getItem('Users')) || [];
  updateForm = new Subject<number>();
  user: FormDetails[] = JSON.parse(localStorage.getItem('Users')) || []

  constructor() { }

  addUser(user: FormDetails) {
    if (localStorage.getItem('Users')) {
      this.users = JSON.parse(localStorage.getItem('Users'));
      this.users.push(user);
    } else {
      this.users.push(user)
    }
    localStorage.setItem('Users', JSON.stringify(this.users));
  }

  getUser(){
    return JSON.parse(localStorage.getItem('Users'))
  }

  deleteUser(index: number){
    this.users.splice(index, 1)
    localStorage.removeItem(this.users)
    localStorage.setItem('Users', JSON.stringify(this.users))
  }

  getUserIndex(index: number){
    return this.user[index];
  }
}
