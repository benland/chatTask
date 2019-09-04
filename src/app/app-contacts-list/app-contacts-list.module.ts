import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppContactsListComponent } from './app-contacts-list.component';
import { MatCardModule } from '@angular/material/card';
import { AppContactModule } from '../app-contact/app-contact.module';

@NgModule({
  declarations: [AppContactsListComponent],
  imports: [
    CommonModule,
    MatCardModule,
    AppContactModule,
  ],
  exports: [AppContactsListComponent],
  entryComponents: [AppContactsListComponent],
})
export class AppContactsListModule {}
