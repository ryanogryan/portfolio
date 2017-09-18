$(document).ready(function(){
  $('.cover').delay(2000).fadeOut(1000);
  $('.bottomBorder').delay(5000).fadeOut(2500);
  $('.slideMusic').hide();
  $('.home').hide();
  $('#up').hide();
  $('#plus').hide();
  $('.navIcons').hide();
  $('#nav_icn1').hide();
  $('#portfolio').css('text-decoration' , 'underline');
  $('.list').hide();

$(window).scroll(function () {
    if($(window).scrollTop() > 125){
       $('.mailingList').fadeOut(125);
       $('.top').fadeOut(125);
       $('.snap').fadeIn(250);
    }
});

$(window).scroll(function () {
    if($(window).scrollTop() < 125){
       $('.top').fadeIn(250);
       $('.mailingList').fadeIn(250);
       $('.snap').fadeOut(125);
    }
});

$('#down').click(function(){
  $('#up').show();
  $('#down').hide();
  $('.slideMusic').slideDown();
  $('.music').css('height' , '99%');
  });

$('#up').click(function(){
  $('#up').hide();
  $('#down').show();
  $('.slideMusic').slideUp();
  $('.music').css('height' , 'auto');
  });

$('#minus').click(function(){
  $('#topMusic').slideUp();
  $('#slide').slideUp();
  $('#plus').show();
  $('#minus').hide();
  $('#topMusic').slideUp();
  $('#slide').slideUp();
  $('.slideMusic').slideUp();
  $('.music').css('height' , 'auto');
  });

$('#plus').click(function(){
  $('#topMusic').slideDown();
  $('#slide').slideDown();
  $('#plus').hide();
  $('#minus').show();
  $('#up').hide();
  $('#down').show();
  $('.music').css('height' , 'auto');
  });

$('#portfolio').click(function() {
  $('.design').show();
  $('#trill').hide();
  $('#joellejames').hide();
  $('.about').hide();
  $('#about1').hide();
  $('#contact1').hide();
  $('#tumblr').hide();
  $('.lemon1').hide();
  $('#portfolio').css('text-decoration' , 'underline');
  $('#contact').css('text-decoration' , 'none');
  $('#about').css('text-decoration' , 'none');
  $('#blog').css('text-decoration' , 'none');
  });

  $('#contact').click(function() {
    $('#tumblr').hide();
    $('#trill').hide();
    $('#about1').hide();
    $('#joellejames').hide();
    $('.design').hide();
    $('.nav1').show();
    $('#contact1').show();
    $('#contact1').load('contact.html');
    $('#minus').hide();
    $('#plus').show();
    $('#portfolio').css('text-decoration' , 'none');
    $('#contact').css('text-decoration' , 'underline');
    $('#about').css('text-decoration' , 'none');
    $('#blog').css('text-decoration' , 'none');
    });

  $('#about').click(function() {
    $('#tumblr').hide();
    $('#trill').hide();
    $('#contact1').hide();
    $('#joellejames').hide();
    $('.design').hide();
    $('.nav1').show();
    $('#about1').show();
    $('#about1').load('about.html');
    $('#minus').hide();
    $('#plus').show();
    $('#portfolio').css('text-decoration' , 'none');
    $('#contact').css('text-decoration' , 'none');
    $('#about').css('text-decoration' , 'underline');
    $('#blog').css('text-decoration' , 'none');
    });

$('#blog').click(function() {
  $('#trill').hide();
  $('#joellejames').hide();
  $('.design').hide();
  $('#tumblr').show();
  $('#tumblr').load('blog.html');
  $().load('home.html');
  $('#contact1').hide();
  $('#about1').hide();
  $('#portfolio').css('text-decoration' , 'none');
  $('#contact').css('text-decoration' , 'none');
  $('#about').css('text-decoration' , 'none');
  $('#blog').css('text-decoration' , 'underline');
  });

 $('#trillOne').click(function() {
   $('.design').hide();
   $('#trill').show();
   $('#trill').load('beentrill.html');
   $('#contact1').hide();
   });

$('#lemonade').click(function() {
  $('.design').hide();
  $('#joellejames').show();
  $('#joellejames').load('lemonade.html');
  $('#contact1').hide();
  $('#about1').hide();
  });

$('#stike').click(function() {
  $('#trill').hide();
  $('.home').show();
  $('#joellejames').hide();
  $('.design').hide();
  $('.nav1').hide();
  $('#web1').show();
  $('#web1').load('stike.html');
  $('#topMusic').slideUp();
  $('#slide').slideUp();
  $('.slideMusic').slideUp();
  $('#topMusic').slideUp();
  $('#slide').slideUp();
  $('#minus').hide();
  $('#plus').show();
  $('#contact1').hide();
  $('#about1').hide();
  });

$('#nomad').click(function() {
  $('#trill').hide();
  $('.home').show();
  $('#joellejames').hide();
  $('.design').hide();
  $('.nav1').hide();
  $('#web2').show();
  $('#web2').load('nomads.html');
  $('#topMusic').slideUp();
  $('#slide').slideUp();
  $('.slideMusic').slideUp();
  $('#minus').hide();
  $('#plus').show();
  $('#topMusic').slideUp();
  $('#slide').slideUp();
  $('#minimize').css('color' , 'white');
  $('#contact1').hide();
  $('#about1').hide();
  });

$('#lush').click(function() {
  $('#trill').hide();
  $('.home').show();
  $('#joellejames').hide();
  $('.design').hide();
  $('.nav1').hide();
  $('#web2').show();
  $('#web2').load('lush.html');
  $('#topMusic').slideUp();
  $('#slide').slideUp();
  $('.slideMusic').slideUp();
  $('#minus').hide();
  $('#plus').show();
  $('#contact1').hide();
  $('#about1').hide();
  });

$('#goHome').click(function() {
  $('#trill').hide();
  $('#joellejames').hide();
  $('#web1').hide();
  $('.design').show();
  $('.nav1').show();
  $('.home').hide();
  $('.mobile').show();
  $('.stike1').hide();
  $('.lush1').hide();
  $('.nomad1').hide();
  $('#web2').hide();
  $('#down').show();
  $('.mobileNav').show();
  $('#up').hide();
  $('#slide').slideDown();
  $('#topMusic').slideDown();
  $('#minimize').css('color' , 'black');
  $('#plus').hide();
  $('#minus').show();
  });


/* mobile jquery */

 $('.trill').click(function() {
   $('.mobile').hide();
   $('.trill1').show();
   $('.trill1').load('../pages/beentrill.html');
});

$('.lemon').click(function() {
  $('.mobile').hide();
  $('.lemon1').show();
  $('.list').hide();
  $('.trill1').hide();
  $('.tumblr').hide();
  $('.stike1').hide();
  $('.lush1').hide();
  $('.about1').hide();
  $('.contact1').hide();
  $('.blog').hide();
  $('.lemon1').load('../pages/lemonade.html');
});

$('.stike').click(function() {
  $('.mobile').hide();
  $('.lemon1').hide();
  $('.list').hide();
  $('.trill1').hide();
  $('.tumblr').hide();
  $('.lush1').hide();
  $('.about1').hide();
  $('.home').show();
  $('.contact1').hide();
  $('.mobileNav').hide();
  $('.blog').hide();
  $('.stike1').show();
  $('.stike1').load('../pages/stike.html');
});

$('.nomad').click(function() {
 $('.mobile').hide();
 $('.lemon1').hide();
 $('.list').hide();
 $('.trill1').hide();
 $('.tumblr').hide();
 $('.lush1').hide();
 $('.about1').hide();
 $('.contact1').hide();
 $('.home').show();
 $('.mobileNav').hide();
 $('.nomad1').show();
 $('.nomad1').load('../pages/nomads.html');
});

$('.lush').click(function() {
 $('.mobile').hide();
 $('.lemon1').hide();
 $('.list').hide();
 $('.trill1').hide();
 $('.tumblr').hide();
 $('.lush1').hide();
 $('.about1').hide();
 $('.contact1').hide();
 $('.home').show();
 $('.mobileNav').hide();
 $('.mobile').hide();
 $('.lush1').show();
 $('.lush1').load('../pages/lush.html');
});

$('.mobileNav').click(function() {
  $('.list').slideToggle('2000');
});

$('#portfolio').click(function() {
$('.mobile').show();
$('.list').hide();
$('.trill1').hide();
$('.lemon1').hide();
$('.tumblr').hide();
$('.stike1').hide();
$('.lush1').hide();
$('.about1').hide();
$('.contact1').hide()
$('.blog').hide();
});

$('#contact').click(function() {
$('.mobile').hide();
$('.list').hide();
$('.trill1').hide();
$('.lemon1').hide();
$('.tumblr').hide();
$('.stike1').hide();
$('.nomad1').hide();
$('.lush1').hide();
$('.about1').hide();
$('.blog').hide();
$('.contact1').show();
$('.contact1').load('../pages/contact.html');
});

$('#about').click(function() {
$('.mobile').hide();
$('.list').hide();
$('.trill1').hide();
$('.tumblr').hide();
$('.stike1').hide();
$('.nomad1').hide();
$('.lush1').hide();
$('.contact1').hide();
$('.blog').hide();
$('.about1').show();
$('.about1').load('../pages/about.html');
});

$('#blog').click(function() {
$('.mobile').hide();
$('.list').hide();
$('.trill1').hide();
$('.tumblr').hide();
$('.stike1').hide();
$('.nomad1').hide();
$('.lush1').hide();
$('.contact1').hide();
$('.about1').hide();
$('.blog').show();
$('.blog').load('../pages/blog.html');
});

});
