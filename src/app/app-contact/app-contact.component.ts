import { Component, Input, OnInit } from '@angular/core';
import { IChatContact } from '../i-chat-contact.interface';

@Component({
  selector: 'app-app-contact',
  templateUrl: './app-contact.component.html',
  styleUrls: ['./app-contact.component.scss']
})
export class AppContactComponent implements OnInit {
  @Input() contact: IChatContact;
  @Input() minimal = false;

  constructor() { }

  ngOnInit() {
  }

}
