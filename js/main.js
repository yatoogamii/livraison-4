'use strict';
////////////////////////////////////////////////////////////////////////
//                             variables                              //
////////////////////////////////////////////////////////////////////////

//////////////////////
//  first carousel  //
//////////////////////
 
let carousel = document.getElementsByClassName('carousel')[0];
let arrImg = Array.from(document.getElementsByClassName('carousel__img'));
let count = 0;

///////////////////////
//  second carousel  //
///////////////////////

let carouselSecond = document.getElementsByClassName('carousel-second')[0];
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

