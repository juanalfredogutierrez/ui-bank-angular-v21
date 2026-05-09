import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-transferencias-page-component',
  templateUrl: './transferencias-page.component.html',
})
export class TransferenciasPageComponent {
  protected readonly transfers = signal([
    { title: 'A cuentas propias', detail: 'Mueve dinero entre tus productos', amount: 'Sin costo' },
    { title: 'A terceros', detail: 'Transfiere a clientes del banco', amount: 'Instantaneo' },
    { title: 'Interbancaria', detail: 'Programa operaciones CCI', amount: 'S/ 4.50' },
  ]);
}
