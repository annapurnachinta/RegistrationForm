import { FormDetails } from 'src/app/models/form-details.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormDetailsService {

  constructor() { }

  addUser(user: FormDetails) {
    let users = [];
    if (localStorage.getItem('Users')) {
      users = JSON.parse(localStorage.getItem('Users'));
      users = [user, ...users];
    } else {
      users.push(user)
    }
    localStorage.setItem('Users', JSON.stringify(users));
  }

  getUser(){
    return JSON.parse(localStorage.getItem('Users'))
  }


}
