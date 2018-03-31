import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {DeltavComponent} from './deltav/deltav.component';


const routes: Routes = [
    {
        path: '',
        component: DeltavComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DeltavRoutingModule { }
