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