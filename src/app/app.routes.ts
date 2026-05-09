import { Routes } from '@angular/router';

import { ClientesPageComponent } from './features/clientes/clientes-page-component/clientes-page.component';
import { ConfiguracionPageComponent } from './features/configuracion/configuracion-page-component/configuracion-page.component';
import { CuentasPageComponent } from './features/cuentas/cuentas-page-component/cuentas-page.component';
import { DashboardPageComponent } from './features/dashboard/dashboard-page-component/dashboard-page.component';
import { InversionesPageComponent } from './features/inversiones/inversiones-page-component/inversiones-page.component';
import { PagosPageComponent } from './features/pagos/pagos-page-component/pagos-page.component';
import { ReportesPageComponent } from './features/reportes/reportes-page-component/reportes-page.component';
import { TarjetasPageComponent } from './features/tarjetas/tarjetas-page-component/tarjetas-page.component';
import { TransferenciasPageComponent } from './features/transferencias/transferencias-page-component/transferencias-page.component';

export const routes: Routes = [
  { path: '', component: DashboardPageComponent, title: 'Banco - Inicio' },
  { path: 'cuentas', component: CuentasPageComponent, title: 'Banco - Cuentas' },
  { path: 'transferencias', component: TransferenciasPageComponent, title: 'Banco - Transferencias' },
  { path: 'pagos', component: PagosPageComponent, title: 'Banco - Pagos' },
  { path: 'tarjetas', component: TarjetasPageComponent, title: 'Banco - Tarjetas' },
  { path: 'inversiones', component: InversionesPageComponent, title: 'Banco - Inversiones' },
  { path: 'reportes', component: ReportesPageComponent, title: 'Banco - Reportes' },
  { path: 'clientes', component: ClientesPageComponent, title: 'Banco - Clientes' },
  { path: 'configuracion', component: ConfiguracionPageComponent, title: 'Banco - Configuracion' },
  { path: '**', redirectTo: '' },
];
