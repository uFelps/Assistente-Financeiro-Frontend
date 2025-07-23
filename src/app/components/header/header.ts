import {Component} from '@angular/core';
import {Button} from 'primeng/button';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ChatAssistenteIa} from './chat-assistente-ia/chat-assistente-ia';



@Component({
  selector: 'app-header',
  imports: [
    Button,
    FormsModule,
    CommonModule,
    ChatAssistenteIa
  ],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

}
