import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsListComponent } from './contacts-list.component';
import { MatCardModule } from '@angular/material/card';
import { ContactModule } from '../contact/contact.module';

@NgModule({
  declarations: [ContactsListComponent],
  imports: [
    CommonModule,
    MatCardModule,
    ContactModule,
  ],
  exports: [ContactsListComponent],
  entryComponents: [ContactsListComponent],
})
export class ContactsListModule {}
