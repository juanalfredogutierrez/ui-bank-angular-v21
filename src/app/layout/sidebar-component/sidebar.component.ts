import { Component, signal } from '@angular/core';

interface NavigationItem {
  icon: string;
  label: string;
  active?: boolean;
}

@Component({
  selector: 'app-sidebar-component',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  protected readonly navigationItems = signal<NavigationItem[]>([
    { icon: '⌂', label: 'Inicio', active: true },
    { icon: '▣', label: 'Cuentas' },
    { icon: '⇄', label: 'Transferencias' },
    { icon: '▤', label: 'Pagos' },
    { icon: '▭', label: 'Tarjetas' },
    { icon: '▥', label: 'Inversiones' },
    { icon: '▧', label: 'Reportes' },
    { icon: '♙', label: 'Clientes' },
    { icon: '⚙', label: 'Configuracion' },
  ]);
}
