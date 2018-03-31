import {NgModule} from '@angular/core';
import {CalculatorComponent} from './calculator/calculator.component';
import {SharedModule} from '../app-shared/app-shared.module';
import { CoreModule } from './core/core.module';
import { CalculatorRoutingModule } from './calculator-routing.module';

@NgModule({
    imports: [
        SharedModule,
        CoreModule,
        CalculatorRoutingModule
    ],
    declarations: [CalculatorComponent],
    exports: [CalculatorComponent]
})
export class CalculatorModule {
}
