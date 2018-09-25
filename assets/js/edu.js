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

}