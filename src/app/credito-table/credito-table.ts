import { Component } from '@angular/core';
import { Credito } from '../dto/Credito';
import { CreditoService } from '../services/credito.service';

@Component({
  selector: 'app-credito-table',
  templateUrl: './credito-table.html',
  styleUrl: './credito-table.css',
  standalone: false
})
export class CreditoTable {
  searchTerm = '';
  creditos: Credito[] = [];

  constructor(private creditoService: CreditoService) {}

  buscarCreditoPorNumero() {
    if (!this.searchTerm.trim()) {
      this.creditos = [];
      return;
    }

    this.creditoService.findByNumeroCredito(this.searchTerm.trim()).subscribe({
      next: (res) => this.creditos = [res],
      error: (err) => {
        console.error('Erro ao buscar crédito:', err);
        this.creditos = [];
      }
    });
  }
}
