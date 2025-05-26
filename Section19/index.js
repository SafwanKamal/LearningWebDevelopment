$('h1').css("color", 'red');


$('h1').addClass("big-title");
$("h1").addClass("red");

// Can also use removeClass

console.log($('h1').hasClass('big-title'));



// Very concise eventListener
$('button').click(function(){
    $('h1').css('color', 'purple');
});

$('input').keypress(function(event){
    console.log(event.key);
    $('h1').html(event.key);
});

$('h1').on('mouseover', function(){
    $('h1').css('color', 'black');
});




$('h1').before("<em> HI <em>"); 
$('h1').after("<em> HI <em>"); 

// There are also prepend and append in this case


// Removes all 'em'
$('em').remove();



// Basic Animation through jQuery
$('button').on('click', function(){
    //$('h1').fadeToggle();
    // Also fadeIn fadeOut
    // Plus there is slideUp, slideDown, slideToggle 

    // CSS property has to have a numerical value
    //$('h1').animate({opacity: 0.5});

    $('h1').slideUp().slideDown().animate({opacity: 0.5});
});