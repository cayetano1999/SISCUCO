import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AbcDefComponent } from './def/def.component';

const routes: Routes = [{ path: 'def', component: AbcDefComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AbcRoutingModule { }
