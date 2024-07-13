let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteado = [];
let numeroMaximo = 10;


function asignaTextElement(elemento, texto){
    let elementHtml = document.querySelector(elemento);
    elementHtml.innerHTML = texto;
    return;
}

function verificaIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto){
        asignaTextElement('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces' }`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if (numeroDeUsuario > numeroSecreto){
            asignaTextElement('p', 'El número secreto es menor');
        }else{
            asignaTextElement('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

// Funcion Recursiva
function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random() * numeroMaximo) + 1;  

    console.log(numeroGenerado);
    console.log(listaNumeroSorteado);

    // Se sortearon todos los números
    if(listaNumeroSorteado.length == numeroMaximo){
        asignaTextElement('p', 'Ya se sortearon todos los numeros posibles');
    }else{
        if (listaNumeroSorteado.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumeroSorteado.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignaTextElement('h1', 'Juego del número secreto!');
    asignaTextElement('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    // Limpiar la caja
    limpiarCaja();

    // Indicar el mensaje de inicio
    // Generar un núevo numero
    // Reiniciar el contador de intentos
    condicionesIniciales();

    // Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', true);

}

condicionesIniciales();
