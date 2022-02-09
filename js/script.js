function addRailEventListeners() {
  document.querySelectorAll('.package-details-summary-container').forEach(item => {
    console.log(item)
    console.log('#' + item.id + ' + .package-details-dropdown-rail')
    document.querySelector('#'+item.id + ' + .package-details-dropdown-rail').addEventListener('click', event => {
      if(!item.classList.contains('open')) {
        item.classList.remove('close');
        item.classList.add('open');
        item.querySelector('.dropdown-topline').style.visibility = "visible";
      } else {
        item.classList.add('close');
        item.classList.remove('open');
        item.querySelector('.dropdown-topline').style.visibility = "hidden";
      }
    })
  })
}


function addJSBreakpoints() {
  const windowWidth = window.innerWidth;

  if(windowWidth > 1700) {

  } else if (windowWidth > 1500) {
      
  } else if (windowWidth > 1200) {

  } else if (windowWidth > 800) {

  } else {

  }
}

function addResizeEventListeners() {
  window.addEventListener('resize', function () {
    addJSBreakpoints();
  })
}

window.addEventListener('DOMContentLoaded', (event) => {
    addRailEventListeners();
    addJSBreakpoints();
    addResizeEventListeners();
});