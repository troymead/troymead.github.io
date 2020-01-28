// greeting based on time of day
function updateGreeting() {
    var today = new Date();
    var hourNow = today.getHours();
    var greeting;
    if (hourNow > 18) {
        greeting = 'Good evening! Welcome to my website.';
    } else if (hourNow > 12) {
        greeting = 'Good afternoon! Welcome to my website.';
    } else if (hourNow > 0) {
        greeting = 'Good morning! Welcome to my website.';
    } else {
        greeting = 'Welcome to my website!';
    }

    document.write('<p class="align">' + greeting + '</p>')
}

// need to test these lines
// makes nav sticky when scrolling
window.onscroll = function() {this.navFunc()};

var topnav = document.getElementById("topnav");

var sticky = navbar.offsetTop;

function navFunc() {
    if (window.pageYOffset >= sticky) {
        topnav.classList.add("sticky");
    } else {
        topnav.classList.remove("sticky");
    }
}

// slideshow; need to test this
$("#slideshow > div:gt(0)").hide();

setInterval(function() {
    $('#slideshow > div:first')
    .fadeout(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
}, 3000);