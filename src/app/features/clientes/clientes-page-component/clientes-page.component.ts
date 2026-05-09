import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-clientes-page-component',
  templateUrl: './clientes-page.component.html',
})
export class ClientesPageComponent {
  protected readonly clients = signal([
    { name: 'Maria Lopez', segment: 'Premium', status: 'Activa' },
    { name: 'Juan Perez', segment: 'Empresarial', status: 'Activa' },
    { name: 'Luz del Sur', segment: 'Servicio', status: 'Proveedor' },
  ]);
}
