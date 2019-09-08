(function ($) {

  //
  // Header and mobile menu
  //

  const $header = $(".header"),
      $headerBurger = $(".header__burger"),
      $mobileMenuCover = $(".mobile-menu-cover")

  var firstHeaderLoad = true;

  function toggleMobileMenu() {
    $header.toggleClass("header--mobile-menu");
    $headerBurger.toggleClass("btn--cross");
    $("body").toggleClass("overflow-hidden");
    $mobileMenuCover.fadeToggle(280);
  }

  $headerBurger.on("click", toggleMobileMenu);
  $mobileMenuCover.on("click", toggleMobileMenu);

  //
  // Accordion
  //

  $(".accordion__title").on("click", function () {
    $(this).parent().toggleClass("accordion--open");
  });

  //
  // Tabs
  //

  $("[data-active-tab]").on("click", function () {
    var idTab = $(this).data("active-tab");

    $("[data-active-tab]").removeClass("tabs__item--active");
    $(this).addClass("tabs__item--active");

    $("[data-tab]").removeClass("active");
    $("[data-tab=" + idTab + "]").addClass("active");
  });

  $(document).on('keyup', function(evt) {
    if ( (evt.keyCode || evt.which) === 27 ) {
      $('.aside_dropdown').removeClass('open');
    }
  });


})(jQuery);

