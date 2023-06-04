const PRODUCTO_UNO = "1";
const PRODUCTO_DOS = "2";
let productoClases = "";
let productoSuscripciones = "";
let mensual = "A";
let semestral = "B";
let anual = "C";
let paqueteTres = "I";
let paqueteCinco = "II";
let paqueteSiete = "III";
let paqueteNueve = "IV";
let validar;

// DECLARO FUNCIONES

const esValidoProducto = (prod) => {
  let valido = false;
  if (prod === PRODUCTO_UNO || prod === PRODUCTO_DOS) valido = true;
  return valido;
};

const esValidoSuscripcion = (susc) => {
  let valido = false;
  switch (susc) {
    case "A":
    case "B":
    case "C":
      valido = true;
      break;
  }
  return valido;
};

const esValidoClase = (clase) => {
  let valido = false;
  switch (clase) {
    case "I":
    case "II":
    case "III":
    case "IV":
      valido = true;
      break;
  }
  return valido;
};

// BEGIN

do {
  producto = prompt(
    "¿Qué producto quiere seleccionar: \n1- Suscripcion \n2- Clases?"
  );
  //validar = esValido(producto);
} while (!esValidoProducto(producto));

if (producto === PRODUCTO_UNO) {
  do {
    productoSuscripciones = prompt(
      "Elige tu suscripción: \nA- Mensual - 20% descuento \nB- Semestral - 18% descuento \nC- Anual - 16% descuento"
    );
    productoSuscripciones = productoSuscripciones.toUpperCase();
  } while (!esValidoSuscripcion(productoSuscripciones));

  console.log(
    "Elige tu suscripción: \n1- Mensual - 20% descuento \n2- Semestral - 18% descuento \n3- Anual - 16% descuento"
  );
  switch (productoSuscripciones) {
    case "A":
      alert(
        "Has seleccionado la suscripción Mensual. Precio: 20 dólares. Tendrás acceso a toda la plataforma y su contenido, tanto clases como cursos."
      );
      console.log(
        "Has seleccionado la suscripción Mensual. Precio: 20 dólares. Tendrás acceso a toda la plataforma y su contenido, tanto clases como cursos."
      );
      break;
    case "B":
      alert(
        "Has seleccionado la suscripción Semestral. Precio: 18 dólares. Tendrás acceso a toda la plataforma y su contenido, tanto clases como cursos."
      );
      console.log(
        "Has seleccionado la suscripción Semestral. Precio: 18 dólares. Tendrás acceso a toda la plataforma y su contenido, tanto clases como cursos."
      );
      break;
    case "C":
      alert(
        "Has seleccionado la suscripción Anual. Precio: 16 dólares. Tendrás acceso a toda la plataforma y su contenido, tanto clases como cursos."
      );
      console.log(
        "Has seleccionado la suscripción Anual. Precio: 16 dólares. Tendrás acceso a toda la plataforma y su contenido, tanto clases como cursos."
      );
      break;
  }
}

if (producto === PRODUCTO_DOS) {
  do {
    productoClases = prompt(
        "Elige entre los siguientes paquetes de clases: \nI - 3 Clases - 17% Descuento \nII - 5 Clases - 15% Descuento \nIII - 7 Clases - 20% Descuento \nIV - 9 Clases - 18% Descuento"
      )
    ;
    productoClases = productoClases.toUpperCase();
  } while (!esValidoClase(productoClases));

  console.log(
    "Elige entre las siguientes opciones: 3, 5, 7, 9. O bien el porcentaje deseado para cada paquete de clases, respectivamente: 17, 20, 15, 18."
  );
  switch (productoClases) {
    case "I":
      alert(
        "Has seleccionado el paquete de 3 clases por el precio de 10 dólares."
      );
      console.log(
        "Has seleccionado el paquete de 3 clases por el precio de 10 dólares."
      );
      break;
    case "II":
      alert(
        "Has seleccionado el paquete de 5 clases por el precio de 16 dólares."
      );
      console.log(
        "Has seleccionado el paquete de 5 clases por el precio de 16 dólares."
      );
      break;
    case "III":
      alert(
        "Has seleccionado el paquete de 7 clases por el precio de 24 dólares."
      );
      console.log(
        "Has seleccionado el paquete de 7 clases por el precio de 24 dólares."
      );
      break;
    case "IV":
      alert(
        "Has seleccionado el paquete de 9 clases por el precio de 30 dólares."
      );
      console.log(
        "Has seleccionado el paquete de 9 clases por el precio de 30 dólares."
      );
      break;
    default:
      productoSuscripciones =
        "Clase ingresada inexistente. Por favor, intente nuevamente.";
  }
}