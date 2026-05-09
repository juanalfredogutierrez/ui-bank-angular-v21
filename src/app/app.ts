import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SidebarComponent } from './layout/sidebar-component/sidebar.component';
import { TopbarComponent } from './layout/topbar-component/topbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent, TopbarComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('panel-bancario');
}
