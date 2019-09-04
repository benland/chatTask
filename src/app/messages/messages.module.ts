import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages.component';
import { MessageModule } from '../message/message.module';

@NgModule({
  declarations: [MessagesComponent],
  imports: [
    CommonModule,
    MessageModule
  ],
  entryComponents: [MessagesComponent],
  exports: [MessagesComponent],
})
export class MessagesModule {}
