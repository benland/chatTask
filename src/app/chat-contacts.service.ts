import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IChatContact } from './i-chat-contact.interface';
import { map, take } from 'rxjs/operators';

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

@Injectable({
  providedIn: 'root'
})
export class ChatContactsService {
  constructor(private http: HttpClient) {
  }

  getContactsPromise(): Promise<IChatContact[]> {
    return this.http.get<any[]>(USERS_URL)
      .pipe(
        map(contacts => contacts.map(({ name, id }) => ({
          id,
          name,
          color: this.getRandomColor(),
          messages: [],
          lastMessageTime: new Date(),
        }))),
        take(1),
      )
      .toPromise();
  }

  private getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
