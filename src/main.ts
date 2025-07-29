import "./style.css";

let imagen: HTMLImageElement;
let botonDameCarta: HTMLButtonElement;
let botonMePlanto: HTMLButtonElement;
let botonNuevaPartida: HTMLButtonElement;
let botonSiguienteCarta: HTMLButtonElement;

let puntuacion: number = 0;

document.addEventListener("DOMContentLoaded", () => {
  imagen = document.getElementById("imagen-carta") as HTMLImageElement;
  botonDameCarta = document.getElementById("dame-carta") as HTMLButtonElement;
  botonMePlanto = document.getElementById("me-planto") as HTMLButtonElement;
  botonNuevaPartida = document.getElementById("reiniciar") as HTMLButtonElement;
  botonSiguienteCarta = document.getElementById(
    "como-seria"
  ) as HTMLButtonElement;

  eventos();
  muestraPuntuacion(puntuacion);

  if (botonNuevaPartida) {
    botonNuevaPartida.disabled = true;
  }

  if (botonSiguienteCarta) {
    botonSiguienteCarta.disabled = true;
  }
});

/* -----------------------------------------------------------------------------------FUNCIONES 1 ---------------------------------------------- */

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
  if (mensaje !== null && mensaje !== undefined) {
    mensaje.textContent = texto;
  }
};

const gameOver = (): void => {
  if (puntuacion > 7.5) {
    actualizarMensaje(`TE HAS PASADO - GAME OVER`);

    if (botonMePlanto) {
      botonMePlanto.disabled = true;
    }

    if (botonDameCarta) {
      botonDameCarta.disabled = true;
    }

    if (botonNuevaPartida) {
      botonNuevaPartida.disabled = false;
    }
    if (botonSiguienteCarta) {
      botonSiguienteCarta.disabled = true;
    }
  } else {
    if (puntuacion === 7.5) {
      actualizarMensaje(`HAS GANADO !!!!!  - GAME OVER`);

      if (botonMePlanto) {
        botonMePlanto.disabled = true;
      }

      if (botonNuevaPartida) {
        botonNuevaPartida.disabled = false;
      }

      if (botonDameCarta) {
        botonDameCarta.disabled = true;
      }

      if (botonSiguienteCarta) {
        botonSiguienteCarta.disabled = true;
      }
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

  if (puntos) {
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

  if (botonNuevaPartida) {
    botonNuevaPartida.disabled = false;
  }

  if (botonDameCarta) {
    botonDameCarta.disabled = true;
  }

  if (botonMePlanto) {
    botonMePlanto.disabled = true;
  }

  if (botonSiguienteCarta) {
    botonSiguienteCarta.disabled = false;
  }
};

const nuevaPartida = (): void => {
  puntuacion = 0;

  if (imagen) {
    imagen.src = "src/img/back.jpg";
  }

  muestraPuntuacion(puntuacion);
  actualizarMensaje("");

  if (botonDameCarta) {
    botonDameCarta.disabled = false;
  }

  if (botonMePlanto) {
    botonMePlanto.disabled = false;
  }

  if (botonNuevaPartida) {
    botonNuevaPartida.disabled = true;
  }

  if (botonSiguienteCarta) {
    botonSiguienteCarta.disabled = true;
  }
};

const proximaCarta = (): void => {
  let carta = Math.floor(Math.random() * 10) + 1;

  if (carta > 7) {
    carta += 2;
  }

  muestraCarta(carta);
  sumarPuntos(carta);
  gameOver();
};

const muestraCarta = (carta: number): void => {
  if (imagen) {
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

/* ----------------------------------FUNCION EVENTOS xra los BOTONES--------------------- */

function eventos() {
  if (botonDameCarta) {
    botonDameCarta.addEventListener("click", dameCarta);
  }

  if (botonMePlanto) {
    botonMePlanto.addEventListener("click", mePlanto);
  }

  if (botonNuevaPartida) {
    botonNuevaPartida.addEventListener("click", nuevaPartida);
  }

  if (botonSiguienteCarta) {
    botonSiguienteCarta.addEventListener("click", proximaCarta);
  }
}
