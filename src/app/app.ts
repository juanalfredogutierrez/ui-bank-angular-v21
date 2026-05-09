import { Component, signal } from '@angular/core';

import { DashboardPageComponent } from './features/dashboard/dashboard-page-component/dashboard-page.component';

@Component({
  selector: 'app-root',
  imports: [DashboardPageComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('panel-bancario');
}
