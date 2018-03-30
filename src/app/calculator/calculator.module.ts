import {NgModule} from '@angular/core';
import {CalculatorComponent} from './calculator/calculator.component';
import {SharedModule} from '../app-shared/app-shared.module';
import {KatexModule} from 'ng-katex';
import { CoreModule } from './core/core.module';

@NgModule({
    imports: [
        SharedModule,
        KatexModule,
        CoreModule
    ],
    declarations: [CalculatorComponent],
    exports: [CalculatorComponent]
})
export class CalculatorModule {
}
