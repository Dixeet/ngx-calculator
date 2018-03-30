import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CalculatorComponent} from './calculator/calculator/calculator.component';
import {HomeComponent} from './app-layout/home/home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'calculator',
        component: CalculatorComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}