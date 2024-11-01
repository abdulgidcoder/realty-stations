// Import Vendors
import $ from "jquery";
import parsley from "parsleyjs";
import dropify from "dropify";

import { Swiper, Pagination, Autoplay, Thumbs, Navigation } from "swiper";

window.$ = $;
window.jQuery = $;
window.parsley = parsley;

/* ------------------------------------------------------------------------- *
 * INIT COMPONENTS
 * ------------------------------------------------------------------------- */
(function ($) {
  function appScript() {
    var rtlPage =
      $("html").attr("dir") == "rtl" || $("html").attr("lang") == "ar"
        ? true
        : false;

    // (function () {
    //   $(".loading").animate(
    //     {
    //       opacity: 1,
    //     },
    //     {
    //       duration: 500,
    //     }
    //   );
    //   setTimeout(function () {
    //     $(".preloader-number").each(function () {
    //       var $this = $(this),
    //         countTo = $this.attr("data-count");
    //       $({
    //         countNum: $this.text(),
    //       }).animate(
    //         {
    //           countNum: countTo,
    //         },
    //         {
    //           duration: 1000,
    //           easing: "swing",
    //           step: function () {
    //             $this.text(Math.floor(this.countNum));
    //           },
    //         }
    //       );
    //     });
    //     $(".bar").animate(
    //       {
    //         height: "100%",
    //       },
    //       {
    //         duration: 1000,
    //         complete: function () {
    //           $(".preloader").addClass("hidden");
    //         },
    //       }
    //     );
    //   }, 400);
    // })();
    // Header
    (function () {
      var header = $(".header"),
        headerOffset = $(".header").offset();

      $(window).on("scroll", function () {
        if (header.length > 0) {
          if ($(window).scrollTop() >= headerOffset.top + 50) {
            header.addClass("sticking");
          } else {
            header.removeClass("sticking");
          }
        }
      });
    })();

    // Menu
    (function () {
      // Open Menu
      $("[data-toggle='menu']").on("click", function (e) {
        e.preventDefault();
        var dataTarget = $(this).data("target");
        $(dataTarget).fadeIn();
        $(dataTarget).addClass("opened");
        if (rtlPage) {
          $(dataTarget + " .app-menu__offcanvas").animate({ right: 0 }, 400);
        } else {
          $(dataTarget + " .app-menu__offcanvas").animate({ left: 0 }, 400);
        }
      });

      // Close Menu
      $("[data-dismiss='menu']").on("click", function (e) {
        e.preventDefault();
        var getMenu = $(this).parents(".app-menu");
        var menuW = getMenu.find(".app-menu__offcanvas").width();
        if (rtlPage) {
          getMenu.find(".app-menu__offcanvas").animate({ right: -menuW }, 400);
        } else {
          getMenu.find(".app-menu__offcanvas").animate({ left: -menuW }, 400);
        }
        getMenu.fadeOut();
        getMenu.removeClass("opened");
      });

      $(".app-menu").on("click", function (e) {
        e.preventDefault();
        var menuW = $(this).find(".app-menu__offcanvas").width();
        if (rtlPage) {
          $(this).find(".app-menu__offcanvas").animate({ right: -menuW }, 400);
        } else {
          $(this).find(".app-menu__offcanvas").animate({ left: -menuW }, 400);
        }
        $(this).fadeOut();
        $(this).removeClass("opened");
      });

      $(document).keydown(function (e) {
        if (e.keyCode == 27) {
          var menuW = $(".app-menu .app-menu__offcanvas").width();
          $(".app-menu .app-menu__offcanvas").animate({ left: -menuW }, 400);
          $(".app-menu").fadeOut();
          $(".app-menu").removeClass("opened");
        }
      });

      // Stop Propagation Menu Offcanvas
      $(".app-menu .app-menu__offcanvas").on("click", function (e) {
        e.stopPropagation();
      });
    })();

    // Modal
    (function () {
      // Open Modal
      $("[data-toggle='modal']").on("click", function (e) {
        e.preventDefault();
        var dataTarget = $(this).data("target");
        $(dataTarget).fadeIn();
        $(dataTarget).addClass("opened");
        $("body").css("overflow", "hidden");
      });

      // Close Modal
      $("[data-dismiss='modal']").on("click", function (e) {
        e.preventDefault();
        var getModal = $(this).parents(".app-modal");
        getModal.fadeOut();
        getModal.removeClass("opened");
        $("body").css("overflow", "auto");
      });

      $("[data-dismiss='form']").on("submit", function (e) {
        // e.preventDefault();
        var getModal = $(this).parents(".app-modal");
        getModal.fadeOut();
        getModal.removeClass("opened");
      });

      $(".app-modal").on("click", function (e) {
        e.preventDefault();
        $(this).fadeOut();
        $(this).removeClass("opened");
        $("body").css("overflow", "auto");
      });

      $(document).on("keydown", function (e) {
        if (e.keyCode == 27) {
          $(".app-modal").fadeOut();
          $(".app-modal").removeClass("opened");
          $("body").css("overflow", "auto");
        }
      });
      // Stop Propagation app-modal Offcanvas
      $(".app-modal .app-modal-container").on("click", function (e) {
        e.stopPropagation();
      });
    })();
    (function () {
      $("[data-form]").on("click", function (e) {
        e.preventDefault();
        var thisELe = $(this).data("form");
        $(this).parents(".app-modal-container").find(".auth-form").hide();
        $(this)
          .parents(".app-modal-container")
          .find("." + thisELe + "-auth-form")
          .show();
      });
    })();

    // Menu dashboard
    (function () {
      // Open Menu
      $(".open-menu-dashboard").on("click", function (e) {
        e.preventDefault();
        $("body").toggleClass("opened-menu");
        $(this).toggleClass("opened");
      });
    })();
  }
  $(function () {
    appScript();
  });
})(jQuery);

window.addEventListener("DOMContentLoaded", function () {
  (function () {
    Swiper.use([Navigation, Pagination, Autoplay]);
    // Property Gallery
    const home = new Swiper(".single-property-gallery .swiper", {
      slidesPerView: 1,
      speed: 800,
      autoplay: {
        delay: 2500,
      },
      pagination: {
        el: ".single-property-gallery .swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: ".single-property-gallery .swiper-button-next",
        prevEl: ".single-property-gallery .swiper-button-prev",
      },
    });

    // Properties Slides
    const properties = new Swiper(".properties-carousal .swiper", {
      speed: 800,
      spaceBetween: 20,
      autoplay: {
        delay: 5000,
      },
      pagination: {
        el: ".properties-carousal .swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: ".properties-carousal .swiper-button-next",
        prevEl: ".properties-carousal .swiper-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      },
    });

    // Partners Slides
    const partners = new Swiper(".partners-section .swiper", {
      speed: 800,
      spaceBetween: 20,
      autoplay: {
        delay: 5000,
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
        },
        480: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        992: {
          slidesPerView: 5,
        },
        1200: {
          slidesPerView: 6,
        },
      },
    });
  })();
  // Form Multi Step
  (function () {
    (function () {
      var Step, Steps;

      Steps = class Steps {
        constructor(div) {
          this.div = div;
          if (this.div){
            this.steps = [...this.div.querySelectorAll(".step")].map((e, i) => {
              return new Step(this.div, e, i);
            });

          }
          this.parsley = $(this.div).parsley();
          this.currentIdx = 0;
          this.setupActions();
          this.toggleButtons();
          return;
        }
        stepDirection(sign) {
          var targIdx;
          targIdx = this.currentIdx + sign;
          if (targIdx < 0 || targIdx > this.steps.length - 1) {
            throw "can't step that far";
          }
          if (this.currentIdx > targIdx) {
            return this.stepTo(targIdx);
          }
          if (this.currentIdx < targIdx) {
            this.parsley = $(this.div).parsley();
            console.log(this.parsley);
            var $this = this;
            this.parsley
              .whenValidate({
                group: "block-" + $this.currentIdx,
              })
              .done(function () {
                // console.log("validation done");
                return $this.stepTo(targIdx);
              });
          }
        }
        stepTo(targIdx) {
          this.steps[this.currentIdx].hideStep();
          this.steps[targIdx].showStep();
          this.currentIdx = targIdx;
          return this.toggleButtons();
        }
        toggleButtons() {
          if (this.actions){
this.actions.prev.disabled = this.currentIdx === 0;
let submitBtn = this.div.querySelector("[data-submit]");
if (this.currentIdx === this.steps.length - 1) {
  submitBtn.style.display = "block";
  this.actions.next.style.display = "none";
} else {
  submitBtn.style.display = "none";
  this.actions.next.style.display = "block";
}
          } 
        }
        setupActions() {
          // console.log(this.div);
          if (this.div){
            this.actions = {
              prev: this.div.querySelector("[data-prev]"),
              next: this.div.querySelector("[data-next]"),
              submit: this.div.querySelector("[data-submit]"),
            };
          this.actions.prev.addEventListener("click", () => {
            return this.stepDirection(-1);
          });
          return this.actions.next.addEventListener("click", () => {
            return this.stepDirection(1);
          });
          return this.actions.submit.addEventListener("click", () => {
            return this.stepDirection(1);
          });
          }
        }
      };

      Step = class Step {
        constructor(parent, el, index) {
          this.parent = parent;
          this.el = el;
          this.index = index;
          this.indicatorWrapper = document.querySelector(".steps__indicators");
          // this.addIndicators();
          this.indicators = document.querySelectorAll(".steps__indicators li");
          $(this.el)
            .find(".form-control, .form-select")
            .attr("data-parsley-group", "block-" + index);
          // $(this.el)
          //   .find("select")
          //   .attr("data-parsley-group", "block-" + index);
        }
        addIndicators() {
          const indicatorListitem = document.createElement("li");
          const indicatorText = document.createTextNode(this.index);
          indicatorListitem.appendChild(indicatorText);
          this.indicatorWrapper.appendChild(indicatorListitem);
        }
        hideStep() {
          this.indicators[this.index].classList.add("btn-secondary");
          this.indicators[this.index].classList.remove("btn-success");
          return (this.el.style.display = "none");
        }
        showStep() {
          const currentEle = this.indicators[this.index];
          const prevEle = currentEle.previousSibling.previousSibling;
          if (prevEle) {
            prevEle.classList.remove("btn-secondary");
            prevEle.classList.add("btn-outline-success");
          }
          currentEle.classList.remove("btn-outline-success");
          currentEle.classList.add("btn-success");
          return (this.el.style.display = "block");
        }
      };
      var ready = function () {
        if (document.readyState != "loading") {
          init();
        } else {
          document.addEventListener("DOMContentLoaded", init());
        }
      };
      var init = function () {
        //return new Steps(document.querySelector(".steps"));
        return new Steps(document.querySelector(".form-wizerd"));
      };
      ready();
    }.call(this));
  })();


  // Dropfiy
  (function(){
    $(".dropify").dropify();
  })();
});
