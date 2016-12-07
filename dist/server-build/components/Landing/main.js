/* global location:true */

const loadMainPage = ($, videoURL) => {
  $(document).ready(function () {
    // jQuery scrolling
    $('a[href*="#"]:not([href="#"])').click(function () {
      if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
        var target = $(this.hash)
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000)
          return false
        }
      }
    })

      // Open Video
    $('.icon-videoplay').on('click', function () {
      $('#about-video-player').fadeIn()
      return $('#about-video-player').append(`<iframe src="/assets/img/mcd.mp4" frameborder="0", allowfullscreen=""></iframe>`)
    })

    // Close Video
    $('#about-video-player').on('click', function () {
      $('#about-video-player').fadeOut()
      return $('#about-video-player iframe').detach()
    })

    var windowHeight = $(window).height()

    // Fade-in scroll
    $(window).scroll(function () {
      if ($(window).scrollTop() > 50) {
        $('.icon-bar').addClass('icon-bar-dark')
        $('.navbar').addClass('navbar-fixed-top')
        $('.nav-dropdown').addClass('nav-dropdown-dark')
      } else {
        $('.icon-bar').removeClass('icon-bar-dark')
        $('.navbar').removeClass('navbar-fixed-top')
        $('.nav-dropdown').removeClass('nav-dropdown-dark')
      }

      // Fade In Elements
      $('.fadeIn').each(function (i) {
        var thisPos = $(this).offset().top
        var topOfWindow = $(window).scrollTop()
        // var bottom_of_window = $(window).scrollTop() + $(window).height()
        /* If the object is completely visible in the window, fade it it */
        if (topOfWindow + windowHeight - 200 > thisPos) {
          $(this).addClass('fade-slide')
          $(this).animate({ 'opacity': '1' }, 500)
        }
      })
    })
    // Hover show about information
    $('.abt').hover(
        function () {
          $('.abt-hover').css('visibility', 'hidden')
          var className = '.' + $(this).attr('class').split(' ')[1] + '-t'
          $(className).fadeIn()
        },
        function () {
          $('.abt-txt').hide()
          $('.abt-hover').css('visibility', 'visible')
        }
      )
  })

  // JavaScript code
  var elms = document.getElementsByClassName('abt-cha')
  var n = elms.length

  function changeColor (value) {
    for (var i = 0; i < n; i++) {
      elms[i].setAttribute('style', '-webkit-filter:grayscale(' + value + '%)')
    }
  }
  for (var i = 0; i < n; i++) {
    elms[i].onmouseover = function () {
      changeColor(0)
    }
    elms[i].onmouseout = function () {
      changeColor(100)
    }
  }
}

export default loadMainPage
