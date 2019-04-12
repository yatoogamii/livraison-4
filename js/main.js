'use strict';
////////////////////////////////////////////////////////////////////////
//                             variables                              //
////////////////////////////////////////////////////////////////////////

//////////////////////
//  first carousel  //
//////////////////////
 
const carousel = document.getElementsByClassName('carousel')[0];
let arrImg = Array.from(document.getElementsByClassName('carousel__img'));
let count = 0;
let containerCircle = document.getElementsByClassName('container-circle-img')[0];
let iconCircle = containerCircle.getElementsByClassName('fa-circle');

///////////////////////
//  second carousel  //
///////////////////////

const carouselSecond = document.getElementsByClassName('carousel-second')[0];
let figure = document.getElementsByClassName('carousel-figure')[0];
let carouselList = document.getElementsByClassName('carousel-list')[0];
let ps = document.getElementsByTagName('p');


////////////////////////////////////////////////////////////////////////
//                             functions                              //
////////////////////////////////////////////////////////////////////////

//////////////////////
//  first function  //
//////////////////////

  function toggleClassHidden(index) {
    return arrImg[index].classList.toggle('carousel__img--hidden');
  }

  function verifyCount(arr, number) {
    if (number == arr.length) {
      return count = 0;
    }
    if (number < 0) {
      return count = arr.length - 1;
    } else {
      return count;
    }
  }

  function circleForImg() {
    for (let i = 0; i < arrImg.length; i++) {
      // if (arrImg[i] == activeImg) {
      //   containerCircle.insertAdjacentHTML('beforeEnd', `<i> class="fas fa-circle"></i>`)
      // } else {
      //   containerCircle.insertAdjacentHTML('beforeEnd', `<i> class="far fa-circle"></i>`)
      containerCircle.insertAdjacentHTML('beforeEnd', `<i class="far fa-circle"></i>`)
      // }
    }
  }
  circleForImg();

  function targetActiveImg() {
    let activeImg = carousel.querySelector("img:not(.carousel__img--hidden)");
    let iconActive;
    for (let i = 0; i < arrImg.length; i++) {
      if (activeImg == arrImg[i]) {
        iconActive = iconCircle[i];
      }
    }
    iconActive.classList.toggle('far');
    iconActive.classList.toggle('fas');
  }
  targetActiveImg();

  function clearCircleActiveImg() {
    let iconNotClear = containerCircle.getElementsByClassName('fas')[0];
    iconNotClear.classList.toggle('far');
    iconNotClear.classList.toggle('fas');
  }
///////////////////////
//  second function  //
///////////////////////

function ulChildren(target, number) {

  for (let i = 0; i < ps.length; i++) {
    if (target == ps[i]) {
      return ps[number - 1];
    }
  }
  return carouselList.children[number - 1];
}


/////////////////////////////////////////////////////////////////////////
//                               events                                //
/////////////////////////////////////////////////////////////////////////

 ///////////////////
 //  first event  //
 ///////////////////
 
carousel.onclick = function(event) {

  clearCircleActiveImg();
  switch (event.target.classList[3]) {
    case "carousel__button-previous":
      toggleClassHidden(count);
      count--;
      toggleClassHidden(verifyCount(arrImg, count));
      break;
    case "carousel__button-next":
      toggleClassHidden(count);
      count++;
      toggleClassHidden(verifyCount(arrImg, count));
      break;
  }
  targetActiveImg();
}

////////////////////
//  second event  //
////////////////////

carouselSecond.onclick = function(event) {

  let active = figure.querySelector("img:not(.carousel__img-second--hidden)");

  switch (event.target) {
    case ulChildren(event.target, 1) : 
      active.classList.add('carousel__img-second--hidden')
      figure.children[0].classList.remove('carousel__img-second--hidden')
      break;
    case ulChildren(event.target, 2) :
      active.classList.add('carousel__img-second--hidden')
      figure.children[1].classList.remove('carousel__img-second--hidden')
      break;
    case ulChildren(event.target, 3) :
      active.classList.add('carousel__img-second--hidden')
      figure.children[2].classList.remove('carousel__img-second--hidden')
      break;
    case ulChildren(event.target, 4) :
      active.classList.add('carousel__img-second--hidden')
      figure.children[3].classList.remove('carousel__img-second--hidden')
      break;
  }
}

