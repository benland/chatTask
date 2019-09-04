import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input() message: string;

  @HostBinding('class.self') @Input() self: boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
