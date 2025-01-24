var slides = document.querySelectorAll("#slides > img");
var prev = document.getElementById("prev");
var next = document.getElementById("next");

var current = 0;
showSlide();

function showSlide(){
    var slides = document.querySelectorAll("#slides > img");

    for (var i =0; i< slides.length; i++){
        slides[i].style.display = "none";
    }

    if (current < slides.length - 1) current++;
    else current = 0;
    
    slides[current].style.display = "block";
    setTimeout(showSlide, 2000);
}

prev.onclick = prevSlide;
next.onclick = nextSlide;

function prevSlide() {
    if (current > 0)   current -= 1;
    else current = slides.length - 1;
    showSelectedSlide(current);
}

function nextSlide() {
    if (current < slides.length -1 )   current += 1;
    else current = 0;
    showSelectedSlide(current);
}

function showSelectedSlide(n){
    for (var i =0; i< slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[current].style.display = "block";
}