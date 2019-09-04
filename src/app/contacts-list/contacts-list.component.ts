import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IChatContact } from '../i-chat-contact.interface';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent {
  @Input() contacts: IChatContact[];
  @Output() contactSelected = new EventEmitter<IChatContact>();

  selectedId: number;

  trackByFn(index, item) {
    return item.id;
  }

  selectContact(contact: IChatContact) {
    this.contactSelected.emit(contact);
    this.selectedId = contact.id;
  }
}
