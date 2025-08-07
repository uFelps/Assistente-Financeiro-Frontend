import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransacaoService {

  private apiUrl: string = "http://localhost:8080";

  constructor(private http: HttpClient) {
  }

  adicionarTransacao(transacao: any): Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/transacoes`, transacao);
  }
}
