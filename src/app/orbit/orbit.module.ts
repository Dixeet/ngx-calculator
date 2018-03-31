import { NgModule } from '@angular/core';
import { OrbitComponent } from './orbit/orbit.component';
import { OrbitRoutingModule } from './orbit-routing.module';
import {SharedModule} from '../app-shared/app-shared.module';

@NgModule({
  imports: [
    SharedModule,
    OrbitRoutingModule
  ],
  declarations: [OrbitComponent]
})
export class OrbitModule { }
