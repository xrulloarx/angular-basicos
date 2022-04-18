import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent   {

  heroes: string[] = ['Rodolfo','Loreto','Agustina','Ulloa','Araya'];
  heroeBorrado: string = '';

  borrarHeroe(){
     this.heroeBorrado = this.heroes.shift() || '';
  }
}
