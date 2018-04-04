import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {OrbitComponent} from './orbit/orbit.component';
import {OrbitHomeComponent} from './orbit-home/orbit-home.component';
import {TriangleOrbitComponent} from './triangle-orbit/triangle-orbit.component';


const routes: Routes = [
    {
        path: '',
        component: OrbitComponent,
        children: [
            {
                path: '',
                component: OrbitHomeComponent
            },
            {
                path: 'triangle-orbit',
                component: TriangleOrbitComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OrbitRoutingModule { }
