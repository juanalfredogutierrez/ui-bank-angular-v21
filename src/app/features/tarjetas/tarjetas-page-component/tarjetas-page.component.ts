import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-tarjetas-page-component',
  templateUrl: './tarjetas-page.component.html',
})
export class TarjetasPageComponent {
  protected readonly cards = signal([
    { name: 'Visa Clasica', number: '****4567', available: 'S/ 5,230.50' },
    { name: 'Visa Signature', number: '****7090', available: 'S/ 12,800.00' },
  ]);
}
