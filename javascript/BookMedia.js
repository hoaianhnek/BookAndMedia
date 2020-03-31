
$(document).scroll(function() {
    var y  = $(this).scrollTop();
    if( y > 168 )  {
        $('.background-slide header').css({"background-color":"#041721",
        "box-shadow":"-4px 3px 0 rgba(0, 0, 0, 0.2)","position":"fixed",
        "top":"0","transition":"1s"});
        $('.contact-infomation').css('display','none');
        $('.background-slide header').css({
            'animation':'scroll-menu 0.5s ease 1 forwards'}
        );
        $('.header-page .contact-logo img').css({'width':'42px','heigth':'42px','float':'left',
            'margin-bottom': '25px'});
        $('.header-page .contact-logo div').css({'float':'none','margin-left':'55px',
            'font-size':'8px','line-height':'25px','font-weight':'700'    
        });
        $('.scroll-to-top').css({'opacity':'1','bottom': '2em'});

    }else {
        $('.background-slide header').css({"background-color":"transparent ",
        'position':'relative',
        'box-shadow':'none'});
        $('.contact-infomation').css('display','block');
        $('.header-page .contact-logo img').css({'width':'65px','heigth':'65px','float':'none',
            'margin-bottom': '0px'});
        $('.header-page .contact-logo div').css({'margin-left':'0px',
            'font-size':'0.6875em','line-height':'1.1818em'  
        });
        $('.scroll-to-top').css({'opacity':'0','bottom':'-4em'});
    }
});

// button arrow
var x=0;
$(document).ready(function(){
    $('.sort-by-down').click(function(){
        x++;
        if(x%2==0) {
        $('.sort-by-down').css({
            'trasition':'2s',
            'transform':'rotateX(0deg)'
        });
    }
    else {
        $('.sort-by-down').css({
            'trasition':'2s',
            'transform':'rotateX(180deg)'
        });
    }
    });
});
//slider author
// $(document).ready(function(){
//     var show = 3;
//     var w = $('.slider-author').width()/show;
//     var l = $('.author-img1').length;
    
//     $('.author-img1').width(w-20);
//     $('.slider-author-wrap').width(l*w);

//     function slider(){
//         $('.author-img1:first-child').animate({
//             marginLeft: -w
//         }, 'slow', function(){
//             $(this).appendTo($(this).parent()).css({marginLeft:0})
//         });
//     }

//     var timer = setInterval(slider,2000);

//     $('.slider-author').hover(function(){
//         clearInterval(timer);
//     }, function(){
//         timer = setInterval(slider,2000);
//     });
// });
$(document).ready(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 5,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
      });
});
//scroll to top
$(document).ready(function(){
    $('.scroll-to-top').click(function(){
        event.preventDefault();
        $('html,body').animate({scrollTop: 0},400);
        return false;
    });
});
//slide header
var slideIndex = 1;
var timeOutId;
showSlide(slideIndex);
function showSlide(n) {
    clearTimeout(timeOutId);
    var i;
    var slides = document.getElementsByClassName('slide');
    if( n>slides.length) {
        slideIndex = 1;
    }
    if( n < 1) {
        slideIndex = slides.length;
    }
    for( i = 0;  i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display ="block"; 
    
    timeOutId=setTimeout(showSlide,2000);
}
function plusSlide(n) {
    showSlide(slideIndex += n);
}

