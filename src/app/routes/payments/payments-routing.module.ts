import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentsManagepaymentsComponent } from './managepayments/managepayments.component';

const routes: Routes = [{ path: 'managepayments', component: PaymentsManagepaymentsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsRoutingModule { }
