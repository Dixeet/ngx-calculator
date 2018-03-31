import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
} from '@angular/material';
import { AutoscrollDirective } from './autoscroll.directive';
import {KatexModule} from 'ng-katex';

const MaterialModules = [
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatSidenavModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatSelectModule,
];

export const modules = [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    KatexModule,
    ...MaterialModules,
];

@NgModule({
    imports: modules,
    exports: [
        ...modules,
        AutoscrollDirective,
        KatexModule,
    ],
    declarations: [AutoscrollDirective],
})
export class SharedModule { }
