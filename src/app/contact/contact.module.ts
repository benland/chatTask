import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [ContactComponent],
  exports: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class ContactModule { }
