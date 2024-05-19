var slideIndex = 0;
showSlides();


function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slide-photo-home");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

document.getElementById('horizontal-songs-Home').addEventListener('click', function(){
    window.location.href = 'songDetail.html';
});

var checkSidebar = false;

function showSidebar(){
    console.log('hrhrhrhrhrhrhrhhhhhhhhhhhhhhhhhhhhhhhhhhhh')
    const sidebar = document.getElementById('home-hamburger-menu');
    if(checkSidebar == false){
        checkSidebar = true
        sidebar.style.display = 'flex'
    }
    else{
        checkSidebar = false
        sidebar.style.display = 'none'
    }
    
}

function hideSidebar(){
    const sidebar = document.getElementById('home-hamburger-menu');
    sidebar.style.display = 'none'
}


