import "./style.css";

let puntuacion: number = 0;

document.addEventListener("DOMContentLoaded", () => {
  eventos();
  muestraPuntuacion(puntuacion);

  desabilitarBotones("reiniciar", true);
  desabilitarBotones("como-seria", true);
});

/*-----------------------------------------------------------------------------FUNCIONES 1 ---------------------------------------------- */

const generarCartaAleatoria = (): number => {
  let carta = Math.floor(Math.random() * 10) + 1;

  return carta > 7 ? carta + 2 : carta;
};

//se encarga de asignar un valor a la carta
const valorCarta = (carta: number): number => {
  return carta > 7 ? 0.5 : carta;
};

// se encarga de modificar la puntuacion y envocar la funcion para mostrar la puntuaccion.
const sumarPuntos = (carta: number): void => {
  puntuacion += valorCarta(carta);
  muestraPuntuacion(puntuacion);
};

const actualizarMensaje = (texto: string): void => {
  const mensaje = document.getElementById("mensaje-despues-tiros");
  if (mensaje instanceof HTMLElement) {
    mensaje.textContent = texto;
  }
};

const gameOver = (): void => {
  if (puntuacion > 7.5) {
    actualizarMensaje(`TE HAS PASADO - GAME OVER`);

    desabilitarBotones("dame-carta", true);
    desabilitarBotones("me-planto", true);
    desabilitarBotones("reiniciar", false);
    desabilitarBotones("como-seria", true);
  } else {
    if (puntuacion === 7.5) {
      actualizarMensaje(`HAS GANADO !!!!!  - GAME OVER`);

      desabilitarBotones("me-planto", true);
      desabilitarBotones("reiniciar", false);
      desabilitarBotones("dame-carta", true);
      desabilitarBotones("como-seria", true);
    }
  }
};

/* -------------------------------------------------------------------------------------------------FUNCION 2 --------------------------------*/

const dameCarta = (): void => {
  const carta = generarCartaAleatoria();
  muestraCarta(carta);
  sumarPuntos(carta);
  gameOver();
};

/* ------------------------------------------------------------------------------------FUNCION  3 ----------------------------------------------------- */

const muestraPuntuacion = (puntuacion: number): void => {
  const puntos = document.getElementById("puntos");

  if (
    puntos !== null &&
    puntos !== undefined &&
    puntos instanceof HTMLElement
  ) {
    puntos.textContent = puntuacion.toString();
  } else {
    console.log("Elemento 'puntos' no encontrado");
  }
};

const mePlanto = (): void => {
  if (puntuacion < 4) {
    actualizarMensaje(`HAS SIDO MUY CONSERVADOR`);
  } else if (puntuacion === 5) {
    actualizarMensaje(`TE HA ENTRADO EL CAGUELO EH!!!`);
  } else if (puntuacion === 6 || puntuacion === 7) {
    actualizarMensaje(`CASI CASI  EH!!!`);
  } else if (puntuacion === 7.5) {
    actualizarMensaje(`ENHORABUENA - HAS GANADO !!!`);
  }

  desabilitarBotones("me-planto", true);
  desabilitarBotones("reiniciar", false);
  desabilitarBotones("dame-carta", true);
  desabilitarBotones("como-seria", false);
};

const nuevaPartida = (): void => {
  puntuacion = 0;
  const imagen = document.getElementById("imagen-carta");
  if (
    imagen !== null &&
    imagen !== undefined &&
    imagen instanceof HTMLImageElement
  ) {
    imagen.src = "src/img/back.jpg";
  }

  muestraPuntuacion(puntuacion);
  actualizarMensaje("");

  desabilitarBotones("me-planto", false);
  desabilitarBotones("reiniciar", true);
  desabilitarBotones("dame-carta", false);
  desabilitarBotones("como-seria", true);
};

const proximaCarta = (): void => {
  let carta = generarCartaAleatoria();

  muestraCarta(carta);
  sumarPuntos(carta);
  gameOver();
};

const muestraCarta = (carta: number): void => {
  const imagen = document.getElementById("imagen-carta");
  if (
    imagen !== null &&
    imagen !== undefined &&
    imagen instanceof HTMLImageElement
  ) {
    switch (carta) {
      case 1:
        imagen.src = "src/img/1_as-copas.jpg";
        break;
      case 2:
        imagen.src = "src/img/2_dos-copas.jpg";
        break;
      case 3:
        imagen.src = "src/img/3_tres-copas.jpg";
        break;
      case 4:
        imagen.src = "src/img/4_cuatro-copas.jpg";
        break;
      case 5:
        imagen.src = "src/img/5_cinco-copas.jpg";
        break;
      case 6:
        imagen.src = "src/img/6_seis-copas.jpg";
        break;
      case 7:
        imagen.src = "src/img/7_siete-copas.jpg";
        break;
      case 10:
        imagen.src = "src/img/10_sota-copas.jpg";
        break;
      case 11:
        imagen.src = "src/img/11_caballo-copas.jpg";
        break;
      case 12:
        imagen.src = "src/img/12_rey-copas.jpg";
        break;
    }
  }
};

const desabilitarBotones = (id: string, disabled: boolean): void => {
  const button = document.getElementById(id);

  if (
    button !== null &&
    button !== undefined &&
    button instanceof HTMLButtonElement
  ) {
    button.disabled = disabled;
  } else {
    console.error(`El elemento con id "${id}" no existe o no es un botón.`);
  }
};

/* ----------------------------------FUNCION EVENTOS xra los BOTONES--------------------- */

function eventos(): void {
  const botonDameCarta = document.getElementById("dame-carta");
  const botonMePlanto = document.getElementById("me-planto");
  const botonNuevaPartida = document.getElementById("reiniciar");
  const botonSiguienteCarta = document.getElementById("como-seria");

  if (
    botonDameCarta !== null &&
    botonDameCarta !== undefined &&
    botonDameCarta instanceof HTMLButtonElement
  ) {
    botonDameCarta.addEventListener("click", dameCarta);
  }

  if (
    botonMePlanto !== null &&
    botonMePlanto !== undefined &&
    botonMePlanto instanceof HTMLButtonElement
  ) {
    botonMePlanto.addEventListener("click", mePlanto);
  }

  if (
    botonNuevaPartida !== null &&
    botonNuevaPartida !== undefined &&
    botonNuevaPartida instanceof HTMLButtonElement
  ) {
    botonNuevaPartida.addEventListener("click", nuevaPartida);
  }

  if (
    botonSiguienteCarta !== null &&
    botonSiguienteCarta !== undefined &&
    botonSiguienteCarta instanceof HTMLButtonElement
  ) {
    botonSiguienteCarta.addEventListener("click", proximaCarta);
  }
}
