import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { UsersaccountRoutingModule } from './usersaccount-routing.module';
import { UsersaccountUsersaccountmanagerComponent } from './usersaccountmanager/usersaccountmanager.component';

const COMPONENTS = [UsersaccountUsersaccountmanagerComponent];
const COMPONENTS_DYNAMIC = [];

@NgModule({
  imports: [
    SharedModule,
    UsersaccountRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_DYNAMIC
  ],
  entryComponents: COMPONENTS_DYNAMIC
})
export class UsersaccountModule { }
