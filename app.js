//Crear 3 arrays con el nombre de las imágenes adjuntas en cada una de las posiciones.
var array1 = ['aguacate', 'ajo', 'cebolla', 'pepino', 'puerro', 'tomate', 'zanahoria'];
var array2 = ['aguacate', 'ajo', 'cebolla', 'pepino', 'puerro', 'tomate', 'zanahoria'];
var array3 = ['aguacate', 'ajo', 'cebolla', 'pepino', 'puerro', 'tomate', 'zanahoria'];

//Variables necesarias
var monedas = 0;
var tirada = 1;
var euro = "<img src='img/euro.png' alt='moneda de euro'>";
var premio = '';

// Función que actúa cuando presionamos el botón introducir monedas
function incrementaMonedas() {
    monedas++;
    document.getElementById('imprimeMonedas').innerHTML = monedas + ' ' + euro;
}


// Funcíon que actúa cuando presionamos el botón tirar
function tirar() {
    if (monedas === 0) {
        alert('Introduzca monedas para jugar');
    } else {
        //Al empezar se desactiva el botón de introducir monedas como se pide en el ejercicio
        document.getElementById('botonMonedas').disabled = true;

        //En cada tirada se gasta una moneda
        monedas--;






        function girarSlots() {
           var slot1 = (array1[Math.floor(Math.random() * 7)]);
            document.getElementById("imagen1").src = "img/" + slot1 + ".png";
           var slot2 = (array2[Math.floor(Math.random() * 7)]);
            document.getElementById("imagen2").src = "img/" + slot2 + ".png";
           var slot3 = (array3[Math.floor(Math.random() * 7)]);
            document.getElementById("imagen3").src = "img/" + slot3 + ".png";
        }
        var intervaloGiro = setInterval(girarSlots, 30);

        function pararSlot() {
            var slot1 = (array1[Math.floor(Math.random() * 7)]);
            document.getElementById("imagen1").src = "img/" + slot1 + ".png";
            var slot2 = (array2[Math.floor(Math.random() * 7)]);
            document.getElementById("imagen2").src = "img/" + slot2 + ".png";
            var slot3 = (array3[Math.floor(Math.random() * 7)]);
            document.getElementById("imagen3").src = "img/" + slot3 + ".png";

            clearInterval(intervaloGiro);
            //Vaciamos de la pantalla el premio anterior
            document.getElementById('mensajePremio').innerHTML = 'PREMIO: ';

            //Si salen tres zanahorias, se ganan diez monedas
            if (slot1 === 'zanahoria' && slot2 === 'zanahoria' && slot3 === 'zanahoria') {
                monedas += 10;
                premio = euro + euro + euro + euro + euro + '<br>' + euro + euro + euro + euro + euro;
                document.getElementById('mensajePremio').innerHTML = 'PREMIO: ' + euro + ' x 10';
            }
            //Si salen dos zanahorias, se ganan cuatro monedas
            else if (slot1 === 'zanahoria' && slot2 === 'zanahoria' ||
                slot2 === 'zanahoria' && slot3 === 'zanahoria' ||
                slot1 === 'zanahoria' && slot3 === 'zanahoria') {
                monedas += 4;
                premio = euro + euro + euro + euro;
                document.getElementById('mensajePremio').innerHTML = 'PREMIO: ' + euro + ' x 4';
            }
            //si sale una zanahoria y 2 hortalizas iguales, se ganan 3 monedas
            else if (slot1 === slot2 && slot3 === 'zanahoria' ||
                slot2 === slot3 && slot1 === 'zanahoria' ||
                slot1 === slot3 && slot2 === 'zanahoria') {
                monedas += 3
                premio = euro + euro + euro;
                document.getElementById('mensajePremio').innerHTML = 'PREMIO: ' + euro + ' x 3';
            }
            //Si sale una zanahoria, se gana una moneda.
            else if (slot1 === 'zanahoria' || slot2 === 'zanahoria' || slot3 === 'zanahoria') {
                monedas++;
                premio = euro;
                document.getElementById('mensajePremio').innerHTML = 'PREMIO: ' + euro + ' x 1';
            }
            //Si salen tres hortalizas iguales que no sean zanahorias, se ganan cinco monedas
            else if (slot1 === slot2 && slot2 === slot3) {
                monedas += 5;
                premio = euro + euro + euro + euro + euro;
                document.getElementById('mensajePremio').innerHTML = 'PREMIO: ' + euro + ' x 5';
            }
            //Si salen dos hortalizas iguales que no sean zanahorias, se ganan dos monedas.
            else if (slot1 === slot2 || slot2 === slot3 || slot1 === slot3) {
                monedas += 2;
                premio = euro + euro;
                document.getElementById('mensajePremio').innerHTML = 'PREMIO: ' + euro + ' x 2';
            }

            // Actualizamos el contador de monedas después de la tirada
            document.getElementById('imprimeMonedas').innerHTML = monedas + ' ' + euro;


            //Acceso a la tabla de tiradas mediante el Id
            var tabla = document.getElementById('filaTirada');

            //Creamos elemento  fila HTML desde JS
            var fila = document.createElement('tr');

            //En el interior de la fila incluimos las celdas
            fila.innerHTML =
                `<td  id="tirada">${tirada++}</td>
             <td id="imagenesTabla"><img src="img/${slot1}.png" alt=""><img src="img/${slot2}.png" alt=""><img src="img/${slot3}.png" alt=""></td>
             <td id="monedas">${premio}</td>
             <td id="monedas">${euro}</td>`

            // Finalmente, para cada tirada, añadimos una fila en la tabla
            tabla.appendChild(fila);
            premio = '';
        }

        setTimeout(pararSlot, 500);



    }
}

//Función que actúa cuando presionamos el botón salir
function salir() {
    alert('En total hay  ' + monedas + ' monedas');
    location.reload();
}






