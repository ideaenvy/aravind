window.onload = function(){

  
  courseStructure = document.querySelector('#courseLinks');
  const courseLinks = courseStructure.querySelectorAll('li a');

  courseStructure.addEventListener('click', function(e){
    if(e.target.classList.contains('item-list')){
      let selectedId = e.target.querySelector('a').getAttribute('href');
     courseLinks.forEach(function(data, index, array){
      const allSectionIds = data.getAttribute('href');
      document.querySelector(allSectionIds).style.display = 'none';
      document.querySelector(selectedId).style.display = 'block';
     data.parentElement.classList.remove('activelink');
     });
     e.target.classList.add('activelink');
    } else{
      let selectedId = e.target.getAttribute('href'); 
      e.target.parentElement.classList.add('activelink');
      courseLinks.forEach(function(data, index, array){
       const allSectionIds = data.getAttribute('href');
       document.querySelector(allSectionIds).style.display = 'none';
       document.querySelector(selectedId).style.display = 'block';
       data.parentElement.classList.remove('activelink');
      });
      e.target.parentElement.classList.add('activelink');
    }
  });
  

}