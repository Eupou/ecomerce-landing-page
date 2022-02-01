/*  Só uma observação, esse projeto apresenta um código que não está tão bem feito.
    Esse foi um dos primeiros projetos que eu fiz, mas eu não tinha finalizado e resolvi,
    depois de muito tempo, continuar ele, graças a isso você vai percerber inconsistências
    na forma como ele foi escrito
*/
const IMGS_SECUNDARIAS = document.querySelectorAll('.imgs-secundarias img')
const IMG_SELECIONADA = document.querySelector('.imgs-secundarias .img-1 img')
const DIMINUI_ITEM = document.querySelector('.diminui-item')
const AUMENTA_ITEM = document.querySelector('.aumenta-item')


let imgPrincipal = document.querySelector('.img-principal')
let resItem = document.querySelector('.quantidade-item')
let quantidadeItem = 1

IMG_SELECIONADA.classList.add('selecionada')
IMGS_SECUNDARIAS.forEach(element => element.addEventListener('click', mudaImagemSelecionada));
DIMINUI_ITEM.addEventListener('click', diminuiQuantidadeItem)
AUMENTA_ITEM.addEventListener('click', aumentaQuantidadeItem)

function mudaImagemSelecionada() {
    IMGS_SECUNDARIAS.forEach(element => element.classList.remove('selecionada'));
    this.classList.add('selecionada')
    imgPrincipal.innerHTML = `<img src="${this.src}">`
}

function diminuiQuantidadeItem() {
    if (quantidadeItem > 1) {
        quantidadeItem--
        resItem.innerHTML = quantidadeItem
    } 
}

function aumentaQuantidadeItem() {
    quantidadeItem++
    resItem.innerHTML = quantidadeItem
}

function addSetas() {
    imgPrincipal.innerHTML += `
        <div class="setaEsquerda"></div>
        <div class="setaDireita"></div>
    `
}

addSetas()

let setaEsquerda = document.querySelector('.setaEsquerda')
let setaDireita = document.querySelector('.setaDireita')

setaEsquerda.addEventListener('click', moveIgmParaEsquerda)
setaDireita.addEventListener('click', moveIgmParaDireita)

function moveIgmParaDireita() {
    let imPrincipal = document.querySelector('.img-principal img')
    let imgSecondaria = document.querySelectorAll('.imgs-secundarias img')
    if (imPrincipal.src == imgSecondaria[0].src) {
        imPrincipal.src = imgSecondaria[1].src
    } else if(imPrincipal.src == imgSecondaria[1].src) {
        imPrincipal.src = imgSecondaria[2].src
    } else {
        imPrincipal.src = imgSecondaria[0].src
    }
}

function moveIgmParaEsquerda() {
    let imPrincipal = document.querySelector('.img-principal img')
    let imgSecondaria = document.querySelectorAll('.imgs-secundarias img')
    if (imPrincipal.src == imgSecondaria[0].src) {
        imPrincipal.src = imgSecondaria[2].src
    } else if(imPrincipal.src == imgSecondaria[2].src) {
        imPrincipal.src = imgSecondaria[1].src
    } else {
        imPrincipal.src = imgSecondaria[0].src
    }
}

let modalExiste = false
let btnComprar = document.querySelector('.botao-finaliza-compra') 
btnComprar.innerHTML = `<div class="btn-compra" onclick="openModal()">comprar</div>`


let inputCompra = document.querySelector('.btn-compra')
inputCompra.addEventListener('click', addModal)


function addModal() {
    // let conteudo = document.querySelector('.container-conteudo')
    if (modalExiste == false) {
        document.body.innerHTML += `
        <div class="modal is-active">
            <div class="container-menu1">
                <div class="x">x</div>
                <div class="menu">
                    <div class="info-pessoal">
                        <p class="pessoal-nome">Coloque seu nome:</p>
                        <input id="nome" type="text" placeholder="Seu nome vem aqui!">
                    </div>
                    <div class="btn-enviar">Comprar</div>
                </div>
                <div class="endereco"></div>
            </div>
        </div>`
                modalExiste = true
                document.querySelector('.btn-enviar').addEventListener('click', sendMsg)
    } 
    const BTN_X = document.querySelector('.x')
    BTN_X.addEventListener("click", closeModal)
   
}

function closeModal() {
    document.querySelector('.modal').classList.remove('is-active')
}

function openModal() {
    document.querySelector('.modal').classList.add('is-active')
}

const MENU_RESPONSIVO = document.querySelector('.menu-responsivo')
const LISTA_LINKS = document.querySelector('.lista-links')

MENU_RESPONSIVO.addEventListener('click', acionarMenu)

function acionarMenu() {
    LISTA_LINKS.classList.toggle('ativado')
    MENU_RESPONSIVO.classList.toggle('ativado')
} 


// Mostra a mensagem  de compra finalizada


function sendMsg() {
    let NAME_INPUT = document.querySelector('#nome')

    if (NAME_INPUT.value != "") {
        const MODAL = document.querySelector('.menu')

        MODAL.innerHTML = `
        <div class="confirmacao">
            <div>
                Muito obrigado por comprar com a gente! 
            </div>
            <div>
                Pode confiar que seu produto vai chegar, ${NAME_INPUT.value}
            </div>
        </div>
    `
    } else {
        NAME_INPUT.value = "Coloque seu nome!"
        NAME_INPUT.style.border = "3px solid red"
        console.log({ NAME_INPUT })
    }
    
}

