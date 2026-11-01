
// ELEMENTOS DAS PÁGINAS

const pagina1 = document.querySelector('.pagina1');
const motivo = document.querySelector('.motivo');
const motivo2 = document.querySelector('.motivo2');
const motivo3 = document.querySelector('.motivo3');
const motivo4 = document.querySelector('.motivo4');
const motivo5 = document.querySelector('.motivo5');

// BOTÕES

const botao = document.querySelector('#pq');
const soisoo = document.querySelector('#soisso');
const temmais = document.querySelector('#temmais');
const continuar = document.querySelector('#continuar');
const porfim = document.querySelector('#porfim');

// PÁGINA 1 → PÁGINA 2

botao.addEventListener('click', () => {
    pagina1.classList.add('escondido');
    motivo.classList.remove('escondido');
});

// PÁGINA 2 → PÁGINA 3

soisoo.addEventListener('click', () => {
    motivo.classList.add('escondido');
    motivo2.classList.remove('escondido2');
});

// PÁGINA 3 → PÁGINA 4

temmais.addEventListener('click', () => {
    motivo2.classList.add('escondido2');
    motivo3.classList.remove('escondido3');
});

// PÁGINA 4 → PÁGINA 5

continuar.addEventListener('click', () => {
    motivo3.classList.add('escondido3');
    motivo4.classList.remove('escondido4');
});

// PÁGINA 5 → PÁGINA 6

porfim.addEventListener('click', () => {
    motivo4.classList.add('escondido4');
    motivo5.classList.remove('escondido5');
});

// PÁGINA 6 → PÁGINA 7

const motivo6 = document.querySelector('.motivo6');
const naoclique = document.querySelector('#naoclique');

naoclique.addEventListener('click', () => {

    motivo5.classList.add('escondido5');

    motivo6.classList.remove('escondido6');

});

// ELEMENTOS
const gatoFeio = document.querySelector('#gatofei');
const encerramento = document.querySelector('.encerramento');

// CLIQUE NO GATO → ENCERRAMENTO
gatoFeio.addEventListener('click', () => {
    motivo6.classList.add('escondido6');
    encerramento.classList.remove('encerramento');
});