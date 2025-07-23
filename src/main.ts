import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
  eventos();
  muestraPuntuacion(puntuacion);

  const botonNuevaPartida = document.getElementById(
    "reiniciar"
  ) as HTMLButtonElement;

  if (botonNuevaPartida) {
    botonNuevaPartida.disabled = true;
  }
});

let puntuacion = 0;

/* ---------------------------------FUNCION PARA MOSTRAR PUNTUACION------------------- */

const muestraPuntuacion = (puntuacion: number): void => {
  const puntos = document.getElementById("puntos");
  if (puntos) {
    puntos.textContent = puntuacion.toString();
  } else {
    console.log("Elemento 'puntos' no encontrado");
  }
};

/* ---------------------------------FUNCION PARA SUMAR PUNTOS -------------------------- */

const sumarPuntos = (carta: number): void => {
  let valorCarta: number;

  if (carta === 10 || carta === 11 || carta === 12) {
    valorCarta = 0.5;
  } else {
    valorCarta = carta;
  }

  puntuacion += valorCarta;

  muestraPuntuacion(puntuacion);
};

/* ------------------------------------FUNCION PARA PEDIR CARTAS ------------------------ */

const dameCarta = (): void => {
  let carta = Math.floor(Math.random() * 10) + 1;

  if (carta > 7) {
    carta += 2;
  }

  muestraCarta(carta);
  sumarPuntos(carta);
  gameOver(puntuacion);
};

/* ------------------------------------FUNCION GAME OVER---------------------------------- */

const gameOver = (puntuacion: number): void => {
  let mensaje = document.getElementById("mensaje-despues-tiros") as HTMLElement;
  if (puntuacion > 7.5) {
    mensaje.textContent = `TE HAS PASADO - GAME OVER`;
    const botonMePlanto = document.getElementById(
      "me-planto"
    ) as HTMLButtonElement;

    if (botonMePlanto) {
      botonMePlanto.disabled = true;
    }

    const botonDameCarta = document.getElementById(
      "dame-carta"
    ) as HTMLButtonElement;

    if (botonDameCarta) {
      botonDameCarta.disabled = true;
    }

    const botonNuevaPartida = document.getElementById(
      "reiniciar"
    ) as HTMLButtonElement;

    if (botonNuevaPartida) {
      botonNuevaPartida.disabled = false;
    }
  } else if (puntuacion === 7.5) {
    mensaje.textContent = `HAS GANADO !!!!!  - GAME OVER`;

    const botonMePlanto = document.getElementById(
      "me-planto"
    ) as HTMLButtonElement;

    if (botonMePlanto) {
      botonMePlanto.disabled = true;
    }

    const botonDameCarta = document.getElementById(
      "dame-carta"
    ) as HTMLButtonElement;

    if (botonDameCarta) {
      botonDameCarta.disabled = true;
    }
  }
};

/* ------------------------------------FUNCION ME PLANTO----------------------------------- */

const mePlanto = (): void => {
  let mensaje = document.getElementById("mensaje-despues-tiros") as HTMLElement;

  let puntos = (document.getElementById("puntos") as HTMLElement).textContent;
  let puntuacionActual: number = 0;

  if (puntos) {
    puntuacionActual = parseFloat(puntos);
  }

  if (puntuacionActual < 4) {
    mensaje.textContent = `HAS SIDO MUY CONSERVADOR`;
  } else if (puntuacionActual === 5) {
    mensaje.textContent = `TE HA ENTRADO EL CAGUELO EH!!!`;
  } else if (puntuacionActual === 6 || puntuacionActual === 7) {
    mensaje.textContent = `CASI CASI  EH!!!`;
  } else if (puntuacionActual === 7.5) {
    mensaje.textContent = `ENHORABUENA - HAS GANADO !!!`;
  }

  const botonNuevaPartida = document.getElementById(
    "reiniciar"
  ) as HTMLButtonElement;

  if (botonNuevaPartida) {
    botonNuevaPartida.disabled = false;
  }

  const botonDameCarta = document.getElementById(
    "dame-carta"
  ) as HTMLButtonElement;

  if (botonDameCarta) {
    botonDameCarta.disabled = true;
  }

  const botonMePlanto = document.getElementById(
    "me-planto"
  ) as HTMLButtonElement;

  if (botonMePlanto) {
    botonMePlanto.disabled = true;
  }
};

/* -------------------------------------FUNCION NUEVO JUEGO ------------------------------ */

const nuevaPartida = (): void => {
  puntuacion = 0;

  const imagen = document.getElementById("imagen-carta") as HTMLImageElement;

  if (imagen) {
    imagen.src = "src/img/back.jpg";
  }

  muestraPuntuacion(puntuacion);

  const botonDameCarta = document.getElementById(
    "dame-carta"
  ) as HTMLButtonElement;

  if (botonDameCarta) {
    botonDameCarta.disabled = false;
  }

  const botonMePlanto = document.getElementById(
    "me-planto"
  ) as HTMLButtonElement;

  if (botonMePlanto) {
    botonMePlanto.disabled = false;
  }

  const botonNuevaPartida = document.getElementById(
    "reiniciar"
  ) as HTMLButtonElement;

  if (botonNuevaPartida) {
    botonNuevaPartida.disabled = true;
  }
};
/* -------------------------------------FUNCION MOSTRAR CARTA ----------------------------- */

const muestraCarta = (carta: number): void => {
  const imagen = document.getElementById("imagen-carta") as HTMLImageElement;
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
  const botonDameCarta = document.getElementById("dame-carta");

  if (botonDameCarta) {
    botonDameCarta.addEventListener("click", dameCarta);
  }

  const botonMePlanto = document.getElementById("me-planto");

  if (botonMePlanto) {
    botonMePlanto.addEventListener("click", mePlanto);
  }

  const botonNuevaPartida = document.getElementById("reiniciar");

  if (botonNuevaPartida) {
    botonNuevaPartida.addEventListener("click", nuevaPartida);
  }
}
