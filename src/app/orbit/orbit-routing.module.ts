import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {OrbitComponent} from './orbit/orbit.component';


const routes: Routes = [
    {
        path: '',
        component: OrbitComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OrbitRoutingModule { }
