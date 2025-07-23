import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditoTable } from './credito-table';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf, DatePipe, CurrencyPipe, PercentPipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [CreditoTable],
  imports: [
    CommonModule,
    FormsModule,
    NgFor,
    NgIf,
    DatePipe,
    CurrencyPipe,
    PercentPipe,
  ],
  exports: [CreditoTable]
})
export class CreditoTableModule {}