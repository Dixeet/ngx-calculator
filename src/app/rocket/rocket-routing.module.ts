import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RocketComponent} from './rocket/rocket.component';

const routes: Routes = [
    {
        path: '',
        component: RocketComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RocketRoutingModule { }
