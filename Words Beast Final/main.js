class Pointer {
  constructor(x, y, dx, dy, width, height, color, method, speed, lineHeight) {
    this.x = x;
    this.y = y;
    this.xo = x;
    this.yo = y;
    this.dx = dx;
    this.dy = dy;
    this.dxo = dx;
    this.dyo = dy;
    this.width = width;
    this.height = height;
    this.color = color;
    this.method = method;
    this.speed = speed;
    this.lineHeight = lineHeight;
    this.i = 1;
  }

  draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  animate(){
      const textToScroll = document.getElementById('uploaded-text');
        switch (this.method) {
        case 1:
          this.draw();
          this.x += this.dx * (this.speed*0.4);
          if(this.x >= canvas.width){
            this.x = 0;
            this.y += this.lineHeight;
          };

          if(this.y >= canvas.height && textToScroll.scrollHeight >= 0.95 * window.innerHeight * this.i) {
            this.x = this.xo;
            this.y = this.yo;
            textToScroll.scrollTo(0, 0.9 * window.innerHeight * this.i);
            this.i++;
          }


          break;
        case 2:
          this.draw();
          this.x += this.dx * (this.speed*0.4);
          if(this.x >= canvas.width){
            this.x = 0;
            this.y += (2*this.lineHeight);
          };

          if(this.y >= 0.9*canvas.height && textToScroll.scrollHeight >= 0.95 * window.innerHeight * this.i) {
            this.x = this.xo;
            this.y = this.yo-3;
            textToScroll.scrollTo(0, 0.9 * window.innerHeight * this.i);
            this.i++;
          }

          break;
        case 3:
          this.draw();
          this.x += this.dx;
          this.y += this.dy;
          if(this.x >= canvas.width) {
            this.dx = -this.dx;
          }else if(this.x < 0){
            this.dx = -this.dx
          };

          if(this.y >= canvas.height && textToScroll.scrollHeight >= 0.95 * window.innerHeight * this.i) {
            this.x = this.xo;
            this.y = this.yo;
            textToScroll.scrollTo(0, 0.9 * window.innerHeight * this.i);
            this.i++;
          }

          break;
      }
  }
}; //Ok

const animation = {
  text : document.querySelector('#text'),
  method : document.querySelector('#method'),
  speed : document.querySelector('#slider-speed'),
};

const buttons = {
  onOff : document.querySelector('#on-off-btn'),
  confirm : document.querySelector('#submit'),
  restart : document.querySelector('#restart')
};

  //canvas settings
const canvas = document.getElementById('canvas');
  canvas.height = canvas.offsetHeight;
  canvas.width = canvas.offsetWidth;
const ctx = canvas.getContext('2d');
  //line height !


let lineHeight = window.innerHeight * 0.05;
document.getElementById('uploaded-text').style.lineHeight = `${lineHeight}px`;

window.onresize = () => {
  lineHeight = window.innerHeight * 0.05;
  document.getElementById('uploaded-text').style.lineHeight = `${lineHeight}px`;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
//x, y, dx, dy, width, height, color, method, speed, lineHeight
  //pointers
const pointer = [];
pointer[0] = new Pointer(0, 0, 5, lineHeight, lineHeight*2, lineHeight, 'rgba(232, 141, 136,0.5)', 1, 1, lineHeight);
pointer[1] = new Pointer(0, lineHeight*0.5, 5, lineHeight*2, lineHeight*2, lineHeight, 'rgba(232, 141, 136,0.5)', 2, 1,  lineHeight);
pointer[2] = new Pointer(0, 0, 10, 1, lineHeight*2, lineHeight, 'rgba(232, 141, 136,0.5)', 3, 1, lineHeight);

animation.method.addEventListener('click', () => {
  pointer[method.value-1].draw();
});

animation.speed.addEventListener('click', () => {
  pointer.forEach(pointer => pointer.speed = animation.speed.value);
});

animation.text.addEventListener('click', () => {
  if(animation.text.value != ''){
    animation.text.value ='';
  }
});

buttons.confirm.addEventListener('click', () => {
  let uText = document.getElementById('uploaded-text');
  uText.textContent = animation.text.value;

});

buttons.restart.addEventListener('click', () => {
  pointer.forEach(pointer => {
    pointer.x = pointer.xo; pointer.y = pointer.yo;
    pointer.dx = pointer.dxo; pointer.dy = pointer.dyo;
  });
  pointer[animation.method.value-1].draw();
  document.getElementById('uploaded-text').scrollTo(0,0);

});

buttons.onOff.addEventListener('click', () => {
  if(buttons.onOff.textContent.length === 3){
    function anim(){
      pointer[animation.method.value-1].animate();
      ref = window.requestAnimationFrame(anim);
    }
    anim();
  }
  else {
    window.cancelAnimationFrame(ref);
  }
});
