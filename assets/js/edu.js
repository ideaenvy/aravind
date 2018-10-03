window.onload = function(){
 
  var eduTraining = $('.eduTrainingSlider');
  eduTraining.owlCarousel({
    items: 1, //10 items above 1000px browser width
    itemsDesktop: [1000, 1], //5 items between 1000px and 901px
    itemsDesktopSmall: [900, 2], // betweem 900px and 601px
    itemsTablet: [600, 1], //2 items between 600 and 0
    itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option
});

   eduTraining.owlCarousel({
        items: 1, //10 items above 1000px browser width
        itemsDesktop: [1000, 1], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 2], // betweem 900px and 601px
        itemsTablet: [600, 1], //2 items between 600 and 0
        itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option
    });


  const subMenuEdu = document.querySelector('#eduSubMenu');

  subMenuEdu.addEventListener('click', function() {
    const substatus = document.querySelector('.sub-widgets-sub');
    if(substatus.style.display.toString() != 'none'){
      substatus.style.display = 'none';
    } else{
      substatus.style.display = 'block';
    }
  });

  const longTermFellowship = document.querySelector('.btn-fellowship-t');
  const shortTermFellowShip = document.querySelector('.btn-fellowship-s');

  const longTermFellowshipContent = document.querySelector('.long-term-fellowship-content');
  const shortTermFellowShipContent = document.querySelector('.short-term-fellowship-content');

  longTermFellowship.addEventListener('click', function(){
  

    if(longTermFellowshipContent.style.display.toString() != 'none'){
      longTermFellowshipContent.style.display = 'none';
    } else{
      longTermFellowshipContent.style.display = 'block';
      shortTermFellowShipContent.style.display = 'none';
    }
  });

  shortTermFellowShip.addEventListener('click', function(){

    if(shortTermFellowShipContent.style.display.toString() != 'none'){
      shortTermFellowShipContent.style.display = 'none';
    } else {
      shortTermFellowShipContent.style.display = 'block';
      longTermFellowshipContent.style.display = 'none';
    }
  });

  
}

