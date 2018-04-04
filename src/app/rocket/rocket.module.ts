import { NgModule } from '@angular/core';

import { RocketRoutingModule } from './rocket-routing.module';
import {SharedModule} from '../app-shared/app-shared.module';
import { RocketComponent } from './rocket/rocket.component';

@NgModule({
  imports: [
    SharedModule,
    RocketRoutingModule
  ],
  declarations: [RocketComponent]
})
export class RocketModule { }
