import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { PaymentsRoutingModule } from './payments-routing.module';
import { PaymentsManagepaymentsComponent } from './managepayments/managepayments.component';

const COMPONENTS = [PaymentsManagepaymentsComponent];
const COMPONENTS_DYNAMIC = [];

@NgModule({
  imports: [
    SharedModule,
    PaymentsRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_DYNAMIC
  ],
  entryComponents: COMPONENTS_DYNAMIC
})
export class PaymentsModule { }
