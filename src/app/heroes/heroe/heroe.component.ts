import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent{

        nombre  : string =  'Ironman';
        edad    : number =  69;

        get nombreCapitalizado(){
            return this.nombre.toLocaleUpperCase();
        }
        obtenerNombre(): string{
            return `${this.nombre} - ${this.edad}`
        }

        CambiarNombre(): void {
            this.nombre = 'Spiderman';
        }
        cambiarEdad():void {
            this.edad = 37;
        }
}

