
let liScale = 1.0

function clicouimg(n){
    let liImg = document.querySelector('#image' + n);
    let containerImg = document.querySelector('.gallery-image-container')

    liImg.classList.toggle('active')
    containerImg.classList.toggle('container-active')
    /*if (liScale == 1.0) {
        liImg.classList.toggle('active')
        liImg.style.transform = 'scale(1.7)';
        liScale = 2
    } else if (liScale == 2){
        liImg.style.transform = 'scale(1)';
        liScale = 1.0
    }*/
    
}