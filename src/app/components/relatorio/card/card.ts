import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  @Input() textColor: string = 'text-gray-900';
  @Input() titulo: string = 'Titulo';
  @Input() valor: string = '0000.00';
  @Input() icon: string = 'pi pi-dollar';
  @Input() iconColor: string = 'black';
}
