import { Component } from '@angular/core';

@Component({
  selector: 'app-teclado',
  standalone: true,  // Componente standalone
  templateUrl: './teclado.component.html',
  styleUrls: ['./teclado.component.css']
})
export class TecladoComponent {
  resultado: string = '';

  adicionarValor(valor: string) {
    this.resultado += valor;
  }

  calcular() {
    try {
      this.resultado = eval(this.resultado);  // Simples avaliação de expressão
    } catch {
      this.resultado = 'Erro';
    }
  }

  limpar() {
    this.resultado = '';
  }
}
