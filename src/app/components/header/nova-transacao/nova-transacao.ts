import {Component} from '@angular/core';
import {Button} from 'primeng/button';
import {Dialog} from "primeng/dialog";
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SelectModule} from 'primeng/select';
import {InputNumberModule} from 'primeng/inputnumber';
import {DatePicker} from 'primeng/datepicker';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-nova-transacao',
  imports: [
    FormsModule,
    Button,
    Dialog,
    InputTextModule,
    SelectModule,
    InputNumberModule,
    DatePicker,
    ToastModule,
    ReactiveFormsModule
  ],
  providers: [MessageService],
  templateUrl: './nova-transacao.html',
  styleUrl: './nova-transacao.css'
})
export class NovaTransacao {

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
  };

  form: FormGroup;

  visible: boolean = false;

  constructor(private messageService: MessageService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      tipo: ['', Validators.required],
      valor: [0, [Validators.required, Validators.min(0.01)]],
      categoria: ['', Validators.required],
      descricao: ['', Validators.required],
      data: ['', Validators.required]
    });
  }

  showDialog() {
    this.visible = true;
  }

  enviarTransacao() {
    if (this.form.invalid) {
      Object.keys(this.form.controls).forEach(key => {
        const control = this.form.get(key);
        if (control?.invalid) {
          control.markAsTouched();
        }
      });

      this.messageService.add({
        severity: 'error',
        summary: 'Erro',
        detail: 'Por favor, preencha todos os campos corretamente',
        life: 3000
      });
      return;
    }


    this.messageService.add({
      severity: 'success',
      summary: 'Sucesso',
      detail: 'Transação salva com sucesso!',
      life: 3000 // tempo em ms que a mensagem ficará visível
    });
    this.visible = false;
    console.log(this.transacao);
  }

}
