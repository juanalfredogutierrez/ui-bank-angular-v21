import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-inversiones-page-component',
  templateUrl: './inversiones-page.component.html',
})
export class InversionesPageComponent {
  protected readonly investments = signal([
    { product: 'Fondo Conservador', yield: '+4.8%', balance: 'S/ 10,450.00' },
    { product: 'Fondo Balanceado', yield: '+7.2%', balance: 'S/ 6,300.00' },
    { product: 'Deposito a plazo', yield: '+5.1%', balance: 'S/ 25,000.00' },
  ]);
}
