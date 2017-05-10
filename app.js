document.addEventListener('DOMContentLoaded', () => {

  console.log('script loaded');

  //                    variables
  // let dropDownSched = document.querySelector('.circle-sched i');
  let dropDownSched = document.querySelectorAll('.circle-sched i');
  // let detailsP = document.querySelector('.details-p');
  // let eventDiv = document.querySelector('.event');
  let day1 = document.getElementById('day1');
  let day2 = document.getElementById('day2');
  let day3 = document.getElementById('day3');

  console.log('dropDownSched: ', dropDownSched);

  for (let i = 0; i< dropDownSched.length; i++){
    let clickSched = 0;
    let eventDiv = dropDownSched[i].parentNode.parentNode.parentNode.parentNode
    let detailsP = eventDiv.childNodes[3].childNodes[5]
    dropDownSched[i].addEventListener('click', () => {
      if (clickSched%2 === 0){
        dropDownSched[i].classList.remove('down-arrow');
        dropDownSched[i].classList.add('up-arrow');
        clickSched++;
        console.log('eventDiv.childNodes[3].childNodes[5]: ', eventDiv.childNodes[3].childNodes[5]);

        detailsP.classList.remove('inactive');
        detailsP.classList.add('active');


        eventDiv.setAttribute("style", "height:200px;background-color:#00ACE9;color:#FFFFFF;border:none");

      } else {
        dropDownSched[i].classList.remove('up-arrow');
        dropDownSched[i].classList.add('down-arrow');
        clickSched++;

        detailsP.classList.remove('active');
        detailsP.classList.add('inactive');

        eventDiv.setAttribute("style", "height:120px;background-color:#FFFFFF; color:#5C5C5C;border:2px solid #25D432");
      }

    }) //close dropDownSched click event

  }


  //                   click events

  // let clickSched = 0;
  // dropDownSched.addEventListener('click', () => {

  //   if (clickSched%2 === 0){
  //     dropDownSched.classList.remove('down-arrow');
  //     dropDownSched.classList.add('up-arrow');
  //     clickSched++;
  //     detailsP.classList.remove('inactive');
  //     detailsP.classList.add('active');

  //     eventDiv.setAttribute("style", "height:200px;background-color:#00ACE9;color:#FFFFFF;border:none");

  //   } else {
  //     dropDownSched.classList.remove('up-arrow');
  //     dropDownSched.classList.add('down-arrow');
  //     clickSched++;
  //     detailsP.classList.remove('active');
  //     detailsP.classList.add('inactive');

  //     eventDiv.setAttribute("style", "height:120px;background-color:#FFFFFF; color:#5C5C5C;border:2px solid #25D432");

  //   }
  // }) // closes dropDownSched





  day1.addEventListener('click', ()=> {
    day1.classList.add('tab-active');
    day2.classList.remove('tab-active');
    day3.classList.remove('tab-active');
  });

  day2.addEventListener('click', ()=> {
    day2.classList.add('tab-active');
    day1.classList.remove('tab-active');
    day3.classList.remove('tab-active');
  })

 day3.addEventListener('click', ()=> {
    day3.classList.add('tab-active');
    day2.classList.remove('tab-active');
    day1.classList.remove('tab-active');
  })







});
