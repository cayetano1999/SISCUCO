import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsManageaccountComponent } from './manageaccount/manageaccount.component';
import { AccountsAccounttypesComponent } from './accounttypes/accounttypes.component';

const COMPONENTS = [AccountsManageaccountComponent, AccountsAccounttypesComponent];
const COMPONENTS_DYNAMIC = [];

@NgModule({
  imports: [
    SharedModule,
    AccountsRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_DYNAMIC,
    
  ],
  entryComponents: COMPONENTS_DYNAMIC
})
export class AccountsModule { }
