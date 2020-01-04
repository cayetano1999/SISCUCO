import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { AbcRoutingModule } from './abc-routing.module';
import { AbcDefComponent } from './def/def.component';

const COMPONENTS = [AbcDefComponent];
const COMPONENTS_DYNAMIC = [];

@NgModule({
  imports: [
    SharedModule,
    AbcRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_DYNAMIC
  ],
  entryComponents: COMPONENTS_DYNAMIC
})
export class AbcModule { }
