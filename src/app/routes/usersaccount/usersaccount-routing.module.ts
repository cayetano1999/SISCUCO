import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersaccountUsersaccountmanagerComponent } from './usersaccountmanager/usersaccountmanager.component';

const routes: Routes = [{ path: 'usersaccountmanager', component: UsersaccountUsersaccountmanagerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersaccountRoutingModule { }
