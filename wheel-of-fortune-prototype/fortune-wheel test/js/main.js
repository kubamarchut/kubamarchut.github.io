const START_BTN = document.querySelector("button.spin");
const WHEEL = document.querySelector("div#wheel");

let options = 4;
let min_step = 360 / options;
let initial_degree = (Math.floor(Math.random() * (min_step * 5/6)) + (min_step / 6)) * (Math.floor(Math.random() * options) + 1);
START_BTN.addEventListener('click', spin);

function rand_spin(){
  console.log(initial_degree);
  WHEEL.style.transform = `rotate(${initial_degree}deg)`;
  setTimeout(()=>{
    WHEEL.style.transition = '5s transform cubic-bezier(0.14, 0.61, 0.72, 1)';
  }, 200);
}

function spin(){
  let degree = Math.floor(Math.random() * 10) + 5;
  let duration = (initial_degree + (degree * min_step)) / 180;
  WHEEL.style.transition = `${duration}s transform cubic-bezier(0.14, 0.61, 0.72, 1)`;
  WHEEL.style.transform = `rotate(${initial_degree + (degree * min_step)}deg)`;
}

rand_spin();
