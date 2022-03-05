
let menuBtn = document.querySelector('.menu-btn');
let navList = document.querySelector('.nav-list');

function toggleMenuBtn () {
  console.log('close');
  menuBtn.classList.toggle ('active');
  navList.classList.toggle ('active');

menuBtn.addEventListener ( 'click' , toggleMenuBtn);


}






