import { Component } from '@angular/core';
import { ISaludo } from './ISaludo';
import { BotonesComponent } from '../botones/botones.component';

@Component({
  selector: 'app-saludo',
  standalone: true,
  imports: [BotonesComponent],
  templateUrl: './saludo.component.html',
  styleUrl: './saludo.component.css'
})
export class SaludoComponent {

  pokemon: ISaludo ={
    textoBase: 'caracteristicas:',
    titulo: 'Pokemon',
    urlImagen: ''
  }

  constructor(){
    this.pokemon.urlImagen = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${getRandomInt(100)}.png
    `
  }

  getRandomNum(max: number){
    return Math.floor(Math.random() * max);
  }

}

function getRandomInt(max: number){
  return Math.floor(Math.random() * max);
}