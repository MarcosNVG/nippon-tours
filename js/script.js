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


function verMais(){
    secards.classList.toggle('active')
    if (btnvm.textContent == "Veja mais") {
        btnvm.innerHTML = 'Veja menos'
    } else {
        btnvm.innerHTML = 'Veja mais'
    }
}


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

    if(p === 'right') {
        cardsTourDom.appendChild(itemCard[0]);
        cardsContainer.classList.add('next')
        setTimeout(removerClass, 500);

        function removerClass(){
            cardsContainer.classList.remove('next')
        }
        
    } else {
        let positionLastItem = itemCard.length - 1;
        cardsTourDom.prepend(itemCard[positionLastItem]);
        cardsContainer.classList.add('prev')
        setTimeout(removerClass, 500);

        function removerClass(){
            cardsContainer.classList.remove('prev')
        }
    }
}


set