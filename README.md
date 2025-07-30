# Juego de Cartas SIETE Y MEDIO

## Realizamos el juego de cartas de las 7 1/2 en modo solitario

### Reglas del juego

- Baraja una baraja española de 40 cartas y coloca las cartas boca abajo sobre la mesa.
- Gira la primera carta y colócala boca arriba en la mesa. Esta carta será la carta del jugador.
- Decide si deseas tomar otra carta o quedarte con la que tienes. El objetivo del juego es tener una mano que sume 7 y media puntos o lo más cerca posible de este número sin pasarse.
- Si decides tomar otra carta, gira la siguiente carta boca arriba. Añade el valor de esta carta a tu mano y decide si deseas tomar otra carta o quedarte con lo que tienes. Puedes tomar tantas cartas como desees, pero si la suma de los valores de las cartas de tu mano supera los 7,5 puntos, pierdes automáticamente la partida.
- Si decides quedarte con la carta que tienes, tu turno termina. Anota tu puntuación y pasa al siguiente turno.
- Continúa jugando hasta que hayas jugado todas las cartas de la baraja o decidas detenerte.
- Si logras una mano con una puntuación de 7 y media, has ganado el juego. Si no, tu objetivo es obtener la mano con la puntuación más cercana a 7 y media.

Las cartas numéricas valen su valor nominal, es decir, el As (uno de cada palo) vale 1 punto, las cartas del 2 al 7 valen su valor nominal y las figuras (sota, caballo y rey) valen medio punto cada una.

### Procesos realizados para la costrucion del juego

- Costruimos la estructura HTML
- Desarrollo funcion muestraPuntuacion. Definimos la variable puntuacion y la inicializamos a 0. Esta variable la utilizaremos en la funcion para evitar utilizar la vista (Html) y separar responsabilidades. A su vez esta funcion posteriormente la ubicaremos en el DOM ContentLoaded para cuando el documento HTML este completamente cargado y analizado.
- Desarrollo funcion dameCarta . Calcula de forma automatica un numero random entre (1 y 10 - 10 cartas), ademas invoca otras funciones que se construyen posteriormente ( mostrarCarta / gameOver / sumarPuntos) necesarias para la visualizacion de informacion necesaria para el juego. IMPORTANTE en este punto tener en cuenta que tenemos cartas ( del 1 a 7 y 10,11,12 - tot:10 cartas) y es necesario relacionarla con la imagen correspondiente.
- Desarrollo funcion muestraCarta. Al hacer click en el boton Dame se genera el numero y en funcion del resultado (carta: number) nos mostrara la carta correspondiente.
- Desarrollo funcion sumaPuntos. IMPORTANTE: hay que tener en cuenta que las cartas ( 10-11-12) tienen valor 0.5. Esta funcion modificar el dato de la variable puntuacion en funcion del valor ( carta: numero) generado. La funcion invoca tambien la funcion mustraPuntuacion una vez que tengamos la nueva puntuacion calculada.
- Desarrollo funicon gameOver. se definen dos condicionales preguntando la puntuacion obteneida segun las reglas del juego establecidas, si la puntuacion super ( pierdes) o iguala ( gana) el valor 7.5 para dar por finalizado el juego.Se activan o desactivan botones.
- Desarrollo funcion mePlanto. El juego tiene la posibilidad de que el jugador termine el juego antes de tiempo. Se definen una serie de condicionales en funcion de la puntuacion final para lanzar un mnsaje al jugador.Se desabilitan determinados botones.
- Desarrollo funcion nuevaPartida. Definimo la variable puntuacion de nuevo a 0. Invocamos la funcion muestraPuntuacion, y vaciamo el contenido del mensaje y anulamos o activamos botones.
- Desarrollo proximaCarta. Es una opcion mas al juego , de conocer el sigueinte valor que se hubiera generado.Para esta generamos una nuevo numero random, preguntamos por su valor y invocamos las funciones para mostrar informacion al jugador.
- Encapsulamos todos los botones en la funciooEventos y esta la iclimos en el DOMContentLoaded para qeu se active una vez el HTml este completamente cargado.
- la aplicacion funciona correctamente. Toca refaactorizar el codigo para que cada funcion realice una unica tarea. Se generan mas funciones.
