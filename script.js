
// function hideLoadingScreen() {
//   const loadingScreen = document.querySelector('.loadingscreen');
//   loadingScreen.style.display = 'none';
// }

window.addEventListener('load', function () {
  // Hide the loading screen after the page has fully loaded
  const loadingScreen = document.querySelector('.loadingscreen');
  loadingScreen.style.display = 'none';
})
// Hide the loading screen after the page has fully loaded

let menuToggle = document.querySelector('.navbar');
let menuToggleBtn = document.querySelector('.menu-expand-btn');
// let menuCollapsIcon = document.querySelector('#menuCollapsIcon');
menuToggleBtn.addEventListener('click', () => {
  menuToggle.classList.toggle('navbar-expand')
  if (menuToggle.classList.contains('navbar-expand')) {
    // menuCollapsIcon.src = 'icons\close.png'
    document.getElementById('menuCollapsIcon').src = "icons/close (1).png"
    document.getElementById('menuCollapsIcon').style.filter = "invert(1)";
  }
  else {
    // menuCollapsIcon.src = 'icons\hamburger.png'
    document.getElementById('menuCollapsIcon').src = "icons/menu (2).png"

    document.getElementById('menuCollapsIcon').style.filter = "invert(0)";

  }
})

// navbar hide****************
let navbarLinks = document.querySelectorAll(".navbar-links");
let navCollapse = document.querySelector(".navbar-collaps");
navbarLinks.forEach(function (a) {
  a.addEventListener("click", function () {
    navCollapse.classList.remove("navbar-expand");
    if (!menuToggle.classList.contains('navbar-expand'))
      document.getElementById('menuCollapsIcon').style.filter = "invert(0)";

    document.getElementById('menuCollapsIcon').src = "icons/menu (2).png"
  })
})

// navbar hide****************






var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('a');

document.addEventListener('mousemove', function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function () {
  cursor.classList.add('click');
  cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function () {
  cursor.classList.remove('click')
  cursorinner.classList.remove('cursorinnerhover')
});

a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
})


// ********************active sections********************

const sections = document.querySelectorAll(".slide");
const navLinks = document.querySelectorAll(".navbar-links");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
// ********************active sections********************


// ****************text change animation***************

var words = ['Full Stack Web Developer', 'UI/UX Designer'],
  part,
  i = 0,
  offset = 0,
  len = words.length,
  forwards = true,
  skip_count = 0,
  skip_delay = 70,
  speed = 30;
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    $('.word').text(part);
  }, speed);
};

// $(document).ready(function () {
//   wordflick();
// });



// ****************text change animation***************

