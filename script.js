function reordenarCadenas() {
    const cadenaNumerica = prompt("Introduce una cadena num�rica:");
    const cortes = prompt("Introduce un n�mero de al menos 2 d�gitos para los cortes de la cadena:");

    // Convertimos la cadena num�rica a un array de n�meros
    let numeros = cadenaNumerica.split(',').map(numero => numero.trim());

    // Verificamos que el n�mero de cortes tenga al menos 2 d�gitos
    if (cortes.length < 2) {
        alert("El n�mero de cortes debe tener al menos 2 d�gitos.");
        return;
    }

    let nuevaCadena = [...numeros]; // Inicializamos la nueva cadena con la cadena original

    // Iteramos hasta que no queden d�gitos en el n�mero proporcionado
    let i = 0;
    while (i + 1 < cortes.length) {
        // Extraemos los d�gitos para los cortes en esta iteraci�n
        const corte1 = parseInt(cortes[i], 10);
        const corte2 = parseInt(cortes[i + 1], 10);

        // Verificamos si el primer n�mero de cada par es mayor
        if (corte1 > corte2) {
            // Salteamos este par y avanzamos al siguiente par
            i += 2;
            continue;
        }

        // Realizamos los cortes de acuerdo a las especificaciones
        const inicio = nuevaCadena.slice(0, corte1);
        const medio = nuevaCadena.slice(corte1, corte2);
        const final = nuevaCadena.slice(corte2);

        // Creamos la nueva cadena con los elementos reordenados
        nuevaCadena = medio.concat(inicio, final);

        // Incrementamos el �ndice para la pr�xima iteraci�n
        i += 2;
    }

    // Mostramos el resultado en la p�gina
    const resultado = `Nueva cadena: ${nuevaCadena.join(', ')}`;
    document.getElementById('resultado').innerText = resultado;
}

// Llamamos a la funci�n para que se ejecute cuando se carga la p�gina
reordenarCadenas();