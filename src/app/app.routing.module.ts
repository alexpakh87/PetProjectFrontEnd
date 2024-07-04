import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListComponent } from './components/user-list/user-list.component';
import { UserSignupComponent } from './components/user-signup/user-signup.component';


const routes: Routes = [

  { path: 'users-list', component: UserListComponent },
  { path: 'users-signup', component: UserSignupComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}