import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
  eventos();
  muestraPuntuacion(puntuacion);
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

/* ------------------------------------FUNCION GAME OVER--------- ------------------------ */

const gameOver = (puntuacion: number): void => {
  let mensaje = document.getElementById("mensaje-despues-tiros") as HTMLElement;
  if (puntuacion > 7.5) {
    mensaje.textContent = `TU PUNTUACION HA SUPERADO 7.5 PUNTOS - GAME OVER`;
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

/* --------------------------------------------FUNCION EVENTOS xra lso BOTONES--------------------- */

function eventos() {
  const botonEventos = document.getElementById("dame-carta");

  if (botonEventos) {
    botonEventos.addEventListener("click", dameCarta);
  }
}
