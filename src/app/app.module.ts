import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './app-core/app-core.module';
import { SharedModule } from './app-shared/app-shared.module';
import { AppLayoutModule } from './app-layout/app-layout.module';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        CoreModule,
        SharedModule,
        AppRoutingModule,
        AppLayoutModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
