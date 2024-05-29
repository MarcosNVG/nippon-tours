let liImg = '';
let containerImg = '';
let imgCentro = '';
let botao = document.querySelector('.btn-exit-img');

function clicouimg(n){
    liImg = document.querySelector('#image' + n);
    containerImg = document.querySelector('.div-imagens')
    imgCentro = document.querySelector('.img-centro')

    if (liImg.classList.contains('active') && containerImg.classList.contains('container-active')) {
        liImg.classList.remove('active');
        containerImg.classList.remove('container-active');
    } else {
        liImg.classList.add('active');
        containerImg.classList.add('container-active');
    }
        
    if (n == '01') {
        imgCentro.style.background = 'url("https://images.pexels.com/photos/17776656/pexels-photo-17776656/free-photo-of-rua-via-construcao-predio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1") 0px 0px / cover no-repeat';
        /*imgCentro.style.backgroundPosition = '0 0';
        imgCentro.style.backgroundSize = 'cover'*/
    } else if (n == '02') {
        imgCentro.style.background = 'url("https://images.pexels.com/photos/17940005/pexels-photo-17940005/free-photo-of-cidade-meio-urbano-noite-rua.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")0px 0px / cover no-repeat'
    } else if (n == '03') {
        imgCentro.style.background = 'url("https://images.pexels.com/photos/2187308/pexels-photo-2187308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1") 0px 0px / cover no-repeat'
    } else if (n == '04') {
        imgCentro.style.background = 'url("https://images.pexels.com/photos/2187661/pexels-photo-2187661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1") 0px 0px / cover no-repeat'
    }  else if (n == '05') {
        imgCentro.style.background = 'url("https://images.pexels.com/photos/1829980/pexels-photo-1829980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1") 0px 0px / cover no-repeat'
    }  else if (n == '06') {
        imgCentro.style.background = 'url("https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1") 0px 0px / cover no-repeat'
    }  else if (n == '07') {
        imgCentro.style.background = 'url("https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1") 0px 0px / cover no-repeat'
    } else if (n == '08') {
        imgCentro.style.background = 'url("https://images.pexels.com/photos/161401/fushimi-inari-taisha-shrine-kyoto-japan-temple-161401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1") 0px 0px / cover no-repeat'
    }  else if (n == '09') {
        imgCentro.style.background = 'url("https://images.pexels.com/photos/2067057/pexels-photo-2067057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1") 0px 0px / cover no-repeat'
    }  else if (n == '10') {
        imgCentro.style.background = 'url("https://images.pexels.com/photos/161923/osaka-castle-japan-five-osaka-161923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1") 0px 0px / cover no-repeat'
    }  else if (n == '11') {
        imgCentro.style.background = 'url("https://images.pexels.com/photos/208321/pexels-photo-208321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1") 0px 0px / cover no-repeat'
    }  else if (n == '12') {
        imgCentro.style.background = 'url("https://images.pexels.com/photos/14894269/pexels-photo-14894269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1") 0px 0px / cover no-repeat'
    }   
}

function fecharimg(){
    botao.style.transform = 'scale(0.4)'

    setTimeout(() => {
        botao.style.transform = 'scale(1)';
    }, 50)

    setTimeout(() => {
        liImg.classList.remove('active')
        containerImg.classList.remove('container-active')
    }, 300)
}

