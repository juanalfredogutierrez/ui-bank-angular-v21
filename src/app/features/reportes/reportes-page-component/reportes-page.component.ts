import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-reportes-page-component',
  templateUrl: './reportes-page.component.html',
})
export class ReportesPageComponent {
  protected readonly reports = signal([
    { name: 'Estado de cuenta', period: 'Mayo 2024', format: 'PDF' },
    { name: 'Movimientos', period: 'Ultimos 30 dias', format: 'XLS' },
    { name: 'Resumen tributario', period: 'Anual', format: 'PDF' },
  ]);
}
