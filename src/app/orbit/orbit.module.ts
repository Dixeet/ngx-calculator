import { NgModule } from '@angular/core';
import { OrbitComponent } from './orbit/orbit.component';
import { OrbitRoutingModule } from './orbit-routing.module';
import {SharedModule} from '../app-shared/app-shared.module';
import { OrbitHomeComponent } from './orbit-home/orbit-home.component';
import { TriangleOrbitComponent } from './triangle-orbit/triangle-orbit.component';

@NgModule({
  imports: [
    SharedModule,
    OrbitRoutingModule
  ],
  declarations: [OrbitComponent, OrbitHomeComponent, TriangleOrbitComponent]
})
export class OrbitModule { }
