import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";


@Injectable()
export class DbzService{
    private _personajes: Personaje[] = [
    {
        nombre: 'Goku',
        poder: 15000
    },
    {
        nombre: 'Vegeta',
        poder: 14500
    }
    ];
    get personaje(): Personaje[]{
        return [...this._personajes];
      }

    constructor(){ console.log('servicio inicializado');   }

    agregarPersonaje(data: Personaje){
        this._personajes.push(data);
    }

}