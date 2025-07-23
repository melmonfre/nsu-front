import { Component, signal, effect, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Credito } from './dto/Credito';
import { CreditoTableModule } from './credito-table/credito-table.module';
import { CreditoService } from './services/credito.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CreditoTableModule, HttpClientModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class App {
  protected readonly title = signal('nsu-app');
  listaDeCreditos: Credito[] = [];

  constructor(private creditoService: CreditoService) {
    this.loadCreditos();
  }

  loadCreditos() {
    const numeroNfse = '7891011'; 
    this.creditoService.findByNumeroNfse(numeroNfse).subscribe({
      next: (data) => this.listaDeCreditos = data,
      error: (err) => console.error('Erro ao buscar créditos', err)
    });
  }
}
