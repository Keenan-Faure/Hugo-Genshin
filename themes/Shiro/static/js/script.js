$(document).ready()
{
    setTimeout(()=>
    {
        showSlides();
    }, 500);
    setTimeout(()=>
    {
        $('.archonMond').fadeTo(1000, 1);
        $('.archonIna').fadeTo(1000, 1);
        $('.archonLiyue').fadeTo(1000, 1);
        $('.archonSumeru').fadeTo(1000, 1);
    }, 200);
}

var slideIndex = 0;
function showSlides()
{
    var slides = document.getElementsByClassName("slide");
    for(let i = 0; i < slides.length; ++i)
    {
        slides[i].style.display = "none";
    }
    ++ slideIndex;
    if(slideIndex > slides.length)
    {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].style.animation = "6s ease 0s normal none infinite running zoomin";
    setTimeout(showSlides, 6000); 
}


