import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidacaoService {

  constructor() { }

  validarOperacao(operacao: string): boolean {
    // Exemplo simples de validação
    const regex = /^[0-9+\-*/.]+$/;
    return regex.test(operacao);
  }
}
