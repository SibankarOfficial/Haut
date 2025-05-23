
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
    // document.querySelector('.main-content').style.display = 'block';
  }, 3000); // 2 seconds
});


$(document).ready(function() {
  var words = [
    "Weekend",
    "night",
    "crew",
    "city",
    "entrance",
    "experience"
  ];
  var index = 0;
  var $word = $('.animated-word');
  var interval = 1800; // ms

  setInterval(function() {
    // Animate out
    $word.addClass('word-out');
    setTimeout(function() {
      // Change word
      index = (index + 1) % words.length;
      $word.text(words[index]);
      // Animate in
      $word.removeClass('word-out').addClass('word-in');
      setTimeout(function() {
        $word.removeClass('word-in');
      }, 400);
    }, 400);
  }, interval);
});

AOS.init();

   // tabs
        // --------------------------------------------------
        jQuery('.de_tab').find('.de_tab_content > div').hide();
        jQuery('.de_tab').find('.de_tab_content > div:first').show();
        jQuery('li').find('.v-border').fadeTo(150, 0);
        jQuery('li.active').find('.v-border').fadeTo(150, 1);

        jQuery('.de_nav li').click(function () {
            jQuery(this).parent().find('li').removeClass("active");
            jQuery(this).addClass("active");
            jQuery(this).parent().parent().find('.v-border').fadeTo(150, 0);
            jQuery(this).parent().parent().find('.de_tab_content > div').hide();

            var indexer = jQuery(this).index(); //gets the current index of (this) which is #nav li
            jQuery(this).parent().parent().find('.de_tab_content > div:eq(' + indexer + ')').fadeIn(); //uses whatever index the link has to open the corresponding box 
            jQuery(this).find('.v-border').fadeTo(150, 1);
        });


  //        const wrapper = document.querySelector(".word-wrapper");
  // const words = wrapper.querySelectorAll(".word");

  // let currentIndex = 0;

  // function updateWidth() {
  //   const currentWord = words[currentIndex];
  //   wrapper.style.width = currentWord.offsetWidth + "px";

  //   currentIndex = (currentIndex + 1) % words.length;
  // }

  // // Initial set
  // window.addEventListener("load", () => {
  //   updateWidth();
  //   setInterval(updateWidth, 3000); // match animation-delay interval (3s)
  // });

    const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  const btn = dropdown.querySelector(".dropdown-btn");
  const content = dropdown.querySelector(".dropdown-content");

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    closeAllDropdowns();
    content.style.display = "flex";
  });
});

window.addEventListener("click", () => {
  closeAllDropdowns();
});

function closeAllDropdowns() {
  document.querySelectorAll(".dropdown-content").forEach((el) => {
    el.style.display = "none";
  });
}

// City search filter
document.querySelector(".city-search").addEventListener("input", function () {
  const filter = this.value.toLowerCase();
  const items = this.parentElement.querySelectorAll(".dropdown-item");
  items.forEach((item) => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(filter) ? "block" : "none";
  });
});