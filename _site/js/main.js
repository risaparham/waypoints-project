// You can include your own javascript here
// alert("hello, your main.js file was added properly.");
console.log("Logging from main.js, it was loaded.");
// $('.carousel').carousel({
//     interval: 500
// });
// $('.carousel').carousel('cycle')
var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 3000
})