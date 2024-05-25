const botaoMenu = document.querySelector('.botao_menu');
const menuMobile = document.querySelector('.invisivel');
let menuAberto = false;

var textoIndex = 'DANYELLE MACHADO';
var textoHabilidades = 'MINHAS HABILIDADES';
var textoProjetos = 'MEUS PROJETOS';


const textoElementoInd = document.querySelector('.texto_index');
const textoElementoHab = document.querySelector('.texto_habilidades');
const textoElementoProj = document.querySelector('.texto_projetos');

const delay = 150;

botaoMenu.addEventListener('click', function (){
    menuAberto ? menuMobile.classList.add('invisivel') : menuMobile.classList.remove('invisivel');

    menuAberto ? botaoMenu.children[0].setAttribute('src', 'assets/geral/Menu.svg') : botaoMenu.children[0].setAttribute('src', 'assets/geral/Fechar.svg');

    menuAberto = !menuAberto;
})

function escreverTexto(elemento, texto, i = 0){
    if (i === 0){
        elemento.textContent = '';
    }
    elemento.textContent += texto[i];
    if(i === texto.length - 1) {
        return;
    }
    setTimeout(() => escreverTexto(elemento, texto, i + 1), delay);
}

if (textoElementoInd) {
    escreverTexto(textoElementoInd, textoIndex);
}
if (textoElementoProj) {
    escreverTexto(textoElementoProj, textoProjetos);
}
if (textoElementoHab) {
    escreverTexto(textoElementoHab, textoHabilidades);
}
