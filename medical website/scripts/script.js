$('.home-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
    autoplay:true,
    autoplayTimeout: 5000,

    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('.doctor').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
    autoplay:true,
    autoplayTimeout: 6000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
})
$('.doctors').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:6
        }
    }
})

$('.ttxt').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
// form validation
var form = document.getElementById('form');
form.addEventListener('submit', function(e){
    e.preventDefault()
    var username = document.getElementById('username');
    var email = document.getElementById('email');
    var message = document.getElementById('message');
    
    if (username.value == "" || email.value == "" || message.value == "" ){
        alert('Please fill up Form')
    }


})
// Mobile menu
$(document).ready(function(){
    $('#menuicon').click(function(){
     $('#mobilemenu').addClass('menu-open')  
    });

    $('.menuclose').click(function(){
        $('#mobilemenu').removeClass('menu-open')  
       });

       $('.sub-toggle').click(function(){
        $('.sub-menu').slideToggle('menu-open');
        $(this).toggleClass('sub-menu-open');

       });



});


// pop up
let button = document.querySelector('#btn1');
let popup = document.querySelector('#popup');
let closepop = document.querySelector('.closepop')

button.addEventListener('click', showpop);
closepop.addEventListener('click', hidepop);

function showpop(){
    popup.classList.add('active')
}
function hidepop(){
    popup.classList.remove('active')
 }