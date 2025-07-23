import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Credito } from '../dto/Credito';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreditoService {
  private readonly apiUrl = 'http://localhost:8080/api/creditos';

  constructor(private http: HttpClient) {}

  findByNumeroNfse(numeroNfse: string): Observable<Credito[]> {
    return this.http.get<Credito[]>(`${this.apiUrl}/${numeroNfse}`);
  }

  findByNumeroCredito(numeroCredito: string): Observable<Credito> {
    return this.http.get<Credito>(`${this.apiUrl}/credito/${numeroCredito}`);
  }
}