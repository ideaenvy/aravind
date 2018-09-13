/* Global jQuery */

/* Contents
// ------------------------------------------------>
     1. wow animation
     2. Menu Mobile
     3. Cart
     4. Search
     5. Owl Slider
     6. Light Box
     7. Fixed Header
     8. Sticky Sidebar
*/

(function($) {
    "use strict";

	/* ------------------  1. wow animation ------------------ */
    $(window).imagesLoaded(function () {
        wow.init();
    });
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: false,
        live: true
    });



    
    /* ------------------  2. Menu Mobile ------------------ */
    var $menu_show = $('.mobile-toggle'),
        $menu = $('header #menu-main'),
        $list = $("ul.nav-menu li a"),
        $menu_list = $('header li.has-dropdown'),
        $menu_ul = $('ul.sub-menu'),
        $cart_model = $('.cart-model'),
        $cart_link = $('#cart-link'),
        $search_bar = $('#search_bar'),
        $search_close = $('.close-search'),
        $search_bot = $('#search-header'),
        $fixed_header = $('#fixed-header'),
        $fixed_header_dark = $('#fixed-header-dark'),
        $sticky_content = $('.sticky-content'),
        $sticky_sidebar = $('.sticky-sidebar');

    $menu_show.on("click", function (e) {
        $menu.slideToggle();
    });
    $list.on("click", function (e) {
        var submenu = this.parentNode.getElementsByTagName("ul").item(0);
        if (submenu != null) {
            event.preventDefault();
            $(submenu).slideToggle();
        }
    });


    
    /* ------------------  3. Cart ------------------ */
    $cart_link.on("click", function (e) {
        $cart_model.slideToggle("fast");
    });

    $(window).on("click", function (e) {
        $cart_model.hide("fast");
    });
    $cart_link.on("click", function (e) {
        event.stopPropagation();
    });




    
    /* ------------------  4. Search ------------------ */
    $search_bot.on("click", function (e) {
        $search_bar.slideToggle("fast");
    });
    $search_close.on("click", function (e) {
        $search_bar.hide("fast");
    });



    
    /* ------------------  5.Owl Slider ------------------ */
    var owl2 = $(".slider-1");
    var owl3 = $('.travelers-say-3');
    var owl = $(".testimonial-carousel");
    var news = $(".news-carousel");
    var doctors = $(".doctor-carousel");
    var hospitals = $(".hospital-carousel");
    var other_hospitals = $(".ohospital-carousel");
    var ourfounder = $('.owl-carousel-thumb');
    
    owl.owlCarousel({
        items: 3, //10 items above 1000px browser width
        itemsDesktop: [1000, 3], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 3], // betweem 900px and 601px
        itemsTablet: [600, 1], //2 items between 600 and 0
        slideSpeed: 1000,
        autoPlay: true,
        itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option
    });
    news.owlCarousel({
        items: 1, //10 items above 1000px browser width
        itemsDesktop: [1000, 1], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 1], // betweem 900px and 601px
        itemsTablet: [600, 1], //2 items between 600 and 0
        slideSpeed: 1000,
        nav:true,
        navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        autoPlay: true,
        itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option
    });
    doctors.owlCarousel({
        items: 3, //10 items above 1000px browser width
        itemsDesktop: [1000, 1], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 1], // betweem 900px and 601px
        itemsTablet: [600, 1], //2 items between 600 and 0
        slideSpeed: 1000,
        autoPlay: true,
        itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option
    });
    hospitals.owlCarousel({
        items: 4, //10 items above 1000px browser width
        itemsDesktop: [1000, 2], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 2], // betweem 900px and 601px
        itemsTablet: [600, 1], //2 items between 600 and 0
        slideSpeed: 1000,
        autoPlay: true,
        itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option
    });
    other_hospitals.owlCarousel({
        items: 3, //10 items above 1000px browser width
        itemsDesktop: [1000, 3], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 1], // betweem 900px and 601px
        itemsTablet: [600, 1], //2 items between 600 and 0
        slideSpeed: 1000,
        autoPlay: true,
        itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option
    });
    owl3.owlCarousel({
        dotsContainer: '#carousel-custom-dots',
        items: 3, //10 items above 1000px browser width
        itemsDesktop: [1000, 3], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 3], // betweem 900px and 601px
        itemsTablet: [600, 1], //2 items between 600 and 0
        itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option
    });
   ourfounder.owlCarousel({
        thumbs: true,
        thumbsPrerendered: true,
        thumbContainerClass: 'owl-thumbs',
        thumbItemClass: 'owl-thumb-item',
        items: 1, //10 items above 1000px browser width
        itemsDesktop: [1000, 1], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 2], // betweem 900px and 601px
        itemsTablet: [600, 1], //2 items between 600 and 0
        itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option
    });



    
    /* ------------------  6. Light Box ------------------ */
    $(document).on('click', '[data-toggle="lightbox"]', function (event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });



    
    /* ------------------  7. Fixed Header ------------------ */
    $(window).on("scroll", function() {
        if ($(window).scrollTop() >= 50) {
            $fixed_header.addClass('fixed-header');
            $fixed_header_dark.addClass('fixed-header-dark');
        } else {
            $fixed_header.removeClass('fixed-header');
            $fixed_header_dark.removeClass('fixed-header-dark');
        }
    });



    
    /* ------------------  8. Sticky Sidebar ------------------ */
    $sticky_content.theiaStickySidebar({
        additionalMarginTop: 30
    });
    $sticky_sidebar.theiaStickySidebar({
        additionalMarginTop: 30
    });



}(jQuery));

window.onload = function (){
if(window.location.href === 'http://ideaenvypro.com/aravind_new/our-founder-new.html') {
    const ourFounderSelector = document.querySelector('.menu-items');
    ourFounderSelector.addEventListener('click', ourFounderMenu);
function ourFounderMenu(e){
    const selectedItem = e.target.getAttribute('data-target');

    if(selectedItem == 'about-us'){
        
    }  else {
        const selectEachItem = document.querySelectorAll('.aravind-sec');
        selectEachItem.forEach(function(ele, index, array){
            ele.style.display = 'none';
        });
        const menuItemList = document.querySelectorAll('.menu-items-list');
        menuItemList.forEach(function(ele, index, array){
            ele.classList.remove('active');   
        });
        const displayItem = document.querySelector('#'+selectedItem);
        displayItem.style.display = 'block';
        e.target.classList.add('active');
    }
}
}



const getAwardBox = document.querySelectorAll('.award-item');

let heightOfBox = 0;
getAwardBox.forEach(function(element, index, array){

    if(element.offsetHeight > heightOfBox ){
        heightOfBox = element.offsetHeight;
    }
});
getAwardBox.forEach(function(element, index, array){

    element.style.height = heightOfBox + "px";

});
}


if (window.location.href === 'http://ideaenvypro.com/aravind_new/hospitals_old.html') {

  let list = document.querySelectorAll('.grid-item');
  for( i = 0; i < list.length; i++){
     list[i].addEventListener("click", showto);
  }

}

if ('http://ideaenvypro.com/aravind_new/hospitals.html' || 'http://ideaenvypro.com/aravind_new/hospitals_1.html') {

  let list = document.querySelectorAll('.grid-items');
  for( i = 0; i < list.length; i++){
     list[i].addEventListener("click", showto);
  }

}

if (window.location.href === 'http://ideaenvypro.com/aravind_new/hospitals__old.html') {

  let list_item = document.querySelectorAll('.item-list');
  for( i = 0; i < list_item.length; i++){
     list_item[i].addEventListener("click", showme);
  }

}

function showme(e){
let curList_item = document.querySelector('.activated');
let itemId = curList_item.getAttribute('data-target');
hideit(itemId);
curList_item.classList.remove('activated');
let showItemid = this.getAttribute('data-target');
this.classList.add('activated');
showit(showItemid);
}

function showto(e){
let curList = document.querySelector('.activelink');
let curId = curList.getAttribute('data-target');
hideit(curId);
curList.classList.remove('activelink');
let showid = this.getAttribute('data-target');
this.classList.add('activelink');
showit(showid);
}
function hideit(e){
  document.getElementById(e).style.display="none";
}
function showit(e){
  document.getElementById(e).style.display="block";
}

const listHeight = document.querySelectorAll('.grid-items');
   
    let heightOfList = 0;
    listHeight.forEach(function(data, index, arr){
        if(heightOfList < data.offsetHeight) {
            heightOfList = data.offsetHeight;
        }
    });
    listHeight.forEach(function(data, index, arr){
        if(data.offsetHeight < heightOfList) {
            console.log(heightOfList);
            data.style.height = heightOfList + "px";
        }

});

// contact page
const collapse_item = document.querySelectorAll('.con-sub-head');
  for( i = 0; i < collapse_item.length; i++){
     collapse_item[i].addEventListener("click", collapse);
  }
function collapse(e){
let bool_item = this.getAttribute('aria-expanded');
let target_id = this.getAttribute('data-target');
if(bool_item == 'true'){
 this.setAttribute('aria-expanded', 'false');
 document.getElementById(target_id).style.display='none';
}else{
  collapse_item.forEach(function(data, index, arr){
  let dorp = data.getAttribute('aria-expanded');
  if(dorp == 'true'){
  const t_id = collapse_item[index].getAttribute('data-target');
  collapse_item[index].setAttribute('aria-expanded', 'false');
  document.getElementById(t_id).style.display='none';
  }

});
 this.setAttribute('aria-expanded', 'true');
 document.getElementById(target_id).style.display='block';
}
if(e.target.classList == 'item-list'){
         const itemActive = '.'+e.target.parentElement.parentElement.classList.toString()+' .activated-listcon';
         const itemRemoveActive = document.querySelector(itemActive);
         if(itemRemoveActive != null){
             itemRemoveActive.classList.remove('activated-listcon');
         }
         e.target.classList.add('activated-listcon');

         const getAddrSections = document.querySelectorAll('.address-sections');
         getAddrSections.forEach(function(data, index, arr){
             data.style.display = 'none';
         });
        const targetId = e.target.getAttribute('data-target');
         document.querySelector(targetId).style.display = 'block';
     }

}

const d_item = document.querySelectorAll('.item-list');
  for( i = 0; i < d_item.length; i++){
     d_item[i].addEventListener("click", showele);
  }

function showele(e){
let curList_item = document.querySelector('.activated-listcon');
let itemId = curList_item.getAttribute('data-target');
console.log(itemId);
if (itemId != null){
hideit(itemId);}
curList_item.classList.remove('activated-listcon');
let showItemid = this.getAttribute('data-target');
this.classList.add('activated-listcon');
if (showItemid != null){
showit(showItemid);}
}


//contact us

// const getSidebar = document.querySelector('.contact-clinic');
// getSidebar.addEventListener('click', colapsefun);
// function colapsefun(e){
// alert();
//     if(e.target.classList == 'con-sub-head'){
//     const itemTarget = '.'+e.target.parentElement.classList.toString()+' .sub-widgets';
//     console.log(itemTarget);
//     const itemIconTarget = '.'+e.target.parentElement.classList.toString()+' .fa-angle-right';
//     const iconRotateSingle = document.querySelector(itemIconTarget);
//     const iconRotate = document.querySelectorAll(' .fa-angle-right');
//     let content = document.querySelector(itemTarget);
    
//     const hideAll = document.querySelectorAll('.sub-widgets');
//        iconRotate.forEach(function(data, index, arr){
//         data.classList.remove('down');
//        });
//        hideAll.forEach(function(data, index, arr){
//         data.style.display = 'none';
//        });
//       content.style.display = 'block';
//       iconRotateSingle.classList.add('down'); 
//     } else if(e.target.classList == 'item-list'){
//         const itemActive = '.'+e.target.parentElement.parentElement.classList.toString()+' .activated-listcon';
//         const itemRemoveActive = document.querySelector(itemActive);
//         if(itemRemoveActive != null){
//             itemRemoveActive.classList.remove('activated-listcon');
//         }
//         e.target.classList.add('activated-listcon');

//         const getAddrSections = document.querySelectorAll('.address-sections');
//         getAddrSections.forEach(function(data, index, arr){
//             data.style.display = 'none';
//         });
//         const targetId = e.target.getAttribute('data-target');
//         document.querySelector(targetId).style.display = 'block';
//     }
// }

const d = new Date();
var day = d.getDate().toString();
var month = d.getMonth()+1;
var year = d.getFullYear().toString();
var hour = d.getHours().toString();
var min = d.getMinutes().toString();
var sec = d.getSeconds().toString();
const curr_date = day.concat("-").concat(month).concat("-").concat(year);
const curr_time = hour.concat(":").concat(min).concat(":").concat(sec);
const app_date = curr_date.concat(" ").concat(curr_time);
document.getElementById('app_date').innerHTML= app_date;

document.getElementById("amtSelect").addEventListener("change", delele, false);

function delele(e){
    e.preventDefault();
    const outele = this.value;
    const tar = this.getAttribute('data-target');
    if (outele === 'Other-Amt'? showit(tar) : hideit(tar));
  }

document.getElementById("enq-dropdown").addEventListener("change", deleles, false);

function deleles(e){
    e.preventDefault();
    const outeles = this.value;
    const tars = this.getAttribute('data-target');
    if (outeles === 'others'? showit(tars) : hideit(tars));
}

const tkbtn = document.querySelectorAll('.tik-btn');
  for(i = 0; i < tkbtn.length; i++){
    tkbtn[i].addEventListener("change", checkbtn);
  }

function checkbtn(e){
    const cbtn = this.getAttribute('data-target');
    if(this.value === 'on'?showit(cbtn):hideit(cbtn));
}

const dform = document.querySelector('#dform');
    dform.addEventListener("click",formshide);
    var count = 0;
function formshide(e){
    count++;
    var targ = this.getAttribute('data-target');
    if(count%2 !== 0?showit(targ):hideit(targ));
}

const specSelector = document.querySelector('.speciality-clinic-sub1');

    specSelector.addEventListener('click', specialityClicnics);
    function specialityClicnics(e){
        if(e.target.classList[0] == 'grid-items'){
            const getItems = document.querySelectorAll('.grid-items')
            getItems.forEach(function(data, index, arr){
                 data.classList.remove('activelink');
            });
            e.target.classList.add('activelink');
        }
    }