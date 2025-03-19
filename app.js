// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();//.toLowerCase(); 

    if (nombre === "") {
        alert("Error: El nombre agregado no puede ser vacio, reintentelo.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join("");
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Deben haber al menos dos participantes para el sorteo.");
        return;
    }

    const amigoAleatorio = amigos[Math.floor(Math.random() * amigos.length)];
    mostrarResultado(amigoAleatorio);
}

function mostrarResultado(amigoElegido) {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `Tu amigo secreto sorteado es: ${amigoElegido}`; // Aca implemento elegir un amigo especifico aleatorio.
}
