//crear la variable repetirTodo y definirla como SI
repetirTodo = "SI";

//DO para que se ejecute al menos una vez
do {
    let temporada = ""
    let estado
    let opciones = ""
    let nombre = prompt("Ingresá tu nombre!").toUpperCase()

    // validar el nombre y si falso le pido que ingrese bien
    while (isNaN(nombre) === false || nombre==="") {
        nombre = prompt("Ingresá bien tu nombre!")
    }

    let edad = prompt("Hola " + nombre + "! Ingresá tu edad!")

    // validar la edad y si falso, le pido que ingrese bien
    while (isNaN(edad) || edad <= 0) {
        edad = Number(prompt("Atento " + nombre + "! Ingresá bien tu edad!"))
    }

    // función que evalua si es mayor de edad, menor o jubilado
    function validarEdad(edad) {
        if (edad >= 18 && edad < 65) {
            estado = "mayor de edad";
            opciones = "\nKayak\nTreking\nNavegacion\n4x4\nTour\n";
        } else if (edad >= 65) {
            estado = "jubilado";
            opciones = "\nKayak\nNavegacion\n4x4\nTour\n";
        } else {
            estado = "menor de edad";
            opciones = "\nTreking\nNavegacion\n4x4\nTour\n";
        }
    }
    // ejecutar esa función
    validarEdad(edad);


    // solicitar la temporada de visita
    while ((temporada !== "OTONIO") && (temporada !== "VERANO") && (temporada !== "PRIMAVERA") && (temporada !== "INVIERNO")) {
        temporada = prompt("Ingrese la temporada de visita \n(VERANO, OTONIO, PRIMAVERA, INVIERNO):").toUpperCase()
    }


    // un switch para ver qué eligió el usuario y alojarlo en opciones
    switch (temporada) {
        case "VERANO":
            opciones = (opciones + "En verano hay mucho viento!!")
            break;
        case "OTONIO":
            opciones = (opciones + "Prepará la cámara, en otonio hay un follaje hermoso")
            break;
        case "PRIMAVERA":
            opciones = (opciones + "En primavera hay un hermoso clima!")
            break;
        case "INVIERNO":
            opciones = ("\nDisculpe pero las excursiones en invierno no operan")
            break;
        default:
            opciones = ("Temporada no reconocida.")
    }

    // mostrar la información en pantalla 
    alert("Gracias " + nombre + "!\n Como sos " +estado + " y visitas El Calafate en " +temporada +", \npodés hacer las siguientes excursiones:" +opciones);
    //preguntar si repetir 
      repetirTodo = prompt("¿Deseas repetir el proceso? (SI o cualquier otra cosa para NO)").toUpperCase();

}
while (repetirTodo=="SI")

if (repetirTodo != "SI") {
    alert("Gracias por usar nuestros servicios")
}