let totalSlides = document.querySelectorAll('.slider-item').length;
let slideAtual = 0;
let lagura = document.querySelector('.slider-width').style.width = `calc(100vw * ${totalSlides})`;

document.querySelector('.slider-controls').style.height = `${document.querySelector('.slider').clientHeight}px`;


function goPrev(){
  slideAtual--;
  if(slideAtual < 0){
    slideAtual = totalSlides - 1;
  }
  updateMargin();
}

function goNext(){
  slideAtual++;
  if( slideAtual > (totalSlides-1)){
    slideAtual = 0;
  }
  updateMargin();
}

updateMargin(){}