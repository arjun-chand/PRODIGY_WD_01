window.addEventListener('scroll', function() {
    var navbar = document.getElementById('myTopnav');
    if (window.scrollY > 0) {
        navbar.style.backgroundColor = '#333'; 
    } else {
        navbar.style.backgroundColor = 'transparent';
    }
});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}
