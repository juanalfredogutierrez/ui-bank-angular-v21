import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-cuentas-page-component',
  templateUrl: './cuentas-page.component.html',
})
export class CuentasPageComponent {
  protected readonly accounts = signal([
    { name: 'Cuenta Ahorros', number: '****4567', balance: 'S/ 45,230.50', status: 'Activa' },
    { name: 'Cuenta Corriente', number: '****1234', balance: 'S/ 38,500.00', status: 'Activa' },
    { name: 'Plazo Fijo', number: '****9021', balance: 'S/ 25,000.00', status: 'Vence en 90 dias' },
  ]);
}
