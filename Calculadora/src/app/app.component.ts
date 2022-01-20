import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Calculadora';
  numeros = '';

  operadores = ['+', '-', '*', '/'];

  addNumer(numero: string) {
    if (this.numeros == '') {
      if (numero != '0')
        this.numeros = this.numeros + numero;
    } else {
      this.numeros = this.numeros + numero;
    }
  }

  addPoint() {
    if (this.numeros != '' && !this.validatePointer()) {
      this.numeros = this.numeros + '.';
    }
  }

  addOperator(operador: string) {
    if (this.numeros != '' && this.validateLastIndex()) {
      this.numeros = this.numeros + operador;
    }
  }

  result() {
    if (this.validateLastIndex()) {
      
      this.numeros = eval(this.numeros).toString();
    }
  }

  reset() {
    this.numeros = '';
  }

  private validateLastIndex() {
    const char = this.numeros.charAt(this.numeros.length - 1);
    return !this.operadores.includes(char)
  }

  private validatePointer() {
    const char = this.numeros.charAt(this.numeros.length - 1);
    return this.validateLastIndex() && char == '.'

  }

}
/*
  numeros:string[] = [];

  operadores = ['+', '-', '*', '/'];

  addNumer(numero: string) {
    if (this.numeros.length == 0) {
      if (numero != '0')
        this.numeros.push(numero) ;
    } else {
      this.numeros.push(numero) ;
    }
  }

  addPoint() {
    if (this.numeros.length != 0 && !this.validatePointer()) {
      this.numeros.push('.')
    }
  }

  addOperator(operador: string) {
    if (this.numeros.length != 0 && this.validateLastIndex()) {
      this.numeros.push(operador) ;
    }
  }

  result() {

  }

  reset() {
    this.numeros = [];
  }

  private validateLastIndex() {
    const char = this.numeros[this.numeros.length-1];
    console.log(char)
    return !this.operadores.includes(char) && char == '.'
  }

  private validatePointer() {
      const char = this.numeros[this.numeros.length-1];
      return this.validateLastIndex() && char == '.'
      
  }
*/