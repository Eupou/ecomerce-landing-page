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
btnComprar.innerHTML = `<div class="btn-compra">comprar</div>`


let inputCompra = document.querySelector('.btn-compra')
inputCompra.addEventListener('click', addModal)

function addModal() {
    if (modalExiste == false) {
        btnComprar.innerHTML += `
        <div class="modal is-active">
            <div class="container-menu1">
                <div class="menu">
                    <div class="info-pessoal">
                        <input id="nome" type="text">
                        <input id="numero-cartao" type="number" onKeyPress="if(this.value.length==5) return false;">
                        <input id="codigo-cartao" type="number" onKeyPress="if(this.value.length==3) return false;">
                    </div>
                    <div class="container-tipo-cartao">
                        <input id="credito" type="radio" name="cartao" checked>
                        <label for="credito">crédito</label>
                        
                        <input id="debito" type="radio" name="cartao">
                        <label for="debito">débito</label>
                    </div>
                </div>
                <div class="endereco">
                </div>
            </div>
        </div>`
        modalExiste = true
        a()
    }
}