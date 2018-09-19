let i = 0;
let time = 4000;
let jnext = i;
let jprev = i;
const sliderOurStory = document.querySelector('.aravind-slider-one');
const sliderPrevLink = document.querySelector('.prev-slide');
const sliderNextLink = document.querySelector('.next-slide');

let sliderList =  document.querySelectorAll('.slide-item');
let slideBlockHeight = document.querySelector('.aravind-slider-one');
let slideCountRef = document.querySelector('.slide-count');
let slideCount = 1;
//Change Image

sliderPrevLink.addEventListener('click', goToPrevSlide);
sliderNextLink.addEventListener('click', goToNextSlide);


function goToPrevSlide(){
 if(jprev == 0){
   jprev = sliderList.length - 1;
   sliderCount = sliderList.length;
 } else {
   jprev--;
 }
 slideCount = jprev + 1;
 sliderList.forEach(function(data, index, array){
  data.style.display = 'none';
  data.classList.remove('active-slide');
 });
sliderList[jprev].style.display = 'block';
sliderList[jprev].classList.add('active-slide');
if(slideCount < 10){
  slideCountRef.innerHTML = '0' + slideCount;
} else {
  slideCountRef.innerHTML = slideCount;
}
 jnext = jprev;
}
function goToNextSlide(){
  if(jnext == sliderList.length - 1){
    jnext = 0;
    slideCount = 1;
  } else{
    jnext = jnext + 1;
    slideCount = jnext;
  }
  slideCount = jnext + 1;
  
  sliderList.forEach(function(data, index, array){
    data.style.display = 'none';
    data.classList.remove('active-slide');
  });
  sliderList[jnext].style.display = 'block';
  sliderList[jnext].classList.add('active-slide');
  if(slideCount < 10){
    slideCountRef.innerHTML = '0' + slideCount;
  } else {
    slideCountRef.innerHTML = slideCount;
  }
  

 jprev = jnext ;
}

function changeSlide(){

  slideBlockHeight.style.height = slideBlockHeight.offsetHeight + sliderList[i].offsetHeight + "px";

  sliderList.forEach(function(data, index, array){
    data.style.display = "none";
    data.classList.remove('active-slide');
  });
  
  if(slideCount < 10) {
    slideCountRef.innerHTML = '0'+ slideCount;
  } else {
    slideCountRef.innerHTML = slideCount;
  }
  
  sliderList[i].classList.remove('active-slide');
  sliderList[i].style.display = "block";
  sliderList[i].classList.add('active-slide')

  if(i < sliderList.length - 1){
    i++
    slideCount++;
  } else{
    slideCount = 1;
    i = 0;
  }
    let runSlider = setTimeout('changeSlide()', time);
  
    jnext = jprev = i - 1;
   
   sliderOurStory.addEventListener('click', function(){
    clearInterval(runSlider);
   });

   
}


window.onload = changeSlide;


