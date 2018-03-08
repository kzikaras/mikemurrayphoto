//body selector variable
var animateThis = $('html, body');

//section variables
var galleries = document.getElementById("galleries");
var contact = document.getElementById("contact");

//button variables
var galleriesButton = $("#galleries-button");
var contactButton = $("#contact-button");

galleriesButton.click(function(){
    console.log("clicked galleries");
    animateThis.animate({
        scrollTop: $(galleries).offset().top
    }, 1900);
});

contactButton.click(function(){
    console.log("clicked contact");
    animateThis.animate({
        scrollTop: $(contact).offset().top
    }, 1900);
});
