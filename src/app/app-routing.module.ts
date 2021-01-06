import { UserUpdateComponent } from './user-update/user-update.component';
import { UsersListComponent } from './users-list/users-list.component';
import { FormComponent } from './form/form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo:'/register', pathMatch: 'full'},
  { path: 'register', component: FormComponent },
  { path: 'users-list', component: UsersListComponent},
  { path: 'users-update', component: UserUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
