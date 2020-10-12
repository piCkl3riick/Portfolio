
/*
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {
        myIndex = 1
    }
    x[ myIndex-1 ].style.display = "block";  
    setTimeout(carousel, 2000); // Change image every 2 seconds
}
*/

$(function() {
   $("#Backgound-Color").fadeIn(1000).delay(1000).fadeOut(1000);
   $("#Home-Section").fadeIn(500).delay(500);

    $("#main-details").delay(1100).fadeIn(500).delay(100);
    $('h').delay(100).slideDown(500).delay(500);
    $('#dev').delay(100).fadeIn(500).delay(400);

});
function openSlideMenu() {
    document.getElementById('side-menu').style.width = '250px';
    document.getElementById('main').style.marginLeft = '250px';
}
function closeSlideMenu() {
    document.getElementById('side-menu').style.width = '0px';
    document.getElementById('main').style.marginLeft = '0px';
}