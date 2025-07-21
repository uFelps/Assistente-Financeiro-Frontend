import { Component } from '@angular/core';
import {Header} from '../../components/header/header';
import {Relatorio} from '../../components/relatorio/relatorio';

@Component({
  selector: 'app-home',
  imports: [
    Header,
    Relatorio
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
