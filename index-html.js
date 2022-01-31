function nav_bar_mobile_icon(){
    var x = document.getElementById('navbar-menu')
    var y = document.getElementById('nav-bar-mob-content')
    var z = document.getElementById('navbar-menu-close')

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
    if(n < 0){
        slideIndex = image_index.length
    }
    for(a=0; a < image_index.length; a++){
        image_index[a].style.display = "none"
       }
    image_index[slideIndex-1].style.display = "block"
}