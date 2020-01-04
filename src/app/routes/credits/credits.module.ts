import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { CreditsRoutingModule } from './credits-routing.module';
import { CreditsCreditmanagerComponent } from './creditmanager/creditmanager.component';

const COMPONENTS = [CreditsCreditmanagerComponent];
const COMPONENTS_DYNAMIC = [];

@NgModule({
  imports: [
    SharedModule,
    CreditsRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_DYNAMIC
  ],
  entryComponents: COMPONENTS_DYNAMIC
})
export class CreditsModule { }
