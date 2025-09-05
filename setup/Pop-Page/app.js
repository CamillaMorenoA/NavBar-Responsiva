const slider = document.querySelectorAll('.slider');
const btnVoltar = document.getElementById('btnVoltarSlide');
const btnProximo = document.getElementById('btnAvancarSlide');

let slideAtualIndice = 0;

function escondeSlide() {
  slider.forEach(item => item.classList.remove('on'))
}

function mostraSlide() {
  slider[slideAtualIndice].classList.add('on')
}

function proximoSlide() {
  escondeSlide()
  if(slideAtualIndice === slider.length -1) {
    slideAtualIndice = 0
  } else {
    slideAtualIndice++
  }
  mostraSlide()
}

function voltaSlide() {
  escondeSlide()
  if(slideAtualIndice === 0) {
    slideAtualIndice = slider.length -1
  } else {
    slideAtualIndice--
  }
  mostraSlide()
}

btnProximo.addEventListener('click', proximoSlide)
btnVoltar.addEventListener('click', voltaSlide)