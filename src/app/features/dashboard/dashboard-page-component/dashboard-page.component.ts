import { Component, signal } from '@angular/core';

import { SidebarComponent } from '../../../layout/sidebar-component/sidebar.component';
import { TopbarComponent } from '../../../layout/topbar-component/topbar.component';
import { BaseComponentsPanelComponent } from '../base-components-panel-component/base-components-panel.component';
import { DistributionCardComponent } from '../distribution-card-component/distribution-card.component';
import {
  AccountDistribution,
  NotificationItem,
  SummaryMetric,
  TableTransaction,
  Transaction,
} from '../models/dashboard.models';
import { NotificationsCardComponent } from '../notifications-card-component/notifications-card.component';
import { SummaryCardComponent } from '../summary-card-component/summary-card.component';
import { TransactionsListComponent } from '../transactions-list-component/transactions-list.component';

@Component({
  selector: 'app-dashboard-page-component',
  imports: [
    SidebarComponent,
    TopbarComponent,
    SummaryCardComponent,
    TransactionsListComponent,
    DistributionCardComponent,
    NotificationsCardComponent,
    BaseComponentsPanelComponent,
  ],
  templateUrl: './dashboard-page.component.html',
})
export class DashboardPageComponent {
  protected readonly summaryMetrics = signal<SummaryMetric[]>([
    {
      title: 'Saldo total',
      value: 'S/ 128,430.50',
      description: '+8.2% vs mes anterior',
      tone: 'positive',
      icon: '▣',
      iconClass: 'green',
      cardClass: 'green-card',
      sparklinePath: 'M2 44 C28 25 50 31 70 25 S96 1 124 12 S145 26 168 8',
    },
    {
      title: 'Cuentas',
      value: '12',
      description: '2 nuevas este mes',
      tone: 'neutral',
      icon: '▤',
      iconClass: 'blue',
    },
    {
      title: 'Transferencias',
      value: '36',
      description: '+12.5% vs mes anterior',
      tone: 'positive',
      icon: '⇄',
      iconClass: 'purple',
      cardClass: 'purple-card',
      lineClass: 'purple-line',
      sparklinePath: 'M2 42 C22 34 28 14 48 22 S74 37 93 21 S118 18 134 8 S154 9 168 0',
    },
    {
      title: 'Pagos realizados',
      value: '24',
      description: '-6.3% vs mes anterior',
      tone: 'negative',
      icon: '▣',
      iconClass: 'orange',
      cardClass: 'orange-card',
      lineClass: 'orange-line',
      sparklinePath: 'M2 44 C22 33 24 16 47 26 S76 34 89 14 S122 9 139 16 S155 6 168 2',
    },
  ]);

  protected readonly transactions = signal<Transaction[]>([
    {
      icon: '⇄',
      iconClass: 'blue',
      title: 'Transferencia a Maria Lopez',
      date: 'Hoy, 09:45 AM',
      account: 'Cuenta Ahorro ****4567',
      amount: '- S/ 2,500.00',
      tone: 'negative',
    },
    {
      icon: '⌖',
      iconClass: 'pale-blue',
      title: 'Pago de Servicios - Luz del Sur',
      date: 'Ayer, 04:12 PM',
      account: 'Cuenta Corriente ****1234',
      amount: '- S/ 180.50',
      tone: 'negative',
    },
    {
      icon: '⌂',
      iconClass: 'green',
      title: 'Deposito en efectivo',
      date: 'Ayer, 11:30 AM',
      account: 'Cuenta Ahorros ****4567',
      amount: '+ S/ 1,200.00',
      tone: 'positive',
    },
    {
      icon: '⇄',
      iconClass: 'blue',
      title: 'Transferencia de Juan Perez',
      date: '12 May, 07:20 PM',
      account: 'Cuenta Corriente ****1234',
      amount: '+ S/ 3,500.00',
      tone: 'positive',
    },
    {
      icon: '▤',
      iconClass: 'pink',
      title: 'Pago de Tarjeta de Credito',
      date: '11 May, 10:15 AM',
      account: 'Tarjeta ****7090',
      amount: '- S/ 450.00',
      tone: 'negative',
    },
  ]);

  protected readonly distribution = signal<AccountDistribution[]>([
    { colorClass: 'blue', label: 'Ahorros', amount: 'S/ 45,230.50', percent: '35%' },
    { colorClass: 'teal', label: 'Corriente', amount: 'S/ 38,500.00', percent: '30%' },
    { colorClass: 'purple', label: 'Plazo Fijo', amount: 'S/ 25,000.00', percent: '19%' },
    { colorClass: 'orange', label: 'Inversiones', amount: 'S/ 19,700.00', percent: '16%' },
  ]);

  protected readonly notifications = signal<NotificationItem[]>([
    {
      icon: '□',
      iconClass: 'blue',
      title: 'Actualizacion de terminos y condiciones',
      date: 'Mayo 12, 2024',
    },
    {
      icon: '▵',
      iconClass: 'pink',
      title: 'Mantenimiento programado',
      date: 'Mayo 15, 2024 - 12:00 AM',
    },
  ]);

  protected readonly tableTransactions = signal<TableTransaction[]>([
    { date: '12/05/2024', description: 'Transferencia', amount: '- S/ 2,500.00', tone: 'negative' },
    { date: '12/05/2024', description: 'Deposito', amount: '+ S/ 1,200.00', tone: 'positive' },
    { date: '11/05/2024', description: 'Pago de servicios', amount: '- S/ 180.50', tone: 'negative' },
  ]);
}
