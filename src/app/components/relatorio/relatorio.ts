import { Component } from '@angular/core';
import {Card} from './card/card';

@Component({
  selector: 'app-relatorio',
  imports: [
    Card
  ],
  templateUrl: './relatorio.html',
  styleUrl: './relatorio.css'
})
export class Relatorio {

  valoresCards = [
    {
      titulo : "Saldo Total",
      valor : "R$ 0",
      textColor: "green",
      icon: "pi pi-dollar",
      iconColor: "color: gray"
    },
    {
      titulo : "Entradas",
      valor : "R$ 0",
      textColor: "green",
      icon: "pi pi-arrow-up-right",
      iconColor: "color: green"
    },
    {
      titulo : "Saídas",
      valor : "R$ 0",
      textColor: "red",
      icon: "pi pi-arrow-down-right",
      iconColor: "color: red"
    },
    {
      titulo : "Transações",
      valor : "0",
      textColor: "black",
      icon: "pi pi-chart-pie",
      iconColor: "color: gray"
    },
  ];
}
