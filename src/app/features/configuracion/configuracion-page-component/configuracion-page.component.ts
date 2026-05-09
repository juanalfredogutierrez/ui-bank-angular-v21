import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-configuracion-page-component',
  templateUrl: './configuracion-page.component.html',
})
export class ConfiguracionPageComponent {
  protected readonly settings = signal([
    { name: 'Seguridad', detail: 'Biometria y contrasenas' },
    { name: 'Notificaciones', detail: 'Alertas por correo y app' },
    { name: 'Preferencias', detail: 'Idioma, moneda y accesibilidad' },
  ]);
}
