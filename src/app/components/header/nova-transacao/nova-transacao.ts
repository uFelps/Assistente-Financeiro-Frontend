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
import {TransacaoService} from '../../../services/transacao.service';

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
    {name: 'Entrada', enum: "ENTRADA"},
    {name: 'Saída', enum: "SAIDA"},
  ];

  tiposCategoria = {
    entrada: [
      {name: 'Salário', enum: 'SALARIO'},
      {name: 'Freelancer', enum: 'FREELANCER'},
      {name: 'Investimentos', enum: 'INVESTIMENTOS'},
      {name: 'Outro', enum: 'OUTRO'},
    ],
    saida: [
      {name: 'Moradia', enum: 'MORADIA'},
      {name: 'Alimentação', enum: 'ALIMENTACAO'},
      {name: 'Transporte', enum: 'TRANSPORTE'},
      {name: 'Saúde', enum: 'SAUDE'},
      {name: 'Educação', enum: 'EDUCACAO'},
      {name: 'Lazer', enum: 'LAZER'},
      {name: 'Outro', enum: 'OUTRO'},
    ]
  };

  form: FormGroup;

  visible: boolean = false;

  constructor(private messageService: MessageService, private formBuilder: FormBuilder, private transacaoService: TransacaoService) {
    this.form = this.formBuilder.group({
      tipoTransacao: ['', Validators.required],
      valor: [0, [Validators.required, Validators.min(0.01)]],
      categoria: ['', Validators.required],
      descricao: ['', Validators.required],
      dataHora: ['', Validators.required]
    });
  }

  showDialog() {
    this.visible = true;
  }

  enviarTransacao() {
    this.validarForm()

    this.transacaoService.adicionarTransacao(this.form.value)
      .subscribe({
        next: (response) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Sucesso',
            detail: 'Transação adicionada com sucesso!',
            life: 3000
          });
          this.visible = false;
          this.form.reset();
        },
        error: (error) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: 'Não foi possível adicionar a transação. Tente novamente.',
            life: 3000
          });
          console.error('Erro ao adicionar transação:', error);
        }
      });
  }

  validarForm() {
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
  }

}
