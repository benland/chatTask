import { Component, OnInit } from '@angular/core';
import { ChatContactsService } from './chat-contacts.service';
import { IChatContact } from './i-chat-contact.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private contacts: IChatContact[];

  selectedContact: IChatContact;

  constructor(private chatContacts: ChatContactsService) {

  }

  async ngOnInit() {
    this.contacts = await this.chatContacts.getContactsPromise();
  }


  addMessage(text: string) {
    this.selectedContact.messages.push({ text, self: true });
    this.moveToTopOfTheList(this.selectedContact.id);
    this.replayMessage(text);
  }

  private replayMessage(text) {
    const { messages, id } = this.selectedContact;

    setTimeout(() => messages.push({ text, self: false }), 1000);
  }

  private moveToTopOfTheList(idToMove) {
    const idx = this.contacts.findIndex(({ id }) => id === idToMove);
    const [item] = this.contacts.splice(idx, 1);
    this.contacts = [item, ...this.contacts];
  }
}
