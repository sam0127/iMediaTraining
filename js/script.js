function addMobileNavEventListener() {
  //Add event listener for mobile nav button
  const navbarMobile = document.querySelector('.navbar-mobile');
  const navbarContainer = document.querySelector('.navbar-container');
  navbarMobile.addEventListener('click', function () {
    if(navbarMobile.classList.contains('open')) {
      navbarMobile.classList.remove('open');
      navbarContainer.classList.remove('nav-open');
      navbarContainer.classList.add('nav-close');
    } else {
      navbarMobile.classList.add('open');
      navbarContainer.classList.add('nav-open');
      navbarContainer.classList.remove('nav-close');
    }
  })
}

function addRailEventListeners() {
  //for each package detail container, add event listener for dropdown rail
  document.querySelectorAll('.package-details-summary-container').forEach(item => {
    document.querySelector('#'+item.id + ' + .package-details-dropdown-rail').addEventListener('click', event => {
      if(!item.classList.contains('summary-open')) {
        item.classList.remove('summary-close');
        item.classList.add('summary-open');
        item.querySelector('.dropdown-topline').style.visibility = "visible";
      } else {
        item.classList.add('summary-close');
        item.classList.remove('summary-open');
        item.querySelector('.dropdown-topline').style.visibility = "hidden";
      }
    })
  })
}


function addJSBreakpoints() {
  const windowWidth = window.innerWidth;

  //for tablet, stack info section
  let infoSection = document.querySelector('.info-section');
  if(windowWidth <= 1200) {
    infoSection.classList.remove('d-flex');
  } else {
    if(!infoSection.classList.contains('d-flex')) {
      infoSection.classList.add('d-flex');
    }
  }

  //for mobile, hide nav and show open nav button
  let navbar = document.querySelector('.navbar-container');
  if(windowWidth <= 800) {
    if(!navbar.classList.contains('nav-open')) {
      navbar.classList.add('nav-close');
    }
  } else {
    if(navbar.classList.contains('nav-open')) {
      navbar.classList.remove('nav-open');
    } else if(navbar.classList.contains('nav-close')) {
      navbar.classList.remove('nav-close');
    }
  }
}

function addResizeEventListeners() {
  //call breakpoints on window resize for testing purposes
  window.addEventListener('resize', function () {
    addJSBreakpoints();
  })
}

window.addEventListener('DOMContentLoaded', (event) => {
    addRailEventListeners();
    addMobileNavEventListener();
    addJSBreakpoints();
    addResizeEventListeners();
});