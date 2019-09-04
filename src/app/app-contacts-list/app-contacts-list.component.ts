import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IChatContact } from '../i-chat-contact.interface';

@Component({
  selector: 'app-app-contacts-list',
  templateUrl: './app-contacts-list.component.html',
  styleUrls: ['./app-contacts-list.component.scss']
})
export class AppContactsListComponent {
  @Input() contacts: IChatContact[];
  @Output() contactSelected = new EventEmitter<IChatContact>();

  trackByFn(index, item) {
    return item.id;
  }
}
