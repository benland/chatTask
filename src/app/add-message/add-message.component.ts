import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-message',
  templateUrl: './add-message.component.html',
  styleUrls: ['./add-message.component.scss']
})
export class AddMessageComponent {
  @Output() messageSent = new EventEmitter<string>();
  message = '';

  sendMessage() {
    this.messageSent.emit(this.message);
    this.message = '';
  }
}
