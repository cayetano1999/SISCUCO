import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountsManageaccountComponent } from './manageaccount/manageaccount.component';
import { AccountsAccounttypesComponent } from './accounttypes/accounttypes.component';

const routes: Routes = [{ path: 'manageaccount', component: AccountsManageaccountComponent },
{ path: 'accounttypes', component: AccountsAccounttypesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
