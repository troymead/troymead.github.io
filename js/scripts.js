// greeting based on time of day
var today = new Date();
var hourNow = today.getHours();
var greeting;

// if (hourNow > 18) {
//     greeting = 'Good evening! Welcome to my website.';
// } else if (hourNow > 12) {
//     greeting = 'Good afternoon! Welcome to my website.';
// } else if (hourNow > 0) {
//     greeting = 'Good morning! Welcome to my website.';
// } else {
//     greeting = 'Welcome to my website!';
// }

// document.write('<p class="align">' + greeting + '</p>')

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