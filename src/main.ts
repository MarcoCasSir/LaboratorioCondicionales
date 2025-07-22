import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
  muestraPuntuacion(puntuacion);
  eventos();
});

let puntuacion = 0;

const muestraPuntuacion = (puntuacion: number): void => {
  const puntos = document.getElementById("puntos");
  if (puntos) {
    puntos.textContent = puntuacion.toString();
  } else {
    console.log("Elemento ' puntos' no encontrado");
  }
};

/* ---------------------------------------------FUNCION PARA PEDIR CARTAS ------------------------ */

const dameCarta = (): number => {
  let numeroCarta = Math.floor(Math.random() * 10) + 1;

  return numeroCarta > 7 ? 0.5 : numeroCarta;
};

/* --------------------------------------------FUNCION EVENTOS xra lso BOTONES--------------------- */

function eventos() {
  const botonEventos = document.getElementById("dame-carta");

  if (botonEventos) {
    /*botonEventos.addEventListener("click", dameCarta);*/
    botonEventos.addEventListener("click", () => {
      const valor = dameCarta();
      console.log(valor);
    });
  }
}
