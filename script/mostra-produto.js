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
