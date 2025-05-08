window.onload = function() {
    // Use $ instead of $(".swiper") to properly select the element
    $(".swiper").append(`<div class="swiper-pagination"></div>`);

    // Initialize Swiper after the DOM is loaded
    const swiper1 = new Swiper(".swiper1", {
      // your Swiper configuration options here
      direction: "horizontal",
      loop: false,
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 20,
      centeredSlides: true,
      centeredSlidesBounds: true,
      initialSlide: 1,
      slideToClickedSlide: true,
      autoplay: {
        delay: 5000,
      },
      mousewheel: {
        forceToAxis: true,
      },
      speed: 300,
      breakpoints: {
        480: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        992: {
          slidesPerView: 1.5,
        },
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
      },
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
      },
    });
  };


  $(document).ready(function () {
    $('#skip-link').on('click keydown', function(e) {
      if (e.type === "keydown" && e.which !== 13) {
          return;
      }

      e.preventDefault();
      var target = $('#main');
      target.attr('tabindex', '-1');
      target.focus();
    });
  });

  function toggleWhite() {
    // Add classes to .carousel_2, .carousel_3, and .carousel_4
    document.querySelectorAll('.carousel_2 .breadcrump-wrap, .carousel_3 .breadcrump-wrap, .carousel_4 .breadcrump-wrap').forEach(wrap => {
      wrap.classList.add('is--white');
      wrap.querySelector('.breadcrump-icon.is--white').classList.add('is--top');
    });
  
    // Remove classes from .carousel_1
    const carousel1Wrap = document.querySelector('.carousel_1 .breadcrump-wrap');
    if (carousel1Wrap) {
      carousel1Wrap.classList.remove('is--white');
      const carousel1Icon = carousel1Wrap.querySelector('.breadcrump-icon.is--white.is--top');
      if (carousel1Icon) {
        carousel1Icon.classList.remove('is--top');
      }
    }
  }
  
  // Call this function whenever you need to update the classes
  toggleWhite();
  
  
  
  
  document.addEventListener('DOMContentLoaded', function() { 
      document.querySelector('.carousel-financial').addEventListener('click', function(event) {
          let clickedElement = event.target;
  
          if (findAncestorWithClass(clickedElement, 'carousel_2')) {
              applySwaps([
                  ['.carousel_2', 'carousel_1'],
                  ['.carousel_1', 'carousel_4'],
                  ['.carousel_3', 'carousel_2'],
                  ['.carousel_4', 'carousel_3']
              ]);
          } else if (findAncestorWithClass(clickedElement, 'carousel_4')) {
              applySwaps([
                  ['.carousel_4', 'carousel_1'],
                  ['.carousel_1', 'carousel_2'],
                  ['.carousel_2', 'carousel_3'],
                  ['.carousel_3', 'carousel_4']
              ]);
          };
          toggleWhite();
          
      });
      
      // Start of swipe detection code
      let startX = 0;
  
      document.querySelector('.carousel-financial').addEventListener('touchstart', function(event) {
          startX = event.touches[0].clientX;
      });
  
      document.querySelector('.carousel-financial').addEventListener('touchend', function(event) {
          let endX = event.changedTouches[0].clientX;
  
          let difference = endX - startX;
          const threshold = 10; 
  
          if (difference < -threshold) {
              applySwaps([
                  ['.carousel_2', 'carousel_1'],
                  ['.carousel_1', 'carousel_4'],
                  ['.carousel_3', 'carousel_2'],
                  ['.carousel_4', 'carousel_3']
              ]);
          } else if (difference > threshold) {
              applySwaps([
                  ['.carousel_1', 'carousel_2'],
                  ['.carousel_2', 'carousel_3'],
                  ['.carousel_3', 'carousel_4'],
                  ['.carousel_4', 'carousel_1']
              ]);
          }
          toggleWhite();        
      });    
      
  
      function applySwaps(swaps) {
          const classChanges = [];
  
          swaps.forEach(swap => {
              const [fromSelector, toClass] = swap;
              const fromEl = document.querySelector(fromSelector);
              classChanges.push([fromEl, toClass]);
          });
  
          classChanges.forEach(change => {
              const [el, newClass] = change;
              replaceCarouselClass(el, newClass);
          });
      }
  
      function replaceCarouselClass(element, newClass) {
          element.className = element.className.replace(/carousel_\d/g, '').trim();
          element.classList.add(newClass);
      }
  
      function findAncestorWithClass(el, className) {
          while (el && el !== document.querySelector('.carousel-financial')) {
              if (el.classList.contains(className)) {
                  return el;
              }
              el = el.parentElement;
          }
          return null;
      }
  });
  
  
  /////////////////////
  
  // Confetti financial left and right, and for mobile - center
  // This was changed - the center confetti is the only one now.
  
  (async () => {
    //const canvasL = document.getElementById("confetti-left");
    //const canvasR = document.getElementById("confetti-right");
    const canvasC = document.getElementById("confetti-center");
  
    // Function to check if the current device is a desktop
    function isDesktop() {
        return window.innerWidth > 1024;  // Assuming desktop width starts from 1025px
    }
  
    canvasC.confetti = canvasC.confetti || (await confetti.create(canvasC, { resize: true }));
  
  
    function launchConfettiC() {
      if (isDesktop()) {
        canvasC.confetti({
            angle: 90,
            spread: 50,
            origin: { y: 0.3, x: 0.5 }, // Center of the canvas
            startVelocity: 30,
            shapes: ['square', 'circle'],
            colors: ['#FFCC00', '#FF005C', '#00CCFF'],
            particleCount: 5,
        });
      } else {
        canvasC.confetti({
          angle: 90,
          spread: 40,
          origin: { y: 0.2, x: 0.5 }, // Center of the canvas
          startVelocity: 15,
          shapes: ['square', 'circle'],
          colors: ['#FFCC00', '#FF005C', '#00CCFF'],
          particleCount: 5,
      });
      }
    }
  
    if (isDesktop()) {
        setInterval(() => {
            //launchConfettiL();
            //launchConfettiR();
            launchConfettiC();
        }, 100);
    } else {
        setInterval(launchConfettiC, 200);
    }
  })();
  
  
  ///////////////////////
  
  // Status dots for mobile
  // Function to update dot colors based on the element with class 'carousel_1'
  function updateDots() {
    const activeElement = document.querySelector('.carousel-financial__card.carousel_1');
    const dots = document.querySelectorAll('.carousel-dot');
    
    // First, set all dots to transparent
    dots.forEach(dot => dot.classList.remove('is--active'));
  
    if (activeElement) {
      // Get the carousel-order attribute from the active element
      const order = activeElement.getAttribute('carousel-order');
  
      // Use the order to find the corresponding dot and set its background to a horizontal gradient
      if (order && dots[order - 1]) {
        dots[order - 1].classList.add('is--active');
      }
    }
  }
  
  // Call the function initially and whenever any container's class changes
  updateDots();
  
  // Observer to watch for class changes
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === "attributes" && (mutation.attributeName === "class" || mutation.attributeName === "carousel-order")) {
        updateDots();
      }
    });
  });
  
  // Monitor each container for class and carousel-order attribute changes
  document.querySelectorAll('.carousel-financial__card').forEach(container => {
    observer.observe(container, {
      attributes: true,
      attributeFilter: ['class', 'carousel-order'],
    });
  });
  

  const toggleBtn = document.getElementById("menuToggle");
  const customMenu = document.getElementById("customMenu");
  const closeBtn = document.getElementById("closeMenu");

  toggleBtn.addEventListener("click", () => {
    customMenu.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    customMenu.classList.remove("active");
  });

  jarallax(document.querySelectorAll(".jarallax"));

      jarallax(document.querySelectorAll(".jarallax-keep-img"), {
        keepImg: true,
      });

      const dot = document.querySelector('.cursor-dot');
const outline = document.querySelector('.cursor-outline');

let mouseX = 0, mouseY = 0;
let currentX = 0, currentY = 0;
const delay = 0.15;

function animateCursor() {
  // Smooth motion for outer circle
  currentX += (mouseX - currentX) * delay;
  currentY += (mouseY - currentY) * delay;

  // Direct follow for dot
  dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  outline.style.transform = `translate(${currentX}px, ${currentY}px)`;

  requestAnimationFrame(animateCursor);
}

window.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

animateCursor();



window.addEventListener('load', function () {
  setTimeout(() => {
    document.querySelector('.loader-wrapper').style.display = 'none';
    document.querySelector('.main-content').style.display = 'block';
  }, 2000); // 2 seconds
});