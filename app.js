document.addEventListener('DOMContentLoaded', () => {

console.log('script loaded');

// variables
let dropDownSched = document.querySelector('.circle-sched i');
let detailsP = document.querySelector('.details-p');
let eventDiv = document.querySelector('.event');

// click events
let clickSched = 0;
dropDownSched.addEventListener('click', () => {

  if (clickSched%2 === 0){
    dropDownSched.classList.remove('down-arrow');
    dropDownSched.classList.add('up-arrow');
    clickSched++;
    detailsP.classList.remove('inactive');
    detailsP.classList.add('active');

    eventDiv.setAttribute("style", "height:160px;background-color:#00ACE9;color:#FFFFFF;border:none");

  } else {
    dropDownSched.classList.remove('up-arrow');
    dropDownSched.classList.add('down-arrow');
    clickSched++;
    detailsP.classList.remove('active');
    detailsP.classList.add('inactive');

    eventDiv.setAttribute("style", "height:120px;background-color:#00ACE9;color:#FFFFFF;border:none");

  }

})








});
