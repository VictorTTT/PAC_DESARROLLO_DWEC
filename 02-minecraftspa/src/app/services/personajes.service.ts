/*Injectable viene del repositorio angular core,  es una función que la vamos a poner
* como decorador en nuestra clase, es toddo lo que necesitamos para crear un servicio*/
import {Injectable} from "@angular/core";

/*Un servicio es un archivo que como su nombre indica, nos sirve datos a otros archivos
* de nuestra app cuando ésta los necesite. En este caso vamos a poner la info de todos los
* personajes en este archivo para que cuando el usario clicke en uno de ellos este archivo
* 'servicio' le ofrezca la información*/
@Injectable()
export class PersonajesService { // Un servicio es al fin y al cabo una clase de typescript con sus propiedades, constructor y métodos propios

    private personajes: Personaje[] = [
        {
            nombre: "Enderdragón",
            bio: "Es una criatura que anteriormente era conocida como Dragón del Fin. Fue uno de los primeros personajes de tipo jefe (o boss) que se incluyó en el juego. Es de color negro, con piel escamosa y ojos de color morado." + "Según los jugadores y expertos, el enderdragón es uno de los personajes más interesantes del juego debido a que es inteligente; es uno de los pocos personajes que pueden interactuar con el ambiente." + "Por ejemplo, si el jugador decide destruir algún bloque perteneciente al mundo del enderdragón, este hará todo lo posible para atacarlo." + "Entre sus poderes está la destrucción de todos los bloques que se encuentran en el universo de Minecraft, menos aquellos que se generan de manera natural.",
            img: "assets/img/EnderdragonFlying.gif",
            aparicion: "1941-11-01",
            casa: "DC"
        },
        {
            nombre: "Steve",
            bio: "Es el jugador genérico masculino del juego, cuya versión femenina se llama Alex. A pesar que se le considera un jugador representativo, los participantes tienen la opción de cambiar su aspecto según su gusto. Se caracteriza por la habilidad que tiene de cargar bloques pesados, no es tan rápido como el humano promedio y en algunas versiones del juego pueden verse zombis que usan la misma indumentaria que Steve, dando a entender que han sido versiones de este personaje que murieron anteriormente. En cuanto a su aspecto, es moreno, de cabello oscuro y ojos morados. Además, suele usar una camiseta azul, pantalones índigo y zapatillas grises. Gracias al éxito del juego, posteriormente se diseñó la versión femenina llamada Alex, la cual tiene ojos verdes y cabello rubio.",
            img: "assets/img/Steve_2.jpg",
            aparicion: "1939-05-01",
            casa: "DC"
        },
        {
            nombre: "Herobrine",
            bio: "Es una criatura con aspecto de humano, pero se cree que es una especie de espectro debido a sus ojos blancos. Su existencia en el juego ha creado polémica porque, al parecer, realmente no ha existido en las diferentes versiones; sin embargo, algunos jugadores afirman que sí existe. Se le adjudica la construcción de pirámides y de casi cualquier estructura. Cabe destacar que tiene otra personalidad de índole vengativa, ya que elabora trampas a los jugadores para robarles las pertenencias que han acumulado.",
            img: "assets/img/Herobrine.png",
            aparicion: "1964-01-01",
            casa: "Marvel"
        },
        {
            nombre: "Blaze",
            bio: "Los blazes son personajes amarillos que se encuentran envueltos en humo gris y cuyo cuerpo está conformado por bloques verticales giratorios. Estas criaturas pueden flotar, volar y emiten ruidos metálicos cuando se desplazan, aunque prefieren estar en el suelo." +
                " " +
                "Debido a que se han formado en el Inframundo, su cuerpo se adapta sin problemas al fuego y la lava. Por ello, si un blaze ataca al jugador este puede defenderse al rociarle agua o nieve." +
                " " +
                "A pesar de su aspecto inusual, los blazes tienen una relación con rasgos de los jugadores y otros seres humanoides que se desenvuelven en el juego.",
            img: "assets/img/Blaze_BE.gif",
            aparicion: "1962-05-01",
            casa: "Marvel"
        },
        {
            nombre: "Enderman",
            bio: "Son criaturas largas, altas, de bloques de color negro y ojos brillantes de color morado. Tienen la capacidad de crear y pasar por diferentes portales al momento de desplazarse. Además, solo atacarán siempre y cuando el jugador los “vea” fijamente a los ojos. Los enderman colocan y cambian la posición de los bloques, independientemente de si fueron puestos allí para desempeñar alguna función. Gracias a esto, estos seres son capaces de transformar el ambiente hasta deformarlo. Como se trata de un personaje de cuidado, se sugiere atacarlo colocando una calabaza en la cabeza (ya que así no podrán saber si los miran o no), construir casas o edificios más altos que él o golpearlo con fuerza.",
            img: "assets/img/Enderman_2.png",
            aparicion: "1940-06-01",
            casa: "DC"
        },
        {
            nombre: "Creeper",
            bio: "Se le considera uno de los seres más hostiles dentro del juego debido a que explota cuando está cerca de un jugador." +
               " " +
                    "Los creepers son criaturas que perseguirán a los jugadores mientras estos se encuentren a una distancia relativamente corta. Asimismo, tienen la capacidad de trepar paredes y enredaderas (esta característica la comparte con otras criaturas)." +
                " "+
                    "Si un rayo cae sobre un creeper, esto provocará que el poder de destrucción de este sea mucho más potente.",
            img: "assets/img/Charged_Creeper_Animated.gif",
            aparicion: "1962-08-01",
            casa: "Marvel"
        },
        {
            nombre: "Bruja",
            bio: "La bruja es otra criatura de cuidado, ya que lanza encantamientos y pócimas venenosas tanto a jugadores como a animales, sin razón aparente." +
                " "+
                    "Una bruja, como los creepers, atacará a un jugador con una serie de pociones que producen una serie de efectos, dependiendo del tipo que sea. Aunque no se desplazan con rapidez, sí son lo suficientemente inteligentes para sortear prácticamente cualquier obstáculo que se les presente." +
                " "+
                    "Entre otras características, la bruja usa un sombrero negro con un cristal ubicado en la parte central, una túnica morada y posee una larga nariz con una verruga.",
            img: "assets/img/Witch.png",
            aparicion: "1974-11-01",
            casa: "Marvel"
        },
        {
            nombre: "Golem de hierro",
            bio: "Por lo general, los golem son criaturas altas y fuertes, cuya función principal es la protección del jugador o de los aldeanos que puedan encontrarse amenazados por criaturas hostiles." +
                " "+
                    "Un golem de hierro se hace presente cuando se ubica en una aldea de más de 21 casas y con un mínimo de 10 aldeanos adultos. Asimismo, es capaz de construir otras aldeas, según las especificaciones que plantee el jugador." +
                " "+
                    "Además, estos son fabricados por el propio jugador; el hierro es una materia prima que se encuentra de manera abundante en el juego. Sin embargo, la colocación de sus piezas requiere precisión. " +
                " "+
                    "Una ventaja importante de tener un golem es que este es capaz de resistir cualquier tipo de ataque; incluso, muy pocas criaturas hostiles sobreviven a sus enfrentamientos. Los enemigos más comunes de un golem son el enderdragón y el enderman.",
            img: "assets/img/Minecraft iron golem.png",
            aparicion: "1974-11-01",
            casa: "Marvel"
        },
        {
            nombre: "Billy",
            bio: "Billy el gato debería haberle hecho caso a su madre. Pero no lo hizo. Y ahora se ha perdido en el Inframundo, un lugar extraño y poblado de criaturas horripilantes. Acompañado de un ghast casi alegre y de una bruja no demasiado malvada, Billy desarrolla unos increíbles poderes sobrenaturales.",
            img: "assets/img/GatitoBilly_.jpg",
            aparicion: "1974-11-01",
            casa: "Marvel"
        }

    ];

    // Constructor del servicio
    constructor() {
        console.log('Servicio preparado para ser usado'); // Simplemente para saber que está activo
    }

    // Método encargado de devolver el array de personajes (que implementan la interfaz Personajes) que hemos declarado como propiedad de la clase PersopnajesService este método se utiliza en el archivo personajes.component
    getPersonajes():Personaje[] {
        return this.personajes;
    }

    // Método encargado de devolver un solo personaje, el identificador lo hace posible, este método se utiliza en el archivo personaje.component
    getPersonaje(idx:number){
        return this.personajes[idx];
    }
}

// Marca las reglas de propiedades que tiene que tener cada personaje
export interface Personaje {
    nombre: string,
    bio: string,
    img: string
    aparicion: string,
    casa: string
}
