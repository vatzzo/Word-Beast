//GET BURGER
const burger = document.querySelector('.burger');
//GET NAVIGATION OPTIONS INACTIVE
const navOptions = document.querySelector('.nav-options-inactive');
//ADD EVENT LISTENER WITH => FUNCTION
burger.addEventListener('click', () => {
  navOptions.classList.toggle('nav-options-active');
  navOptions.style.transition = '0.5s linear';
  //hide if open
  animationOptions.className = 'animation-options-inactive';
  //remove/show
  animBtnIA.classList.toggle('animation-options-btn-inactive-remove');
});

//GET ANIMATION OPTIONS BTN INACTIVE
const animBtnIA = document.querySelector('.animation-options-btn-inactive');

//GET ANIMATION OPTIONS BTN ACTIVE
const animBtnA = document.querySelector('.animation-options-btn-active');

//GET ANIMATION OPTIONS INACTIVE
const animationOptions = document.querySelector('.animation-options-inactive');

//GET ANIMATION OPTIONS CONTAINER
const animationOptionsContainer = document.querySelector('.animation-options-container');

//ADD EVENT LISTENER WITH => FUNCTION
animBtnIA.addEventListener('click', () => {
  animationOptions.className = 'animation-options-active';
  animationOptions.style.transition = '0.5s linear';
  //Slow options appearing
  animationOptionsContainer.className = 'animation-options-container-active';
});

//ADD EVENT LISTENER WITH => FUNCTION
animBtnA.addEventListener('click', () => {
  animationOptions.className = 'animation-options-inactive';
  //Slow options fadeing
  animationOptionsContainer.className = 'animation-options-container';
});

//GET ON-OFF BUTTON--------------------------
const onOffBtn = document.querySelector('.on-off-btn');

//ADD EVENT - CHANGE STYLE
onOffBtn.addEventListener('click', () => {
  if(onOffBtn.textContent.length === 3) {
    onOffBtn.textContent = 'ON';
  }else{
    onOffBtn.textContent = "OFF";
  };
  onOffBtn.classList.toggle('on-off-btn-active');
});
