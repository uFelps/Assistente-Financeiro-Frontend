import {Component} from '@angular/core';
import {Button} from 'primeng/button';
import {Dialog} from "primeng/dialog";
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';
import {SelectModule} from 'primeng/select';
import {InputNumberModule} from 'primeng/inputnumber';
import {DatePicker} from 'primeng/datepicker';

@Component({
  selector: 'app-nova-transacao',
  imports: [
    FormsModule,
    Button,
    Dialog,
    InputTextModule,
    SelectModule,
    InputNumberModule,
    DatePicker
  ],
  templateUrl: './nova-transacao.html',
  styleUrl: './nova-transacao.css'
})
export class NovaTransacao {

  visible: boolean = false;

  tiposTransacoes = [
    {name: 'Entrada'},
    {name: 'Saída'},
  ];

  tiposCategoria = {
    entrada: [
      {name: 'Salário'},
      {name: 'Freelancer'},
      {name: 'Investimentos'},
      {name: 'Outro'},
    ],
    saida: [
      {name: 'Moradia'},
      {name: 'Alimentação'},
      {name: 'Transporte'},
      {name: 'Saúde'},
      {name: 'Educação'},
      {name: 'Lazer'},
      {name: 'Outro'},
    ]
  };

  transacao = {
    tipo: '',
    valor: 0,
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
