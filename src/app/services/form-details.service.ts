import { FormDetails } from 'src/app/models/form-details.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormDetailsService {
  users = JSON.parse(localStorage.getItem('Users')) || [];

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

  getIndex(index: number){
    return this.users[index];
}

  updateUser(index: number, updateUser: FormDetails){
    this.users[index] = updateUser
  }

}
