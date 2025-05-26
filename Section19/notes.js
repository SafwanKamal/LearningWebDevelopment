// Looks at the document to see if it is loaded
$(document).ready(function(){
    //Do what you want with jQuery
})

console.log($('h1').hasClass('big-title'));

$('h1').text("Something");
$('h1').html("<em> HI <em>"); // Works like innerHTML

$('img').attr("href"); // Gets the attribute
$('img').attr("href", "https://google.com"); // Sets the attribute
$('img').attr("class"); // Gets all the classes assigned to an element(s)

