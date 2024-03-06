$(document).ready(function () {
  $('.header__burger').click(function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active')
      $('.drop-menu').removeClass('active')
      $('body').removeClass('active')
    } else {
      $(this).addClass('active')
      $('.drop-menu').addClass('active')
      $('body').addClass('active')
    }
  })

  $('.drop-menu__strong').click(function () {
    $('body').removeClass('active')
    $('.drop-menu').removeClass('active')
    $('.header__burger').removeClass('active')
  })

  $(document).on('click', function (e) {
    if (!$(e.target).closest('.header__burger, .drop-menu').length) {
      $('.drop-menu').removeClass('active')
      $('body').removeClass('active')
      $('.header__burger').removeClass('active')
    }
    e.stopPropagation()
  })

  $('.prepared__header').click(function () {
    if ($(this).hasClass('active')) {
      $(this).toggleClass('active')
      $(this).removeClass('active')
      $(this).next().slideUp(300)
    } else {
      $('.prepared__header').removeClass('active')
      $('.prepared__body').slideUp(300)
      $(this).toggleClass('active')
      $(this).next().slideToggle(300)
    }
  })

  $('.simplify__head').click(function () {
    if ($(window).width() <= 767) {
      if ($(this).hasClass('active')) {
        $(this).toggleClass('active')
        $(this).removeClass('active')
        $(this).next().slideUp(300)
      } else {
        $('.simplify__head').removeClass('active')
        $('.simplify__images').slideUp(300)
        $(this).toggleClass('active')
        $(this).next().slideToggle(300)
      }
    } else {
      return false
    }
  })

  $('.step__header').click(function () {
    if ($(window).width() <= 767) {
      if ($(this).hasClass('active')) {
        $(this).toggleClass('active')
        $(this).removeClass('active')
        $(this).next().slideUp(300)
      } else {
        $('.step__header').removeClass('active')
        $('.step__body').slideUp(300)
        $(this).toggleClass('active')
        $(this).next().slideToggle(300)
      }
    } else {
      return false
    }
  })

  $('.faq__header').click(function () {
    if ($(this).hasClass('active')) {
      $(this).toggleClass('active')
      $(this).removeClass('active')
      $(this).next().slideUp(300)
    } else {
      $('.faq__header').removeClass('active')
      $('.faq__body').slideUp(300)
      $(this).toggleClass('active')
      $(this).next().slideToggle(300)
    }
  })

  var oldScrollY = 0
  var div = document.querySelector('.header')

  window.addEventListener('scroll', function () {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop
    var dY = scrolled - oldScrollY

    if (dY < 0) {
      div.classList.add('fixed')
    } else {
      div.classList.remove('fixed')
    }

    oldScrollY = scrolled
  })

  $(window).scroll(function () {
    var sc = $(window).scrollTop()
    if (sc > 150) {
      $('.header').addClass('dop')
    } else {
      $('.header').removeClass('dop')
    }
  })

  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $('.footer__arrow').fadeIn(500)
    } else {
      $('.footer__arrow').fadeOut(500)
    }
  })
  $('.footer__arrow').click(function (event) {
    event.preventDefault()
    $('html, body').animate({ scrollTop: 0 }, 500)
  })

  $('.equipment__back').on('click', function () {
    var $el = $(this),
      id = $el.attr('href')

    $('html, body').animate(
      {
        scrollTop: $(id).offset().top - 120,
      },
      500
    )

    return false
  })

  $('.go-partners').on('click', function () {
    var $el = $(this),
      id = $el.attr('href')

    $('html, body').animate(
      {
        scrollTop: $(id).offset().top - 60,
      },
      500
    )

    return false
  })

  $('.advantages__circle').click(function () {
    let itemNumber = $(this).attr('data-circle')
    if ($(this).hasClass('active')) {
      $(this).removeClass('active')
      $(`[data-goal="${itemNumber}"]`).fadeOut(300)
    } else {
      $(this).addClass('active')
      $(`[data-goal="${itemNumber}"]`).fadeIn(300)
    }
    setTimeout(() => {
      let visibleBlock = $('.advantages .goal__block:visible').length
      if (visibleBlock > 0) {
        $('.advantages__title').fadeIn(300)
        $('.advantages__equipment').addClass('active')
      } else {
        $('.advantages__title').fadeOut(300)
        $('.advantages__equipment').removeClass('active')
      }
    }, 310)
  })

  function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('element-show')
      }
    })
  }
  let options = { threshold: [0.5] }
  let observer = new IntersectionObserver(onEntry, options)
  let elements = document.querySelectorAll('.element-animation')
  for (let elm of elements) {
    observer.observe(elm)
  }

  function onEntry2(entry) {
    entry.forEach(change => {
      setTimeout(() => {
        if (change.isIntersecting) {
          change.target.classList.add('element-show')
        }
      }, 300)
    })
  }
  let options2 = { threshold: [0.5] }
  let observer2 = new IntersectionObserver(onEntry2, options2)
  let elements2 = document.querySelectorAll('.element-animation-2')
  for (let elm of elements2) {
    observer2.observe(elm)
  }

  function onEntry3(entry) {
    entry.forEach(change => {
      setTimeout(() => {
        if (change.isIntersecting) {
          change.target.classList.add('element-show')
        }
      }, 600)
    })
  }
  let options3 = { threshold: [0.5] }
  let observer3 = new IntersectionObserver(onEntry3, options3)
  let elements3 = document.querySelectorAll('.element-animation-3')
  for (let elm of elements3) {
    observer3.observe(elm)
  }

  function onEntry4(entry) {
    entry.forEach(change => {
      setTimeout(() => {
        if (change.isIntersecting) {
          change.target.classList.add('element-show')
        }
      }, 900)
    })
  }
  let options4 = { threshold: [0.5] }
  let observer4 = new IntersectionObserver(onEntry4, options4)
  let elements4 = document.querySelectorAll('.element-animation-4')
  for (let elm of elements4) {
    observer4.observe(elm)
  }

  $('.product-slider__blocks').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    arrows: true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  })

  $('.prepared__tabs-first .prepared__tab').click(function () {
    $('.prepared__tabs-first .prepared__tab').removeClass('active')
    $(this).addClass('active')
    if ($('.prepared__tabs-first .prepared__tab-buy').hasClass('active')) {
      $('.prepared__amount-1').each(function () {
        let itemBuy = $(this).attr('data-buy')
        $(this).html(itemBuy)
      })
    }
    if ($('.prepared__tabs-first .prepared__tab-arenda').hasClass('active')) {
      $('.prepared__amount-1').each(function () {
        let itemBuy = $(this).attr('data-arenda')
        $(this).html(itemBuy)
      })
    }
  })

  $('.prepared__tabs-second .prepared__tab').click(function () {
    $('.prepared__tabs-second .prepared__tab').removeClass('active')
    $(this).addClass('active')

    if ($('.prepared__tabs-second .prepared__tab-buy').hasClass('active')) {
      $('.prepared__amount-2').each(function () {
        let itemBuy = $(this).attr('data-buy')
        $(this).html(itemBuy)
      })
    }
    if ($('.prepared__tabs-second .prepared__tab-arenda').hasClass('active')) {
      $('.prepared__amount-2').each(function () {
        let itemBuy = $(this).attr('data-arenda')
        $(this).html(itemBuy)
      })
    }
  })

  $('.prepared__tabs-third .prepared__tab').click(function () {
    $('.prepared__tabs-third .prepared__tab').removeClass('active')
    $(this).addClass('active')

    if ($('.prepared__tabs-third .prepared__tab-buy').hasClass('active')) {
      $('.prepared__amount-3').each(function () {
        let itemBuy = $(this).attr('data-buy')
        $(this).html(itemBuy)
      })
    }
    if ($('.prepared__tabs-third .prepared__tab-arenda').hasClass('active')) {
      $('.prepared__amount-3').each(function () {
        let itemBuy = $(this).attr('data-arenda')
        $(this).html(itemBuy)
      })
    }
  })

  $('[data-tabs-type]').on('click', function () {
    if (!$(this).hasClass('active')) {
      var index2 = $(this).index()
      $(this).addClass('active').siblings().removeClass('active')
      $('[data-tabs-typecontent]').hide().eq(index2).fadeIn()
    }
    return false
  })

  $('[data-tabs-type-2]').on('click', function () {
    if (!$(this).hasClass('active')) {
      var index2 = $(this).index()
      $(this).addClass('active').siblings().removeClass('active')
      $('[data-tabs-typecontent-2]').hide().eq(index2).fadeIn()
    }
    return false
  })

  $('[data-tabs-type-3]').on('click', function () {
    if (!$(this).hasClass('active')) {
      var index2 = $(this).index()
      $(this).addClass('active').siblings().removeClass('active')
      $('[data-tabs-typecontent-3]').hide().eq(index2).fadeIn()
    }
    return false
  })

  $('[data-tabs-type-4]').on('click', function () {
    if (!$(this).hasClass('active')) {
      var index2 = $(this).index()
      $(this).addClass('active').siblings().removeClass('active')
      $('[data-tabs-typecontent-4]').hide().eq(index2).fadeIn()
    }
    return false
  })

  $('.form-consult').on('submit', function (e) {
    e.preventDefault()
    const $form = $(this)
    $.ajax({
      type: 'POST',
      url: 'mail.php',
      data: $form.serialize(),
    }).done(function () {
      $('.thanks-btn').trigger('click')
      $('.form-consult').find('input').val('')
    })
  })

  $('.modal-present').on('submit', function (e) {
    e.preventDefault()
    const $form = $(this)
    $.ajax({
      type: 'POST',
      url: 'mail.php',
      data: $form.serialize(),
    }).done(function () {
      $('.thanks-btn').trigger('click')
      $('.modal-present').find('input').val('')
    })
  })

  $('.modal-consult').on('submit', function (e) {
    e.preventDefault()
    const $form = $(this)
    $.ajax({
      type: 'POST',
      url: 'mail.php',
      data: $form.serialize(),
    }).done(function () {
      $('.thanks-btn').trigger('click')
      $('.modal-consult').find('input').val('')
    })
  })

  $('.modal-zakaz-form').on('submit', function (e) {
    e.preventDefault()
    let activeTab = $('.modal__tab.active').html()
    $('#type-zakaz').val(activeTab)
    const $form = $(this)
    $.ajax({
      type: 'POST',
      url: 'mail.php',
      data: $form.serialize(),
    }).done(function () {
      $('.thanks-btn').trigger('click')
      $('.modal-zakaz').find('input').val('')
    })
  })

  $('.modal__tab').click(function () {
    $('.modal__tab').removeClass('active')
    $(this).addClass('active')
  })

  $('.prepared-main .prepared__pick-first .prepared__btn').click(function () {
    let tabActive = $('.prepared__pick-first .prepared__tab.active').html()
    let height = $('.prepared__amount-1').eq(0).html()
    let width = $('.prepared__amount-1').eq(2).html()
    let long = $('.prepared__amount-1').eq(3).html()
    let img = $('.prepared__photo').eq(0).find('img').attr('src')
    let nameZakaz = $('.prepared__photo').eq(0).attr('data-name')
    $('#visota').html(height)
    $('#shirina').html(width)
    $('#dlina').html(long)
    $('#modal-zakaz .modal__img img').attr('src', img)
    $('#name-zakaz').val(nameZakaz)
    if (tabActive == 'Покупка') {
      $('.modal__tab').removeClass('active')
      $('.modal__tab').eq(0).addClass('active')
    } else {
      $('.modal__tab').removeClass('active')
      $('.modal__tab').eq(1).addClass('active')
    }
  })

  $('.prepared-main .prepared__pick-second .prepared__btn').click(function () {
    let tabActive = $('.prepared__pick-second .prepared__tab.active').html()
    let height = $('.prepared__amount-2').eq(0).html()
    let width = $('.prepared__amount-2').eq(2).html()
    let long = $('.prepared__amount-2').eq(3).html()
    let img = $('.prepared__photo').eq(1).find('img').attr('src')
    let nameZakaz = $('.prepared__photo').eq(1).attr('data-name')
    $('#visota').html(height)
    $('#shirina').html(width)
    $('#dlina').html(long)
    $('#modal-zakaz .modal__img img').attr('src', img)
    $('#name-zakaz').val(nameZakaz)
    if (tabActive == 'Покупка') {
      $('.modal__tab').removeClass('active')
      $('.modal__tab').eq(0).addClass('active')
    } else {
      $('.modal__tab').removeClass('active')
      $('.modal__tab').eq(1).addClass('active')
    }
  })

  $('.prepared-main .prepared__pick-third .prepared__btn').click(function () {
    let tabActive = $('.prepared__pick-third .prepared__tab.active').html()
    let height = $('.prepared__amount-3').eq(0).html()
    let width = $('.prepared__amount-3').eq(2).html()
    let long = $('.prepared__amount-3').eq(3).html()
    let img = $('.prepared__photo').eq(2).find('img').attr('src')
    let nameZakaz = $('.prepared__photo').eq(2).attr('data-name')
    $('#visota').html(height)
    $('#shirina').html(width)
    $('#dlina').html(long)
    $('#modal-zakaz .modal__img img').attr('src', img)
    $('#name-zakaz').val(nameZakaz)
    if (tabActive == 'Покупка') {
      $('.modal__tab').removeClass('active')
      $('.modal__tab').eq(0).addClass('active')
    } else {
      $('.modal__tab').removeClass('active')
      $('.modal__tab').eq(1).addClass('active')
    }
  })

  $('.prepared__btn-1').click(function () {
    let tabActive = $('.prepared__tabs-mobile-1 .prepared__tab.active').html()
    let visibleBlock = $('.prepared__blocks:visible')
    let height = visibleBlock.find('.prepared__amount').eq(1).html()
    let width = visibleBlock.find('.prepared__amount').eq(3).html()
    let long = visibleBlock.find('.prepared__amount').eq(4).html()
    let img = $('.prepared__photo').eq(0).find('img').attr('src')
    let nameZakaz = $('.prepared__photo').eq(0).attr('data-name')
    $('#visota').html(height)
    $('#shirina').html(width)
    $('#dlina').html(long)
    $('#modal-zakaz .modal__img img').attr('src', img)
    $('#name-zakaz').val(nameZakaz)
    if (tabActive == 'Покупка') {
      $('.modal__tab').removeClass('active')
      $('.modal__tab').eq(0).addClass('active')
    } else {
      $('.modal__tab').removeClass('active')
      $('.modal__tab').eq(1).addClass('active')
    }
  })

  $('.prepared__btn-2').click(function () {
    let tabActive = $('.prepared__tabs-mobile-2 .prepared__tab.active').html()
    let visibleBlock = $('.prepared__blocks:visible')
    let height = visibleBlock.find('.prepared__amount').eq(1).html()
    let width = visibleBlock.find('.prepared__amount').eq(3).html()
    let long = visibleBlock.find('.prepared__amount').eq(4).html()
    let img = $('.prepared__photo').eq(1).find('img').attr('src')
    let nameZakaz = $('.prepared__photo').eq(1).attr('data-name')
    $('#visota').html(height)
    $('#shirina').html(width)
    $('#dlina').html(long)
    $('#modal-zakaz .modal__img img').attr('src', img)
    $('#name-zakaz').val(nameZakaz)
    if (tabActive == 'Покупка') {
      $('.modal__tab').removeClass('active')
      $('.modal__tab').eq(0).addClass('active')
    } else {
      $('.modal__tab').removeClass('active')
      $('.modal__tab').eq(1).addClass('active')
    }
  })

  $('.prepared__btn-3').click(function () {
    let tabActive = $('.prepared__tabs-mobile-3 .prepared__tab.active').html()
    let visibleBlock = $('.prepared__blocks:visible')
    let height = visibleBlock.find('.prepared__amount').eq(1).html()
    let width = visibleBlock.find('.prepared__amount').eq(3).html()
    let long = visibleBlock.find('.prepared__amount').eq(4).html()
    let img = $('.prepared__photo').eq(2).find('img').attr('src')
    let nameZakaz = $('.prepared__photo').eq(2).attr('data-name')
    $('#visota').html(height)
    $('#shirina').html(width)
    $('#dlina').html(long)
    $('#modal-zakaz .modal__img img').attr('src', img)
    $('#name-zakaz').val(nameZakaz)
    if (tabActive == 'Покупка') {
      $('.modal__tab').removeClass('active')
      $('.modal__tab').eq(0).addClass('active')
    } else {
      $('.modal__tab').removeClass('active')
      $('.modal__tab').eq(1).addClass('active')
    }
  })

  $('.prepared-second').click(function () {
    let tabActive = $('.startup.product.product-second .prepared__tab.active').html()
    if (tabActive == 'Покупка') {
      $('.modal__tab').removeClass('active')
      $('.modal__tab').eq(0).addClass('active')
    } else {
      $('.modal__tab').removeClass('active')
      $('.modal__tab').eq(1).addClass('active')
    }
  })

  window.onload = function () {
    document.body.classList.add('loaded')
  }
 
  setTimeout(function () {
    $('body').addClass('loaded')
  }, 3500)
})
