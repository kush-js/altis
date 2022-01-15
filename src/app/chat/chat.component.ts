import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  msg = "";
  messages: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  sendMsg() {
    this.messages.push(this.msg);
    this.msg = "";
  }
  


}
