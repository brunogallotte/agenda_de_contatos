const form = document.getElementById('formulario-agenda');
const tabela = document.querySelector('table');
const nomeContato = document.getElementById('nome-contato');
const numeroContato = document.getElementById('numero-contato');
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    criaLinha();
    atualizaAgenda();
})

function criaLinha() {
    let linha = '<tr>';
    linha += `<td>${nomeContato.value}</td>`;
    linha += `<td>${numeroContato.value}</td>`;
    linha += `</tr>`;

    linhas += linha;
}

function atualizaAgenda() {
    corpoAgenda = document.querySelector('tbody');
    corpoAgenda.innerHTML = linhas;
}
