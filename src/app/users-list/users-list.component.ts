import { Component, OnInit } from '@angular/core';
import { FormDetailsService } from '../services/form-details.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users

  constructor(private userService: FormDetailsService) { }

  ngOnInit(): void {
    this.users  = this.userService.getUser()
  }



}
