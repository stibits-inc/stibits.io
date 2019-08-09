(function ($) {
  "use strict";


  // ------------------------------------------------------------------------------ //
  // Start User language based on navigator langage
  // ------------------------------------------------------------------------------ //

  function languageSelect(){
    var userLang = navigator.language || navigator.userLanguage;
  if(userLang.length>2){
    var userLangEdge = userLang.split('-')[0];
  }
  if (userLang == "en" || userLangEdge == "en") {
      return;
  }
  else{
      // french language redirect
      if(userLang == "fr" || userLangEdge == "fr"){
        document.location.href = "fr";
        return;
      }
      // Arabic language redirect
      if(userLang == "ar" || userLangEdge == "ar"){
        document.location.href = "ar";
        return;
      }
      if(userLang == "zh" || userLangEdge == "zh"){
        document.location.href = "zh";
        return;
      }
  }
  } 

  languageSelect();

  // ------------------------------------------------------------------------------ //
  // End User language based on navigator langage 
  // ------------------------------------------------------------------------------ //

  var window_width = $(window).width(),
    window_height = window.innerHeight,
    header_height = $(".default-header").height(),
    header_height_static = $(".site-header.static").outerHeight(),
    fitscreen = window_height - header_height;

  $(".fullscreen").css("height", window_height)
  $(".fitscreen").css("height", fitscreen);

  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 600) {
      $('.scroll-top').fadeIn(600);
    } else {
      $('.scroll-top').fadeOut(600);
    }
  });
  $('.scroll-top').on("click", function () {
    $("html,body").animate({
      scrollTop: 0
    }, 500);
    return false;
  });


  // ------------------------------------------------------------------------------ //
  // Preloader 
  // ------------------------------------------------------------------------------ //

  $(document).ready(function () {
    setTimeout(function () {
      $('body').addClass('loaded');
    }, 3000);

  });


  // ------------------------------------------------------------------------------ //
  // Active Menu 
  // ------------------------------------------------------------------------------ //


  $('#dopeNav').dopeNav({
    stickyNav: true,
  });

  //Smooth Scrolling Using Navigation Menu
  $('a[href*="#"]').on('click', function (e) {
    $('html,body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 70
    }, 500);
    e.preventDefault();
  });



  // ------------------------------------------------------------------------------ //
  // Team carousel  
  // ------------------------------------------------------------------------------ //


  $("#team-carusel").owlCarousel({
    items: 4,
    loop: true,
    margin: 30,
    dots: true,
    autoplayHoverPause: true,
    smartSpeed: 500,
    autoplay: false,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 2
      },
      992: {
        items: 4
      }
    }
  });


  // ------------------------------------------------------------------------------ //
  // Service carousel  
  // ------------------------------------------------------------------------------ //


  $("#service-carusel").owlCarousel({
    items: 4,
    loop: true,
    margin: 15,
    dots: true,
    autoplayHoverPause: true,
    smartSpeed: 500,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 2
      },
      992: {
        items: 4
      }
    }
  });


  // ------------------------------------------------------------------------------ //
  // Testimonial carousel  
  // ------------------------------------------------------------------------------ //


  $("#testimonial-carusel").owlCarousel({
    items: 2,
    loop: true,
    margin: 30,
    dots: true,
    autoplayHoverPause: true,
    smartSpeed: 500,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      }
    }
  });


  $("#testimonial-carusel2").owlCarousel({
    items: 1,
    loop: true,
    margin: 30,
    dots: true,
    autoplayHoverPause: true,
    smartSpeed: 500,
    autoplay: true,
  });


  // ------------------------------------------------------------------------------ //
  // Screenshot carousel  
  // ------------------------------------------------------------------------------ //


$('#screenshot-carusel').owlCarousel({
    loop: true,
    responsiveClass: true,
    nav: true,
    margin: 5,    
    autoplayTimeout: 4000,
    smartSpeed: 500,
    center: true,
    navText: ['<span class="ti ti-angle-left"></span>', '<span class="ti ti-angle-right"></span>'],
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 3
        },
        1200: {
            items: 5
        }
    }
});


  



  // ------------------------------------------------------------------------------ //
  // Stat Counter  
  // ------------------------------------------------------------------------------ //

  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });


  // ------------------------------------------------------------------------------ //
  // Skill Section  
  // ------------------------------------------------------------------------------ //


  $(document).ready(function () {

    $(".skills").addClass("active");
    $(".skills .skill .skill-bar span").each(function () {
      $(this).animate({
        "width": $(this).parent().attr("data-bar") + "%"
      }, 1000);
      $(this).append('<b>' + $(this).parent().attr("data-bar") + '%</b>');
    });
    setTimeout(function () {
      $(".skills .skill .skill-bar span b").animate({
        "opacity": "1"
      }, 1000);
    }, 2000);
  });

  // ------------------------------------------------------------------------------ //
  // Accordian   
  // ------------------------------------------------------------------------------ //


  var allPanels = $(".accordion > dd").hide();
  allPanels.first().slideDown("easeOutExpo");
  $(".accordion").each(function () {
    $(this).find("dt > a").first().addClass("active").parent().next().css({
      display: "block"
    });
  });

  $(document).on('click', '.accordion > dt > a', function (e) {
    var current = $(this).parent().next("dd");
    $(this).parents(".accordion").find("dt > a").removeClass("active");
    $(this).addClass("active");
    $(this).parents(".accordion").find("dd").slideUp("easeInExpo");
    $(this).parent().next().slideDown("easeOutExpo");
    return false;

  });


  // ------------------------------------------------------------------------------ //
  // Skillbar
  // ------------------------------------------------------------------------------ //


	$(".skill_main").each(function() {
    $(this).waypoint(function() {
        var progressBar = $(".progress-bar");
        progressBar.each(function(indx){
            $(this).css("width", $(this).attr("aria-valuenow") + "%")
        })
    }, {
        triggerOnce: true,
        offset: 'bottom-in-view'

    });
});


  // ------------------------------------------------------------------------------ //
  // Parallux Background 
  // ------------------------------------------------------------------------------ //

  $(window).stellar();




  // animation on scroll part

  var $window = $(window);
  $window.on('scroll', function(){
    var y = $(this).scrollTop();
    if(y > 470){
      $('#sendReceive').removeClass('remove');
      $('#sendReceive').addClass('animated fadeInUp delay-0s');
    }
    if(y > 1050){
      $('#howToSend').removeClass('remove');
      $('#howToSend').addClass('animated fadeInLeft delay-0s');
      $('#imgHowToSend').removeClass('remove');
      $('#imgHowToSend').addClass('animated fadeInRight delay-0s');
    }
    if(y > 1586){
      $('#imgFromLeft').removeClass('remove');
      $('#imgFromLeft').addClass('animated fadeInLeft delay-0s');
      $('#img1FromBottom').removeClass('remove');
      $('#img1FromBottom').addClass('animated fadeInUp delay-0s');
      $('#img2FromBottom').removeClass('remove');
      $('#img2FromBottom').addClass('animated fadeInUp delay-0s');
      $('#imgFromRight').removeClass('remove');
      $('#imgFromRight').addClass('animated fadeInRight delay-0s');
    }
    if(y > 2456){
      $('#phoneBottom').removeClass('remove');
      $('#phoneBottom').addClass('animated fadeInUp delay-0s');
    }
    if(y > 3019){
      $('#text1Left').removeClass('remove');
      $('#text1Left').addClass('animated fadeInLeft delay-0s');
    }
    if(y > 3805){
      $('#textRight').removeClass('remove');
      $('#textRight').addClass('animated fadeInRight delay-0s');
    }
    if(y > 4480){
      $('#text2Left').removeClass('remove');
      $('#text2Left').addClass('animated fadeInLeft delay-0s');
    }
    if(y > 6874){
      $('#howToSend2').removeClass('remove');
      $('#howToSend2').addClass('animated fadeInLeft delay-0s');
      $('#imgHowToSend2').removeClass('remove');
      $('#imgHowToSend2').addClass('animated fadeInRight delay-0s');
    }
    if(y > 470){
      $('#currencies').removeClass('remove');
      $('#currencies').addClass('animated fadeInUp delay-0s');
    }
    if(y > 7113){
      $('#crn1').removeClass('remove');
      $('#crn1').addClass('animated fadeInLeft delay-0s');
      $('#crn2').removeClass('remove');
      $('#crn2').addClass('animated fadeInLeft d1');
      $('#crn3').removeClass('remove');
      $('#crn3').addClass('animated fadeInLeft d2');
      $('#crn4').removeClass('remove');
      $('#crn4').addClass('animated fadeInLeft d3');
      $('#crn5').removeClass('remove');
      $('#crn5').addClass('animated fadeInLeft d4');
      $('#crn6').removeClass('remove');
      $('#crn6').addClass('animated fadeInLeft d5');
      $('#crnImg').removeClass('remove');
      $('#crnImg').addClass('animated fadeInRight d6');
    }
    
  })


  

  //end of animation scroll section 


  // ------------------------------------------------------------------------------ //
  // Contact Form  
  // ------------------------------------------------------------------------------ //

  // var submitContact = $('#submit-message'),
  //   message = $('#msg');

  // submitContact.on('click', function (e) {
  //   e.preventDefault();

  //   var $this = $(this);

  //   $.ajax({
  //     type: "POST",
  //     url: 'contact.php',
  //     dataType: 'json',
  //     cache: false,
  //     data: $('#contact-form').serialize(),
  //     success: function (data) {

  //       if (data.info !== 'error') {
  //         $this.parents('form').find('input[type=text],input[type=email],textarea,select').filter(':visible').val('');
  //         message.hide().removeClass('success').removeClass('error').addClass('success').html(data.msg).fadeIn('slow').delay(5000).fadeOut('slow');
  //       } else {
  //         message.hide().removeClass('success').removeClass('error').addClass('error').html(data.msg).fadeIn('slow').delay(5000).fadeOut('slow');
  //       }
  //     }
  //   });
  // });

})(jQuery);





// ------------------------------------------------------------------------------ //
// Subscribe to mailchimp
// ------------------------------------------------------------------------------ //

function subscribe(e, target) {
  e.preventDefault();
  //Change this link to yours
  var MailchimpUrl = 'https://stibits.us20.list-manage.com/subscribe/post-json?u=9b8ae2c192ba5f583b6475189&amp;id=817f6b8424';
  $('#subscribeButton').addClass('bounceIn');
  var $this = $(target);
  var email = $this.find('input[type=email]').val();
  //TODO::Change alerts by inline message
  if(email === ""){
    alert("Email is empty");
  } else {
    $.ajax({
      type: "GET",
      dataType: 'jsonp',
      data : { EMAIL: encodeURI(email) },
      jsonp: 'c',
      url: MailchimpUrl,
      cache: false,
      success: function (data) {

        console.log(data);

        if (data.result !== 'success') {
          alert(data.msg);
        } else { 
          $('#subscribeMessage').removeClass('hideme');
          $('#subscribeMessage').addClass('show');
          $('#subscribeForm').addClass('hideme');
        }
      },
      error: function(err) {
        alert("Could not connect to the registration server. Please try again later.");
      },

    });
  }

}