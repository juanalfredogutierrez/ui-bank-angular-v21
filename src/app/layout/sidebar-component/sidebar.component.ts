import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavigationItem {
  icon: string;
  label: string;
  route: string;
}

@Component({
  selector: 'app-sidebar-component',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  protected readonly navigationItems = signal<NavigationItem[]>([
    { icon: '⌂', label: 'Inicio', route: '/' },
    { icon: '▣', label: 'Cuentas', route: '/cuentas' },
    { icon: '⇄', label: 'Transferencias', route: '/transferencias' },
    { icon: '▤', label: 'Pagos', route: '/pagos' },
    { icon: '▭', label: 'Tarjetas', route: '/tarjetas' },
    { icon: '▥', label: 'Inversiones', route: '/inversiones' },
    { icon: '▧', label: 'Reportes', route: '/reportes' },
    { icon: '♙', label: 'Clientes', route: '/clientes' },
    { icon: '⚙', label: 'Configuracion', route: '/configuracion' },
  ]);
}
