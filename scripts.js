$('.main__button-collapse').on('click', collapseGraph);
$('.main__button-show').on('click', collapseGraph);
$('.nav__button-hamburger').on('click', asideToggle);
$('.aside__link-categorie').on('click', markBox);

var blah = true;

function collapseGraph() {
  console.log('working');
  if (blah === true) {
    blah = false;
    $('.main__section-graphs').hide();
    $('.main__button-collapse').hide();
    $('.main__button-show').show();
  } else {
    blah = true;
    $('.main__section-graphs').show();
    $('.main__button-collapse').show();
    $('.main__button-show').hide();
  }
}

function asideToggle() {
  if($('.aside').css('display') === "none") {
    expandAside();
  } else {
    collapseAside();
  }
}

function collapseAside() {
  $('.aside').hide();
  $('.nav').css({ "grid-column-start": "1"})
  $('.header').css({ "grid-column-start": "1"})
  $('.main').css({ "grid-column-start": "1"})
}

function expandAside() {
  $('.aside').show();
  $('.nav').css({ "grid-column-start": "2"})
  $('.header').css({ "grid-column-start": "2"})
  $('.main').css({ "grid-column-start": "2"})
}

function markBox(event) {
  event.preventDefault();
  $(this).children().toggleClass('icon-ok-squared');
}