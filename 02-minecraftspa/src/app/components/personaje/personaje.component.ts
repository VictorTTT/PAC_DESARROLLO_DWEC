import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router"; // Para tomar el parámetro que viene por la url necesitamos importar esto
import {PersonajesService} from "../../services/personajes.service"; // para poder utilizar el método que hemos creado en el servicio tenemos que importar esto otro


@Component({
    selector: 'app-personaje',
    templateUrl: './personaje.component.html',
})
export class PersonajeComponent {

    personaje: any = {}; // Hay que crear un objeto personaje en este archivo

    // Para utilizar las importaciones dentro del construsctor tenemos que crear variables (objetos) del tipo de clase que hemos importado
    constructor(private activatedRoute: ActivatedRoute, // Una vez importado lo metemos en el constructor
                private _personajesService: PersonajesService) { // y este otro también

        this.activatedRoute.params.subscribe(params => { // con esta sintaxis obtenemos el parámetro que se pasa de ruta a ruta
            console.log(params['id']); // podemos comprobarlo haciendo un log, recordemos que este parámetro se llama así ('id') porque en el archivo router le dimos ese nombre

            // En este puntonos encontramos con la duda de cómo obtener a un heroe en particular, para ello deberemos modificar el servicio,
            // ya teníamos un método getPersonajes que nos ofrecía toddo el array de Personajes, pues ahora debemos hacer lo mismo con un solo
            // pesronaje acompañándolo de su identificador, para ello utilizamos el objeto personaje que hemos creado en este archivo y lo
            // y lo igualamos al objeto que representa al servicio tomando el método que allí hemos creado para gestionar a un solo personaje
            // y añadiéndole el parámetro correspondiente.

            this.personaje = this._personajesService.getPersonaje(params['id']);
            console.log(this.personaje); // Para ver en la consola delnavegador que hemos tenido éxito
        });
    }


}
