import { Component, OnInit } from '@angular/core';

import { MessageService } from '../../services/message/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }
  removeMessage(index: number) {
    this.messageService.messages.splice(index, 1);
  }
}
