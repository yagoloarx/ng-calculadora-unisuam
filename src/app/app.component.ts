import { Component } from '@angular/core';
import { TecladoComponent } from './teclado/teclado.component';
import { SobreComponent } from './informacoes/sobre/sobre.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [TecladoComponent, SobreComponent]
})
export class AppComponent {
  title = 'ng-calculadora';
  mostrarSobre = false;  // Variável para controlar a exibição do componente Sobre
}
