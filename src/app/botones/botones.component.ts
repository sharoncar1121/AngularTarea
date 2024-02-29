import { Component } from '@angular/core';
import { IBotones } from './IBotones';

@Component({
  selector: 'app-botones',
  standalone: true,
  imports: [],
  templateUrl: './botones.component.html',
  styleUrl: './botones.component.css'
})
export class BotonesComponent {
   botones: IBotones ={
     textoBase: 'Espacio para botones para comprar o ver detalles',
     type: 'comprar'
    
   }
   constructor(){
    this.botones.type = this.getUso('ver caracteristicas')
   }

   getUso(params: 'comprar'| 'ver caracteristicas'){
    return this.botones.type = params
  }
  
  
}
