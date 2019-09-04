import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { IChatContact } from '../i-chat-contact.interface';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @Input() contact: IChatContact;
  @Input() minimal = false;

  @HostBinding('class.selected') @Input() selected: boolean;
  constructor() { }

  ngOnInit() {
  }

}
