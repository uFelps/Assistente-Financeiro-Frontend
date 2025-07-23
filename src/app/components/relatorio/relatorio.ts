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
      valor : "R$ 6000.00",
      textColor: "text-blue-600",
      icon: "pi pi-dollar",
      iconColor: "color: gray"
    },
    {
      titulo : "Transações",
      valor : "10",
      textColor: "text-black-600",
      icon: "pi pi-chart-pie",
      iconColor: "color: gray"
    },
    {
      titulo : "Entradas",
      valor : "R$ 6000.00",
      textColor: "text-green-600",
      icon: "pi pi-arrow-up-right",
      iconColor: "color: green"
    },
    {
      titulo : "Saídas",
      valor : "R$ 1000.00",
      textColor: "text-red-600",
      icon: "pi pi-arrow-down-right",
      iconColor: "color: red"
    }
  ];
}
