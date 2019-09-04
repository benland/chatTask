import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppContactComponent } from './app-contact.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [AppContactComponent],
  exports: [
    AppContactComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class AppContactModule { }
