//Una empresa de energía necesita simular la generación de una factura mensual simple. Para ello, deberás construir un sistema básico que calcule el valor a pagar por un cliente utilizando exclusivamente funciones sin parámetros, todas con retorno, y declaradas de diferentes formas: declarativas, de expresión y funciones flecha.

//REQUERIMIENTOS

// Función declarativa que retorne el consumo mensual en kilovatios (ej: 410 kWh)
function consumoMensualKilovatios(){
    let consumo = 410;
    return consumo;
}

// Función declarativa que retorne la tarifa base por kilovatio (ej: 620 pesos/kWh)
function tarifaBaseKilovatio(){
    let tarifa = 620;
    return tarifa;
}

// Función de expresión que retorne el cargo fijo por servicio (ej: 3500 pesos)
let cargoFijoPorServicio = function(){
    let cargoFijo = 3500;
    return cargoFijo;
}

// Función de expresión que retorne el valor del IVA como porcentaje fijo (ej: 19%)
let valorIva = function(){
    let iva = 19;
    return iva;
}

// Función flecha que retorne el subtotal (consumo * tarifa)
let subTotal = () => {
    return consumoMensualKilovatios() * tarifaBaseKilovatio();
}

// Función flecha que retorne el valor del IVA aplicado sobre el subtotal
let valorSubtotalIVA = () => {
    return subTotal() * (valorIva() / 100);
}

// Función flecha que retorne el total a pagar (subtotal + IVA + cargo fijo)
let valorTotalPagar = () => {
    return subTotal() + valorSubtotalIVA() + cargoFijoPorServicio();
}


/* CONDISIONES

-Todas las funciones deben usar return.

-Ninguna función puede tener parámetros ni argumentos.

-Ninguna función debe usar objetos, arreglos, clases o this.

-Todas las funciones deben ser invocadas al menos una vez, y algunas pueden llamarse dentro de otras.

Los valores deben estar definidos directamente dentro de las funciones.

El enfoque del ejercicio es comparar la forma y el comportamiento de cada tipo de función.

El proyecto debe estar en un repositorio de GitHub con una buena convención de nomenclatura(solo camelCase) y un commit por función.

*/
