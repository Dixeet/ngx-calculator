import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import {SharedModule} from '../app-shared/app-shared.module';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
      SharedModule,
      RouterModule
  ],
  declarations: [NavbarComponent, HomeComponent],
  exports: [NavbarComponent, HomeComponent]
})
export class LayoutModule { }
