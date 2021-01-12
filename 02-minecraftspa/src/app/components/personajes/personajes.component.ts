import {Component, OnInit} from '@angular/core';
import {PersonajesService, Personaje} from '../../services/personajes.service'; // Imporatmos el sevicio que hemos creado y la Interfaz
import {Router} from "@angular/router";


@Component({
    selector: 'app-personajes',
    templateUrl: './personajes.component.html',
    styles: []
})
export class PersonajesComponent implements OnInit {

    // Declaramos un array vacío dew tipo Personaje que posteriormente contendrá los personajes que vienen del servicio
    personajes: Personaje[] = [];

    // Constructor del componente, se ejecuta al principio de toddo, antes que ngOnInit
    constructor(private _personajesService: PersonajesService,
                private router:Router) {  // esta línea hace posible que en esta página se utilice el servivio que hemos importado arriba
        // console.log('constructor');
    }

    // Se ejecuta al final una vez que toddo ha sido cargado
    ngOnInit() {

        // Una vez que se ha cargado, igualamnos el array que hemos declarado arriba a lo que nos sirve el servicio
        this.personajes = this._personajesService.getPersonajes();


    }

    // Función que se encarga de pasar por parámetro el identificador para poder visualizar a un personaje en particular
    verPersonaje(idx: number) {
        this.router.navigate(['D:\\Phpstorm_projects\\Archivos\\Curso_Angular_de_cero_a_expertoAngular_10\\Angular\\02-minecraftspa\\src\\app\\components\\personaje',idx]);

    }
}
