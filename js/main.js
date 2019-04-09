////////////////////////////////////////////////////////////////////////
//                             variables                              //
////////////////////////////////////////////////////////////////////////

let carousel = document.getElementsByClassName('carousel')[0];
let arrImg = Array.from(document.getElementsByClassName('carousel__img'));
let count = 0;

////////////////////////////////////////////////////////////////////////
//                             functions                              //
////////////////////////////////////////////////////////////////////////

  function toggleClassHidden(index) {
    return arrImg[index].classList.toggle('carousel__img--hidden');
  }


////////////////////////////////////////////////////////////////////////
//                               events                                //
////////////////////////////////////////////////////////////////////////

carousel.onclick = function(event) {

  switch (event.target.classList[3]) {
    case "carousel__button-previous":
      toggleClassHidden(count);
      count++;
      (count == arrImg.length) ? (count = 0,  toggleClassHidden(count)) : toggleClassHidden(count);
      break;
    case "carousel__button-next":
      toggleClassHidden(count);
      count--;
    (count < 0) ? (count = (arrImg.length - 1), toggleClassHidden(count)) : toggleClassHidden(count);
      break;
  }
}

