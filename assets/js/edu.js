window.onload = function(){

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