let db = [
  ["15% na wszystkie produkty", "15wdolmaj", "20", "1"],
  ["5% na wszystkie produkty", "5wdolmaj", "50", "1"],
  ["2 skórzane paski w cenie 1", "2wcenie1paski", "15", "1"],
  ["wszystkie produkty firmy casio 30% taniej", "30casioczerwiec", "15", "1"]
]
const COLORS = ["#287271","#e9c46a","#e76f51","#2a9d8f","#f4a261","#8ab17d","#babb74"];
const NEW_PROMOTION_BTN = document.querySelector('button.new-promotion');
const TABLE = document.querySelector('table');
const START_BTN = document.querySelector("button.spin");
const WHEEL = document.querySelector("ul#wheel");

let options = 0;
for(item of db){
  options += parseInt(item[item.length - 1]);
}
let min_step = 360 / options;

NEW_PROMOTION_BTN.addEventListener('click', addNewItem);

function addNewItem(){
  let data = [];
  let inputs = TABLE.querySelectorAll('tr:last-child input');

  for(input of inputs){
    data.push(input.value);
  }
  db.push(data);

  options = 0;
  for(item of db){
    options += parseInt(item[item.length - 1]);
  }
  min_step = 360 / options;

  displayDB();
  generate_wheel();
}
function clearTable(){
  let items_to_delete = TABLE.querySelectorAll("tr:not(:first-child):not(:last-child)");
  for(item of items_to_delete){
    TABLE.lastChild.removeChild(item);
  }
}
function clearWheel(){
  while(WHEEL.firstChild){
    WHEEL.removeChild(WHEEL.lastChild);
  }
}
function displayDB(){
  clearTable();
  db.forEach((item, index) => {
    console.log(item);
    let new_row = document.createElement("tr");
    let new_cell = document.createElement("td");
    new_cell.innerHTML = index+1;
    new_row.appendChild(new_cell);
    for(data of item){
      let new_cell = document.createElement("td");
      let new_input = document.createElement("input");
      new_input.value = data;
      new_cell.appendChild(new_input);
      new_row.appendChild(new_cell);
    }
    TABLE.lastChild.insertBefore(new_row, TABLE.querySelector('tr:last-child'));
  });
}


displayDB();
generate_wheel()








//let initial_degree = (Math.floor(Math.random() * (min_step * 5/6)) + (min_step / 6)) * (Math.floor(Math.random() * options) + 1);
START_BTN.addEventListener('click', draw);

function generate_wheel(){
  clearWheel();
  console.log(options);
  console.log(db);
  for(let i = 0; i < options; i++){
    console.log(i);
    let section = document.createElement('li');
    section.classList.add('section');
    section.style.transform = `rotate(${min_step * i}deg) skewY(${-1*(90-min_step)}deg)`;
    section.style.background = COLORS[i % COLORS.length];
    let rgb = section.style.background.replace(/^rgba?\(|\s+|\)$/g,'').split(',');
    let text = document.createElement('div');
    text.classList.add('description');
    text.style.transform = `skewY(${90-min_step}deg) rotate(${min_step / 2}deg)`;
    text.style.color = ((rgb[0]*0.299 + rgb[1]*0.587 + rgb[2]*0.114) > 186) ? "#000" : "#fff";
    text.innerHTML = db[i][0];
    section.appendChild(text);
    WHEEL.appendChild(section);
  }
}

function draw(){
  let drawing_array = [];
  db.forEach((item, i) => {
    for(let j = 0; j < item[2]; j++){
      drawing_array.push(i)
    };
  });
  let drawed_promotion_index = drawing_array[Math.floor(Math.random() * drawing_array.length)]
  console.log(db[drawed_promotion_index][0]);
  spin(drawed_promotion_index);
}

function rand_spin(){
  console.log(initial_degree);
  WHEEL.style.transform = `rotate(${initial_degree}deg)`;
  setTimeout(()=>{
    WHEEL.style.transition = '5s transform cubic-bezier(0.14, 0.61, 0.72, 1)';
  }, 200);
}

function spin(target_promotion){
  WHEEL.style.transitionDuration = "0s";
  WHEEL.style.transform = `rotate(0deg)`;
  setTimeout(()=>{
  let min_degree = target_promotion*min_step + 10;
  let max_degree = target_promotion*min_step + min_step - 10;
  let degree = Math.floor(Math.random() * (max_degree - min_degree)) + min_degree;
  let rotations = (Math.floor(Math.random() * (6 - 2)) + 2) * 360;
  console.log(min_degree, max_degree, degree);
  let duration = rotations / 180;
  WHEEL.style.transition = `${duration}s transform cubic-bezier(0.14, 0.61, 0.72, 1)`;
  WHEEL.style.transform = `rotate(-${(degree + rotations)}deg)`;
}, 200);
}

//rand_spin();
