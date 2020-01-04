import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreditsCreditmanagerComponent } from './creditmanager/creditmanager.component';

const routes: Routes = [{ path: 'creditmanager', component: CreditsCreditmanagerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditsRoutingModule { }
