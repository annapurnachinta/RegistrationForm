import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormDetailsService } from '../services/form-details.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users

  constructor(private userService: FormDetailsService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.users  = this.userService.getUser()
  }

  deleteUser(index){
    this.users = this.userService.deleteUser(index)
    this.users  = this.userService.getUser()
  }

  updateUser(index){
    this.userService.updateForm.next(index)
    console.log(index)
    this.router.navigate(['/users-update'])
  }

}
