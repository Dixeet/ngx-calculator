import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './app-layout/home/home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'calculator',
        loadChildren: 'app/calculator/calculator.module#CalculatorModule'
    },
    {
        path: 'orbit',
        loadChildren: 'app/orbit/orbit.module#OrbitModule'
    },
    {
        path: 'deltav',
        loadChildren: 'app/deltav/deltav.module#DeltavModule'
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}