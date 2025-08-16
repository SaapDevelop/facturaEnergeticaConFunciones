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

/* CONDISIONES

-Todas las funciones deben usar return.

-Ninguna función puede tener parámetros ni argumentos.

-Ninguna función debe usar objetos, arreglos, clases o this.

-Todas las funciones deben ser invocadas al menos una vez, y algunas pueden llamarse dentro de otras.

Los valores deben estar definidos directamente dentro de las funciones.

El enfoque del ejercicio es comparar la forma y el comportamiento de cada tipo de función.

El proyecto debe estar en un repositorio de GitHub con una buena convención de nomenclatura(solo camelCase) y un commit por función.

*/
