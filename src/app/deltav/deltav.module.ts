import { NgModule } from '@angular/core';
import { DeltavComponent } from './deltav/deltav.component';
import { DeltavRoutingModule } from './deltav-routing.module';
import {SharedModule} from '../app-shared/app-shared.module';

@NgModule({
  imports: [
    SharedModule,
    DeltavRoutingModule
  ],
  declarations: [DeltavComponent]
})
export class DeltavModule { }
