import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre',
  standalone: true,  // Componente standalone
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent {
  turma = 'ADS0301M';
  turno = 'Manhã';
  unidade = 'Bonsucesso';
  nome = 'Yago Santos';
  idade = 21;
}
