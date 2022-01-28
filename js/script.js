function addRailEventListeners() {
  document.querySelectorAll('.package-details-summary-container').forEach(item => {
    console.log(item)
    console.log('#' + item.id + ' + .package-details-dropdown-rail')
    document.querySelector('#'+item.id + ' + .package-details-dropdown-rail').addEventListener('click', event => {
      if(!item.classList.contains('open')) {
        item.classList.add('opening');
      }
      //item.classList.add('closing');
    })
  })
}

window.addEventListener('DOMContentLoaded', (event) => {
    addRailEventListeners();
});