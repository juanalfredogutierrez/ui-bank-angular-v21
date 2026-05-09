import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-pagos-page-component',
  templateUrl: './pagos-page.component.html',
})
export class PagosPageComponent {
  protected readonly payments = signal([
    { service: 'Luz del Sur', due: 'Vence hoy', amount: 'S/ 180.50' },
    { service: 'Agua', due: '15 Mayo', amount: 'S/ 96.20' },
    { service: 'Internet', due: '18 Mayo', amount: 'S/ 129.90' },
  ]);
}
