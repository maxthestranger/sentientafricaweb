/**
 * Sentient Africa - Software & Creative Agency
 *
 * @author maxthestranger (https://www.maxthestranger.com/)
 * @version 1.2.1
 **/

/* ===================
Table Of Content
======================
01 PRELOADER
02 CUSTOM CURSOR
03 MEGA MENU
04 STICKY HEADER
05 TINY SLIDER
06 PARALLAX BACKGROUND
07 MARQUEE ANIMATION
08 AOS ANIMATION
09 TILT ANIMATION
10 STICKY BAR
11 FORM VALIDATION
12 TOOLTIP
13 POPOVER
14 BACK TO TOP
15 STICKY FOOTER
16 GLIGHTBOX
17 ACTIVE CLASS
18 TYPING TEXT ANIMATION
19 ISOTOPE
====================== */

"use strict";
!(function () {
  (window.Element.prototype.removeClass = function () {
    let className =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
      selectors = this;
    if (!(selectors instanceof HTMLElement) && selectors !== null) {
      selectors = document.querySelector(selectors);
    }
    if (this.isVariableDefined(selectors) && className) {
      selectors.classList.remove(className);
    }
    return this;
  }),
    (window.Element.prototype.addClass = function () {
      let className =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        selectors = this;
      if (!(selectors instanceof HTMLElement) && selectors !== null) {
        selectors = document.querySelector(selectors);
      }
      if (this.isVariableDefined(selectors) && className) {
        selectors.classList.add(className);
      }
      return this;
    }),
    (window.Element.prototype.toggleClass = function () {
      let className =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        selectors = this;
      if (!(selectors instanceof HTMLElement) && selectors !== null) {
        selectors = document.querySelector(selectors);
      }
      if (this.isVariableDefined(selectors) && className) {
        selectors.classList.toggle(className);
      }
      return this;
    }),
    (window.Element.prototype.isVariableDefined = function () {
      return !!this && typeof this != "undefined" && this != null;
    });
})();

var e = {
  init: function () {
    // e.customCursor(),
    e.megaMenu(),
      e.stickyHeader(),
      e.tinySlider(),
      e.parallaxBG(),
      e.marqueeAnimate(),
      e.aosFunc(),
      e.tiltAnimation(),
      e.stickyBar(),
      e.formValidation(),
      e.toolTipFunc(),
      e.popOverFunc(),
      e.backTotop(),
      e.stickyFooter(),
      e.lightBox(),
      e.activeClass(),
      e.typeText(),
      e.enableIsotope();
  },
  isVariableDefined: function (el) {
    return typeof !!el && el != "undefined" && el != null;
  },
  getParents: function (el, selector, filter) {
    const result = [];
    const matchesSelector =
      el.matches ||
      el.webkitMatchesSelector ||
      el.mozMatchesSelector ||
      el.msMatchesSelector;

    // match start from parent
    el = el.parentElement;
    while (el && !matchesSelector.call(el, selector)) {
      if (!filter) {
        if (selector) {
          if (matchesSelector.call(el, selector)) {
            return result.push(el);
          }
        } else {
          result.push(el);
        }
      } else {
        if (matchesSelector.call(el, filter)) {
          result.push(el);
        }
      }
      el = el.parentElement;
      if (e.isVariableDefined(el)) {
        if (matchesSelector.call(el, selector)) {
          return el;
        }
      }
    }
    return result;
  },
  getNextSiblings: function (el, selector, filter) {
    let sibs = [];
    let nextElem = el.parentNode.firstChild;
    const matchesSelector =
      el.matches ||
      el.webkitMatchesSelector ||
      el.mozMatchesSelector ||
      el.msMatchesSelector;
    do {
      if (nextElem.nodeType === 3) continue; // ignore text nodes
      if (nextElem === el) continue; // ignore elem of target
      if (nextElem === el.nextElementSibling) {
        if (!filter || filter(el)) {
          if (selector) {
            if (matchesSelector.call(nextElem, selector)) {
              return nextElem;
            }
          } else {
            sibs.push(nextElem);
          }
          el = nextElem;
        }
      }
    } while ((nextElem = nextElem.nextSibling));
    return sibs;
  },
  on: function (selectors, type, listener) {
    document.addEventListener("DOMContentLoaded", () => {
      if (!(selectors instanceof HTMLElement) && selectors !== null) {
        selectors = document.querySelector(selectors);
      }
      selectors.addEventListener(type, listener);
    });
  },
  onAll: function (selectors, type, listener) {
    document.addEventListener("DOMContentLoaded", () => {
      document.querySelectorAll(selectors).forEach((element) => {
        if (type.indexOf(",") > -1) {
          let types = type.split(",");
          types.forEach((type) => {
            element.addEventListener(type, listener);
          });
        } else {
          element.addEventListener(type, listener);
        }
      });
    });
  },
  removeClass: function (selectors, className) {
    if (!(selectors instanceof HTMLElement) && selectors !== null) {
      selectors = document.querySelector(selectors);
    }
    if (e.isVariableDefined(selectors)) {
      selectors.removeClass(className);
    }
  },
  removeAllClass: function (selectors, className) {
    if (e.isVariableDefined(selectors) && selectors instanceof HTMLElement) {
      document.querySelectorAll(selectors).forEach((element) => {
        element.removeClass(className);
      });
    }
  },
  toggleClass: function (selectors, className) {
    if (!(selectors instanceof HTMLElement) && selectors !== null) {
      selectors = document.querySelector(selectors);
    }
    if (e.isVariableDefined(selectors)) {
      selectors.toggleClass(className);
    }
  },
  toggleAllClass: function (selectors, className) {
    if (e.isVariableDefined(selectors) && selectors instanceof HTMLElement) {
      document.querySelectorAll(selectors).forEach((element) => {
        element.toggleClass(className);
      });
    }
  },
  addClass: function (selectors, className) {
    if (!(selectors instanceof HTMLElement) && selectors !== null) {
      selectors = document.querySelector(selectors);
    }
    if (e.isVariableDefined(selectors)) {
      selectors.addClass(className);
    }
  },
  select: function (selectors) {
    return document.querySelector(selectors);
  },
  selectAll: function (selectors) {
    return document.querySelectorAll(selectors);
  },

  // START: 01 Preloader
  // preLoader: function () {
  //     window.onload = function () {
  //         var preloader = e.select('.preloader');
  //         if (e.isVariableDefined(preloader)) {
  //             preloader.className += ' animate__animated animate__fadeOut';
  //             setTimeout(function(){
  //                 preloader.style.display = 'none';
  //             }, 200);
  //         }
  //     };
  // },
  // END: Preloader

  // START: 02 Custom Cursor
  // customCursor: function () {
  //     var c = e.select(".cursor-dot");
  //     if (e.isVariableDefined(c)) {
  //         var cursor = {
  //             delay: 8,
  //             _x: 0,
  //             _y: 0,
  //             endX: (window.innerWidth / 2),
  //             endY: (window.innerHeight / 2),
  //             cursorVisible: true,
  //             cursorEnlarged: false,
  //             $dot: e.select('.cursor-dot'),
  //             $outline: e.select('.cursor-dot-outline'),
  //
  //             init: function() {
  //                 // Set up element sizes
  //                 this.dotSize = this.$dot.offsetWidth;
  //                 this.outlineSize = this.$outline.offsetWidth;
  //
  //                 this.setupEventListeners();
  //                 this.animateDotOutline();
  //             },
  //
  //             updateCursor: function(e) {
  //                 var self = this;
  //
  //                 console.log(e)
  //
  //                 // Show the cursor
  //                 self.cursorVisible = true;
  //                 self.toggleCursorVisibility();
  //
  //                 // Position the dot
  //                 self.endX = e.clientX;
  //                 self.endY = e.clientY;
  //                 self.$dot.style.top = self.endY + 'px';
  //                 self.$dot.style.left = self.endX + 'px';
  //             },
  //
  //             setupEventListeners: function() {
  //                 var self = this;
  //
  //                 // Reposition cursor on window load
  //                 window.addEventListener('load', (event) => {
  //                     self.cursorEnlarged = false;
  //                     self.toggleCursorSize();
  //                 });
  //
  //                 // Anchor hovering
  //                 e.selectAll('a, button').forEach(function(el) {
  //                     el.addEventListener('mouseover', function() {
  //                         self.cursorEnlarged = true;
  //                         self.toggleCursorSize();
  //                     });
  //                     el.addEventListener('mouseout', function() {
  //                         self.cursorEnlarged = false;
  //                         self.toggleCursorSize();
  //                     });
  //                 });
  //
  //                 // Click events
  //                 document.addEventListener('mousedown', function() {
  //                     self.cursorEnlarged = true;
  //                     self.toggleCursorSize();
  //                 });
  //                 document.addEventListener('mouseup', function() {
  //                     self.cursorEnlarged = false;
  //                     self.toggleCursorSize();
  //                 });
  //
  //
  //                 document.addEventListener('mousemove', function(e) {
  //                     // Show the cursor
  //                     self.cursorVisible = true;
  //                     self.toggleCursorVisibility();
  //
  //                     // Position the dot
  //                     self.endX = e.clientX;
  //                     self.endY = e.clientY;
  //                     self.$dot.style.top = self.endY + 'px';
  //                     self.$dot.style.left = self.endX + 'px';
  //                 });
  //
  //                 // Hide/show cursor
  //                 document.addEventListener('mouseenter', function(e) {
  //                     self.cursorVisible = true;
  //                     self.toggleCursorVisibility();
  //                     self.$dot.style.opacity = 1;
  //                     self.$outline.style.opacity = 1;
  //                 });
  //
  //                 document.addEventListener('mouseleave', function(e) {
  //                     self.cursorVisible = true;
  //                     self.toggleCursorVisibility();
  //                     self.$dot.style.opacity = 0;
  //                     self.$outline.style.opacity = 0;
  //                 });
  //             },
  //
  //             animateDotOutline: function() {
  //                 var self = this;
  //
  //                 self._x += (self.endX - self._x) / self.delay;
  //                 self._y += (self.endY - self._y) / self.delay;
  //                 self.$outline.style.top = self._y + 'px';
  //                 self.$outline.style.left = self._x + 'px';
  //
  //                 requestAnimationFrame(this.animateDotOutline.bind(self));
  //             },
  //
  //             toggleCursorSize: function() {
  //                 var self = this;
  //
  //                 if (self.cursorEnlarged) {
  //                     self.$dot.style.transform = 'translate(-50%, -50%) scale(0.75)';
  //                     self.$outline.style.transform = 'translate(-50%, -50%) scale(1.6)';
  //                 } else {
  //                     self.$dot.style.transform = 'translate(-50%, -50%) scale(1)';
  //                     self.$outline.style.transform = 'translate(-50%, -50%) scale(1)';
  //                 }
  //             },
  //
  //             toggleCursorVisibility: function() {
  //                 var self = this;
  //
  //                 if (self.cursorVisible) {
  //                     self.$dot.style.opacity = 1;
  //                     self.$outline.style.opacity = 1;
  //                 } else {
  //                     self.$dot.style.opacity = 0;
  //                     self.$outline.style.opacity = 0;
  //                 }
  //             }
  //         }
  //         cursor.init();
  //     }
  // },
  // END: Custom Cursor

  // START: 03 Mega Menu
  megaMenu: function () {
    e.onAll(
      ".dropdown-menu a.dropdown-item.dropdown-toggle",
      "click",
      function (event) {
        var element = this;
        event.preventDefault();
        event.stopImmediatePropagation();
        if (
          e.isVariableDefined(element.nextElementSibling) &&
          !element.nextElementSibling.classList.contains("show")
        ) {
          const parents = e.getParents(element, ".dropdown-menu");
          e.removeClass(parents.querySelector(".show"), "show");
          if (e.isVariableDefined(parents.querySelector(".dropdown-opened"))) {
            e.removeClass(
              parents.querySelector(".dropdown-opened"),
              "dropdown-opened"
            );
          }
        }
        var $subMenu = e.getNextSiblings(element, ".dropdown-menu");
        e.toggleClass($subMenu, "show");
        $subMenu.previousElementSibling.toggleClass("dropdown-opened");
        var parents = e.getParents(element, "li.nav-item.dropdown.show");
        if (e.isVariableDefined(parents) && parents.length > 0) {
          e.on(parents, "hidden.bs.dropdown", function (event) {
            e.removeAllClass(".dropdown-submenu .show");
          });
        }
      }
    );
  },
  // END: Mega Menu

  // START: 04 Sticky Header
  stickyHeader: function () {
    var stickyNav = e.select(".navbar-sticky");
    if (e.isVariableDefined(stickyNav)) {
      var stickyHeight = stickyNav.offsetHeight;
      stickyNav.insertAdjacentHTML("afterend", '<div id="sticky-space"></div>');
      var stickySpace = e.select("#sticky-space");
      if (e.isVariableDefined(stickySpace)) {
        document.addEventListener("scroll", function (event) {
          var scTop = window.pageYOffset || document.documentElement.scrollTop;
          if (scTop >= 400) {
            stickySpace.addClass("active");
            e.select("#sticky-space.active").style.height = stickyHeight + "px";
            stickyNav.addClass("navbar-sticky-on");
          } else {
            stickySpace.removeClass("active");
            stickySpace.style.height = "0px";
            stickyNav.removeClass("navbar-sticky-on");
          }
        });
      }
    }
  },
  // END: Sticky Header

  // START: 05 Tiny Slider
  tinySlider: function () {
    var $carousel = e.select(".tiny-slider-inner");
    if (e.isVariableDefined($carousel)) {
      var tnsCarousel = e.selectAll(".tiny-slider-inner");
      tnsCarousel.forEach((slider) => {
        var slider1 = slider;
        var sliderMode = slider1.getAttribute("data-mode")
          ? slider1.getAttribute("data-mode")
          : "carousel";
        var sliderAxis = slider1.getAttribute("data-axis")
          ? slider1.getAttribute("data-axis")
          : "horizontal";
        var sliderSpace = slider1.getAttribute("data-gutter")
          ? slider1.getAttribute("data-gutter")
          : 30;
        var sliderEdge = slider1.getAttribute("data-edge")
          ? slider1.getAttribute("data-edge")
          : 0;

        var sliderItems = slider1.getAttribute("data-items")
          ? slider1.getAttribute("data-items")
          : 4; //option: number (items in all device)
        var sliderItemsXl = slider1.getAttribute("data-items-xl")
          ? slider1.getAttribute("data-items-xl")
          : Number(sliderItems); //option: number (items in 1200 to end )
        var sliderItemsLg = slider1.getAttribute("data-items-lg")
          ? slider1.getAttribute("data-items-lg")
          : Number(sliderItemsXl); //option: number (items in 992 to 1199 )
        var sliderItemsMd = slider1.getAttribute("data-items-md")
          ? slider1.getAttribute("data-items-md")
          : Number(sliderItemsLg); //option: number (items in 768 to 991 )
        var sliderItemsSm = slider1.getAttribute("data-items-sm")
          ? slider1.getAttribute("data-items-sm")
          : Number(sliderItemsMd); //option: number (items in 576 to 767 )
        var sliderItemsXs = slider1.getAttribute("data-items-xs")
          ? slider1.getAttribute("data-items-xs")
          : Number(sliderItemsSm); //option: number (items in start to 575 )

        var sliderSpeed = slider1.getAttribute("data-speed")
          ? slider1.getAttribute("data-speed")
          : 500;
        var sliderautoWidth = slider1.getAttribute("data-autowidth") === "true"; //option: true or false
        var sliderArrow = slider1.getAttribute("data-arrow") !== "false"; //option: true or false
        var sliderDots = slider1.getAttribute("data-dots") !== "false"; //option: true or false

        var sliderAutoPlay = slider1.getAttribute("data-autoplay") !== "false"; //option: true or false
        var sliderAutoPlayTime = slider1.getAttribute("data-autoplaytime")
          ? slider1.getAttribute("data-autoplaytime")
          : 4000;
        var sliderHoverPause =
          slider1.getAttribute("data-hoverpause") === "true"; //option: true or false
        var sliderLoop = slider1.getAttribute("data-loop") !== "false"; //option: true or false
        var sliderRewind = slider1.getAttribute("data-rewind") === "true"; //option: true or false
        var sliderAutoHeight =
          slider1.getAttribute("data-autoheight") === "true"; //option: true or false
        var sliderfixedWidth =
          slider1.getAttribute("data-fixedwidth") === "true"; //option: true or false
        var sliderTouch = slider1.getAttribute("data-touch") !== "false"; //option: true or false
        var sliderDrag = slider1.getAttribute("data-drag") !== "false"; //option: true or false
        // Check if document DIR is RTL
        var ifRtl = document
          .getElementsByTagName("html")[0]
          .getAttribute("dir");
        var sliderDirection;
        if (ifRtl === "rtl") {
          sliderDirection = "rtl";
        }

        var tnsSlider = tns({
          container: slider,
          mode: sliderMode,
          axis: sliderAxis,
          gutter: sliderSpace,
          edgePadding: sliderEdge,
          speed: sliderSpeed,
          autoWidth: sliderautoWidth,
          controls: sliderArrow,
          nav: sliderDots,
          autoplay: sliderAutoPlay,
          autoplayTimeout: sliderAutoPlayTime,
          autoplayHoverPause: sliderHoverPause,
          autoplayButton: false,
          autoplayButtonOutput: false,
          controlsPosition: top,
          navPosition: top,
          autoplayPosition: top,
          controlsText: [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>',
          ],
          loop: sliderLoop,
          rewind: sliderRewind,
          autoHeight: sliderAutoHeight,
          fixedWidth: sliderfixedWidth,
          touch: sliderTouch,
          mouseDrag: sliderDrag,
          arrowKeys: true,
          items: sliderItems,
          textDirection: sliderDirection,
          responsive: {
            0: {
              items: Number(sliderItemsXs),
            },
            576: {
              items: Number(sliderItemsSm),
            },
            768: {
              items: Number(sliderItemsMd),
            },
            992: {
              items: Number(sliderItemsLg),
            },
            1200: {
              items: Number(sliderItemsXl),
            },
          },
        });
      });
    }
  },
  // END: Tiny Slider

  // START: 06 Parallax Background
  parallaxBG: function () {
    var parBG = e.select(".bg-parallax");
    if (e.isVariableDefined(parBG)) {
      jarallax(e.selectAll(".bg-parallax"), {
        speed: 0.6,
      });
    }
  },
  // END: Parallax Background

  // START: 07 Marquee Animation
  marqueeAnimate: function () {
    var m = e.select(".marquee-animation-wrapper");
    if (e.isVariableDefined(m)) {
      var marquee = e.selectAll(".marquee-animation");
      marquee.forEach((el) => {
        var marqueeParent = e.select(".marquee-animation-wrapper");
        marqueeParent.addEventListener(
          "mouseover",
          function () {
            el.addClass("hover");
          },
          false
        );

        marqueeParent.addEventListener(
          "mouseout",
          function () {
            el.removeClass("hover");
          },
          false
        );
      });
    }
  },
  // END: Marquee Animation

  // START: 08 AOS Animation
  aosFunc: function () {
    var aos = e.select(".aos");
    if (e.isVariableDefined(aos)) {
      AOS.init({
        duration: 500,
        easing: "ease-out-quart",
        once: true,
      });
    }
  },
  // END: AOS Animation

  // START: 09 Tilt Animation
  tiltAnimation: function () {
    var tilt = e.select(".tilt-animation");
    if (e.isVariableDefined(tilt)) {
      VanillaTilt.init(e.selectAll(".tilt-animation"), {
        max: 10, // max tilt rotation (degrees)
        perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
        easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
        scale: 1, // 2 = 200%, 1.5 = 150%, etc..
        speed: 300, // Speed of the enter/exit transition.
        transition: true, // Set a transition on enter/exit.
        axis: null, // What axis should be disabled. Can be X or Y.
        reset: true, // If the tilt effect has to be reset on exit.
        glare: false, // Enables glare effect
        maxGlare: 1, // From 0 - 1.
      });
    }
  },
  // END: Tilt Animation

  // START: 10 Sticky Bar
  stickyBar: function () {
    var stickyBar = e.select("[data-sticky]");
    if (e.isVariableDefined(stickyBar)) {
      var sticky = new Sticky("[data-sticky]");
    }
  },
  // END: Sticky Bar

  // START: 11 Form Validation
  formValidation: function () {
    var formV = e.select(".needs-validation");
    if (e.isVariableDefined(formV)) {
      window.addEventListener(
        "load",
        function () {
          // Fetch all the forms we want to apply custom Bootstrap validation styles to
          var forms = document.querySelectorAll(".needs-validation");

          // Loop over them and prevent submission
          Array.prototype.slice.call(forms).forEach(function (form) {
            form.addEventListener(
              "submit",
              function (event) {
                if (!form.checkValidity()) {
                  event.preventDefault();
                  event.stopPropagation();
                }

                form.classList.add("was-validated");
              },
              false
            );
          });
        },
        false
      );
    }
  },
  // END: Form Validation

  // START: 12 Tooltip
  // Enable tooltips everywhere via data-toggle attribute
  toolTipFunc: function () {
    var tooltipTriggerList = [].slice.call(
      e.selectAll('[data-bs-toggle="tooltip"]')
    );
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  },
  // END: Tooltip

  // START: 13 Popover
  // Enable popover everywhere via data-toggle attribute
  popOverFunc: function () {
    var popoverTriggerList = [].slice.call(
      e.selectAll('[data-bs-toggle="popover"]')
    );
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl);
    });
  },
  // END: Popover

  // START: 14 Back to Top
  backTotop: function () {
    var scrollpos = window.scrollY;
    var backBtn = e.select(".back-top");
    if (e.isVariableDefined(backBtn)) {
      var add_class_on_scroll = () => backBtn.addClass("back-top-show");
      var remove_class_on_scroll = () => backBtn.removeClass("back-top-show");

      window.addEventListener("scroll", function () {
        scrollpos = window.scrollY;
        if (scrollpos >= 500) {
          add_class_on_scroll();
        } else {
          remove_class_on_scroll();
        }
      });

      backBtn.addEventListener("click", () =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      );
    }
  },
  // END: Back to Top

  // START: 15 Sticky Footer
  stickyFooter: function () {
    var fixedFooter = e.select(".footer-sticky");
    if (e.isVariableDefined(fixedFooter)) {
      window.addEventListener("load", function () {
        window.dispatchEvent(new Event("resize"));
      });
      window.addEventListener("resize", function (event) {
        var screenWidth = window.outerWidth;
        var footerHeight = fixedFooter.offsetHeight - 1;
        if (screenWidth >= 768) {
          document.getElementsByTagName("main")[0].style.marginBottom =
            footerHeight + "px";
        }
      });
    }
  },
  // END: Sticky Footer

  // START: 16 GLightbox
  lightBox: function () {
    var light = e.select("[data-glightbox]");
    if (e.isVariableDefined(light)) {
      var lb = GLightbox({
        selector: "*[data-glightbox]",
        openEffect: "fade",
        closeEffect: "fade",
      });
    }
  },
  // END: GLightbox

  // START: 17 Active class
  activeClass: function () {
    var currentPath = window.location.pathname;
    var path = currentPath.split("/").pop();

    var d = e.select(".navbar-nav .dropdown");
    if (e.isVariableDefined(d)) {
      var hTarget = e.select(
        '.navbar-nav li.nav-item.dropdown a.dropdown-item[href="' + path + '"]'
      );

      if (e.isVariableDefined(hTarget)) {
        var hh = hTarget.getAttribute("href");

        if (path === hh) {
          hTarget.classList.add("active");

          var hParent = e
            .select(".navbar-nav li.nav-item.dropdown a.active.dropdown-item")
            .closest(".nav-item.dropdown").children[0];
          hParent.classList.add("active");

          var sm = e
            .select(".navbar-nav li.nav-item.dropdown a.active.dropdown-item")
            .closest(".dropdown-submenu");

          if (e.isVariableDefined(sm)) {
            var smParent = sm.children[0];
            smParent.classList.add("active");
          }
        }
      }
    }
  },
  // END: Active class

  // START: 18 Typing Text Animation
  typeText: function () {
    var t = e.select(".typed");
    if (e.isVariableDefined(t)) {
      var type = e.selectAll(".typed");
      type.forEach((el) => {
        var strings = el.getAttribute("data-type-text");
        var split_strings = strings.split("&&");
        var typespeed = el.getAttribute("data-speed")
          ? el.getAttribute("data-speed")
          : 200;
        var typeBackSpeed = el.getAttribute("data-back-speed")
          ? el.getAttribute("data-back-speed")
          : 50;

        ityped.init(el, {
          strings: split_strings,
          showCursor: true,
          typeSpeed: typespeed,
          backSpeed: typeBackSpeed,
        });
      });
    }
  },
  // END: Typing Text Animation

  // START: 19 Isotope
  enableIsotope: function () {
    var isGridItem = e.select(".grid-item");
    if (e.isVariableDefined(isGridItem)) {
      // Code only for normal Grid
      var onlyGrid = e.select("[data-isotope]");
      if (e.isVariableDefined(onlyGrid)) {
        var allGrid = e.selectAll("[data-isotope]");
        allGrid.forEach((gridItem) => {
          var gridItemData = gridItem.getAttribute("data-isotope");
          var gridItemDataObj = JSON.parse(gridItemData);
          var iso = new Isotope(gridItem, {
            itemSelector: ".grid-item",
            layoutMode: gridItemDataObj.layoutMode,
          });

          imagesLoaded(gridItem).on("progress", function () {
            // layout Isotope after each image loads
            iso.layout();
          });
        });
      }

      // Code only for normal Grid
      var onlyGridFilter = e.select(".grid-menu");
      if (e.isVariableDefined(onlyGridFilter)) {
        var filterMenu = e.selectAll(".grid-menu");
        filterMenu.forEach((menu) => {
          var filterContainer = menu.getAttribute("data-target");
          var a = menu.dataset.target;
          var b = e.select(a);
          var filterContainerItemData = b.getAttribute("data-isotope");
          var filterContainerItemDataObj = JSON.parse(filterContainerItemData);
          var filter = new Isotope(filterContainer, {
            itemSelector: ".grid-item",
            transitionDuration: "0.7s",
            layoutMode: filterContainerItemDataObj.layoutMode,
          });

          var menuItems = menu.querySelectorAll("li a");
          menuItems.forEach((menuItem) => {
            menuItem.addEventListener("click", function (event) {
              var filterValue = menuItem.getAttribute("data-filter");
              filter.arrange({ filter: filterValue });
              menuItems.forEach((control) => control.removeClass("active"));
              menuItem.addClass("active");
            });
          });

          imagesLoaded(filterContainer).on("progress", function () {
            filter.layout();
          });
        });
      }
    }
  },
  // END: Isotope
};
e.init();
