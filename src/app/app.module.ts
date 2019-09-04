import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppContactsListModule } from './app-contacts-list/app-contacts-list.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppContactModule } from './app-contact/app-contact.module';
import { MessagesModule } from './messages/messages.module';
import { AddMessageModule } from './add-message/add-message.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppContactsListModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppContactModule,
    MessagesModule,
    AddMessageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
