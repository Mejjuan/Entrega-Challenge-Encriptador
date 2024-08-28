function encriptar() {
    var texto = document.querySelector("#input_texto").value;

    // Definicion del encriptado por un mapeo
    var mapaEncriptacion = {
        'a': '1', 'b': '2', 'c': '3', 'd': '4', 'e': '5',
        'f': '6', 'g': '7', 'h': '8', 'i': '9', 'j': '10',
        'k': '11', 'l': '12', 'm': 'Millos', 'n': '14', 'o': '15',
        'p': '16', 'q': '17', 'r': '18', 's': '19', 't': '20',
        'u': '21', 'v': '22', 'w': '23', 'x': 'Xo', 'y': 'Yo',
        'z': '26'
    };

    // Texto a minúsculas para facilitar la comparación
    var textoMin = texto.toLowerCase();

    // Verificar si el texto contiene caracteres no mapeados
    var caracteresNoMapeados = false;
    for (var i = 0; i < textoMin.length; i++) {
        var letra = textoMin[i];
        if (!(mapaEncriptacion[letra] || letra.match(/\s/))) {
            caracteresNoMapeados = true;
            break;
        }
    }

    if (caracteresNoMapeados) {
        alert("El texto contiene caracteres no válidos. Por favor, utiliza solo letras y números del alfabeto.");
        return;
    }

    // Recorremos cada letra del texto y la reemplazamos según el mapa de encriptación
    var textoCifrado = '';
    for (var i = 0; i < textoMin.length; i++) {
        var letra = textoMin[i];
        // Si la letra está en el mapa, la reemplazamos; si no, la dejamos igual (por ejemplo, espacios, números, etc.)
        if (mapaEncriptacion[letra]) {
            textoCifrado += mapaEncriptacion[letra] + ' '; 
        } else {
            textoCifrado += letra;
        }
    }

    // Mostrar el texto encriptado en el área de salida
    document.querySelector(".texto_imput_salida").value = textoCifrado.trim();

    // Limpiar el campo de entrada
    document.querySelector("#input_texto").value = "";
}

function desencriptar() {
    var texto = document.querySelector("#input_texto").value;

    // Definimos el mapeo de letras a números
    var mapaEncriptacion = {
        'a': '1', 'b': '2', 'c': '3', 'd': '4', 'e': '5',
        'f': '6', 'g': '7', 'h': '8', 'i': '9', 'j': '10',
        'k': '11', 'l': '12', 'm': 'Millos', 'n': '14', 'o': '15',
        'p': '16', 'q': '17', 'r': '18', 's': '19', 't': '20',
        'u': '21', 'v': '22', 'w': '23', 'x': 'Xo', 'y': 'Yo',
        'z': '26'
    };

    // Funcion inversa a la anterior
    var mapaDesencriptacion = {};
    for (var letra in mapaEncriptacion) {
        mapaDesencriptacion[mapaEncriptacion[letra]] = letra;
    }

    
    var partes = texto.split(' ');
    
    // Recorremos cada parte y la reemplazamos usando el mapa de desencriptación
    var textoDesencriptado = '';
    for (var i = 0; i < partes.length; i++) {
        var parte = partes[i];
        // Si la parte está en el mapa de desencriptación, la reemplazamos; si no, la dejamos igual
        if (mapaDesencriptacion[parte]) {
            textoDesencriptado += mapaDesencriptacion[parte];
        } else {
            textoDesencriptado += parte; // Añadimos la parte tal como está si no está en el mapa
        }
    }

    // Mostrar el texto desencriptado en el área de salida
    document.querySelector(".texto_imput_salida").value = textoDesencriptado;

    // Limpiar el campo de entrada
    document.querySelector("#input_texto").value = "";
}

// Funciones de los botones
document.querySelector("#boton_encriptar").onclick = encriptar;
document.querySelector("#botonDesencriptar").onclick = desencriptar;
