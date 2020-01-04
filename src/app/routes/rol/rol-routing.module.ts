import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RolRolmanagerComponent } from './rolmanager/rolmanager.component';

const routes: Routes = [{ path: 'rolmanager', component: RolRolmanagerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolRoutingModule { }
