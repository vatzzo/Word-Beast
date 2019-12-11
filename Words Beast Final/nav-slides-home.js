//GET BURGER
const burger = document.querySelector('.burger');
//GET NAVIGATION OPTIONS INACTIVE
const navOptions = document.querySelector('.nav-options-inactive');
burger.addEventListener('click', () => {
  navOptions.classList.toggle('nav-options-active');
  navOptions.style.transition = '0.5s linear';
});
