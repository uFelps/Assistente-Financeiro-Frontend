import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ChatAssistenteIa} from './chat-assistente-ia/chat-assistente-ia';
import {NovaTransacao} from './nova-transacao/nova-transacao';



@Component({
  selector: 'app-header',
  imports: [
    FormsModule,
    CommonModule,
    ChatAssistenteIa,
    NovaTransacao
  ],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

}
