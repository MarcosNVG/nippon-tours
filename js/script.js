const cabecalho = document.querySelector('.cabecalho');
const secards = document.querySelector('.d-cards');
const btnvm = document.querySelector('#btn-vm');
const pac1 = document.querySelector('.pacote-1');
const pac2 = document.querySelector('.pacote-2');
const pac3 = document.querySelector('.pacote-3');
const s1 = document.querySelector('#span1');
const s2 = document.querySelector('#span2');
const s3 = document.querySelector('#span3');
let cardsTourDom = document.querySelector('.d-cards-container .d-cards-tour');
const cardsContainer = document.querySelector('.d-cards-container');
const modal = document.querySelector('.section-modal');
const opacity = document.querySelector('.opacity');
const titleModal = document.querySelector('.title-modal');
const destino = document.querySelector('.destino');
const duracao = document.querySelector('.duracao');
const priceModal = document.querySelector('.price-modal')
const qtdPessoas = document.querySelector('#qtdpessoas')
const totalPrice = document.querySelector('.total-price');
let titlePac = '';
let locais = '';
let tempoViagem = '';
let price = '';

function iniciar(){
    window.alert('Este é apenas um projeto prático, todas as imagens usadas nesse projeto foram retiradas do site pexels.com')
}

            /* header responsivo */

function ativarMenu(){
    cabecalho.classList.toggle('active');
}

            /* botão ver mais serviços */

function verMais(){
    secards.classList.toggle('active');
    if (btnvm.textContent == "Veja mais") {
        btnvm.innerHTML = 'Veja menos'
    } else {
        btnvm.innerHTML = 'Veja mais'
    }
}

            /* Saiba mais pacotes */

function saberMais(p){
    if (p == 1) {
        pac1.classList.toggle('pac-active')

        if (s1.textContent == "Saiba mais"){
            s1.innerText = 'Saiba menos'
        } else {
            s1.innerText = 'Saiba mais'
        }
        
    } else if (p == 2){
        pac2.classList.toggle('pac-active')

        if (s2.textContent == "Saiba mais"){
            s2.innerText = 'Saiba menos'
        } else {
            s2.innerText = 'Saiba mais'
        }

    } else if (p == 3){
        pac3.classList.toggle('pac-active')

        if (s3.textContent == "Saiba mais"){
            s3.innerText = 'Saiba menos'
        } else {
            s3.innerText = 'Saiba mais'
        }
    }
}

            /* Card Slider */

function clicar(p) {
    
    let itemCard = document.querySelectorAll('.d-cards-container .d-cards-tour .card-tour');
    let setaRight = document.querySelector('.seta-dir');
    let setaLeft = document.querySelector('.seta-esq');
    
    
    

    if(p === 'right') {
        cardsTourDom.appendChild(itemCard[0]);
        cardsContainer.classList.add('next')
        setaRight.style.transform = 'scale(0.9)';

        setTimeout(()=>{
            setaRight.style.transform = 'scale(1)';
            /*setaLeft.style.transform = 'scale(1)';*/
        }, 100);

        setTimeout(()=>{
            cardsContainer.classList.remove('next');
        }, 500);
        

        
    } else {
        let positionLastItem = itemCard.length - 1;
        cardsTourDom.prepend(itemCard[positionLastItem]);
        cardsContainer.classList.add('prev')
        setaLeft.style.transform = 'scale(0.9)';
        
        setTimeout(()=>{
            cardsContainer.classList.remove('prev')
        }, 500);
        
        setTimeout(()=>{
            /*setaRight.style.transform = 'scale(1)';*/
            setaLeft.style.transform = 'scale(1)';
        }, 100);

    }
}

            /* Modal payaments */

function openModal(p) {
    modal.classList.add('active');
    opacity.style.display = 'block';



    if (p == 1) {
        titlePac = "Descobrindo o Japão";
        locais = 'Tokyo e Kyoto';
        tempoViagem = '6 dias';
        price = 7500.00
    } else if (p == 2) {
        titlePac = "Essência do Japão";
        locais = 'Tokyo e Kyoto';
        tempoViagem = '7 dias';
        price = 12500.00
    } else {
        titlePac = "Jóias do Japão";
        locais = 'Tokyo, Kyoto, Hiroshima e Hakone';
        tempoViagem = '10 dias';
        price = 45000.00
    }


    qtdPessoas.value = 1
    titleModal.innerHTML = 'Você está adquirindo o pacote "' + titlePac + '"';
    destino.innerHTML = 'Destino: ' + locais;
    duracao.innerHTML = 'Duração: ' + tempoViagem;
    priceModal.innerHTML = 'A partir de ' + price.toLocaleString('pt-BR',{style: 'currency', currency:'BRL'}) + ' por pessoa';
    totalPrice.innerHTML = "Total: " + price.toLocaleString('pt-BR',{style: 'currency', currency:'BRL'});
}

function closeModal() {
    modal.classList.remove('active');
    opacity.style.display = 'none'
}

function calcularValor() {
    let totalValor = Number(price) * Number(qtdPessoas.value);

    totalPrice.innerHTML = "Total: " + totalValor.toLocaleString('pt-BR',{style: 'currency', currency:'BRL'});
}