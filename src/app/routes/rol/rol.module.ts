import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { RolRoutingModule } from './rol-routing.module';
import { RolRolmanagerComponent } from './rolmanager/rolmanager.component';

const COMPONENTS = [RolRolmanagerComponent];
const COMPONENTS_DYNAMIC = [];

@NgModule({
  imports: [
    SharedModule,
    RolRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_DYNAMIC
  ],
  entryComponents: COMPONENTS_DYNAMIC
})
export class RolModule { }
