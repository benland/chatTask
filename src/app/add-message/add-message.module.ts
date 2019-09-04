import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddMessageComponent } from './add-message.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddMessageComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FormsModule
  ],
  entryComponents: [AddMessageComponent],
  exports: [AddMessageComponent],
})
export class AddMessageModule {}
