var y = document.getElementById('nav-bar-mob-content');
var z = document.getElementById('navbar-menu-close');
var x = document.getElementById('navbar-menu');

var riding_solo_btn = document.getElementById('riding-solo');
var you_and_i_btn = document.getElementById("you-and-i-content");
var turkey_btn = document.getElementById("turkey-meal");
function view_btn(name){
    if(name.className !== "none-mobile"){
        name.className = "none-mobile"
    }
    else{
        name.className = ""
    }
}

function nav_bar_mobile_icon(){
   
    if(x.className === 'nav-bar-menu'){
        x.className = 'none'
        y.className = 'nav-bar-mob-content'
        z.className = 'nav-bar-menu'

    }
    else{
        y.className = 'none'
        x.className = 'nav-bar-menu'
        z.className = 'none'
    }
}

function menu_content_btn(){
    y.className = 'none'
    z.className = 'none'
    x.className = 'nav-bar-menu'

}

var slideIndex = 1;
reviewSlides(slideIndex)

function slideControl(n){
    reviewSlides(slideIndex += n)
}

function reviewSlides(n){
    var image_index = document.getElementsByClassName('review-imgs')
    var a;
    if(n > image_index.length){
        slideIndex = 1
    }
    if(n < 1){
        slideIndex = image_index.length
    }
    for(a=0; a < image_index.length; a++){
        image_index[a].style.display = "none"
       }
    image_index[slideIndex-1].style.display = "block"
}