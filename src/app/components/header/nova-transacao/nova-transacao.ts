import { Component } from '@angular/core';
import {Button} from 'primeng/button';
import {Dialog} from "primeng/dialog";
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nova-transacao',
  imports: [
    FormsModule,
    Button,
    Dialog,
    InputTextModule
  ],
  templateUrl: './nova-transacao.html',
  styleUrl: './nova-transacao.css'
})
export class NovaTransacao {

  visible: boolean = false;

  transacao = {
    tipo: '',
    valor: '',
    categoria: '',
    descricao: '',
    data: ''
  }

  showDialog() {
    this.visible = true;
  }

  enviarTransacao() {
    console.log(this.transacao);
  }

}
