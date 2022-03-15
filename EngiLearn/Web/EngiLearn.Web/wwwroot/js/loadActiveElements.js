
    let slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
        showSlides(slideIndex += n);
        }

    // Thumbnail image controls
    function currentSlide(n) {
        showSlides(slideIndex = n);
        }

    function showSlides(n) {
        let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    let titleText = document.getElementsByClassName("titleText");

            if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
            }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    titleText[i].style.color = 'white';
            }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    titleText[slideIndex - 1].style.color = 'gold';

    captionText.innerHTML = slideIndex + "." + " " + dots[slideIndex - 1].alt;
        }