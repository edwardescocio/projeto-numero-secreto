//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []; // Lista de amigos

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value;

    if (nome === "" || nome.trim() === "") {
        alert("Por favor, insira um nome.");
    } else {
        amigos.push(nome);
        input.value = ""; // Limpa o campo
        atualizarLista(); // Atualiza a lista na tela
    }
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Remove os nomes antes de atualizar

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.innerText = amigos[i];
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista está vazia. Adicione pelo menos um nome.");
    } else {
        let indice = Math.random() * amigos.length; // Gera um número decimal
        let indiceSorteado = Math.floor(indice); // Arredonda para um número inteiro
        let amigoSorteado = amigos[indiceSorteado];

        let resultado = document.getElementById("resultado");
        resultado.innerHTML = "<li>O amigo sorteado é: <strong>" + amigoSorteado + "</strong></li>";
    }
}


