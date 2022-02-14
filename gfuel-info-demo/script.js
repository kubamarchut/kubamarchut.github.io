/* Store the element in el */
let el = document.getElementById('tilt')
let info = document.querySelectorAll('.info')

/* Get the height and width of the element */
const height = el.clientHeight
const width = el.clientWidth

/*
  * Add a listener for mousemove event
  * Which will trigger function 'handleMove'
  * On mousemove
  */
el.addEventListener('mousemove', handleMove)
info.forEach((item, i) => {
  item.addEventListener('mouseenter', ()=>{
    console.log(7.5 * Math.pow((-1),i), -7.5 * Math.pow((-1), Math.round(0.5*(i-0.1))));
    const string = 'perspective(500px) scale(1.1) rotateX(' + 7.5 * Math.pow((-1), Math.round(0.5*(i-0.1))) + 'deg) rotateY(' + -7.5 * Math.pow((-1),i) + 'deg)'
    el.style.transform = string
  })
});
info.forEach((item, i) => {
  item.addEventListener('mouseleave', ()=>{
    const string = 'perspective(500px) scale(1) rotateX(0deg) rotateY(0deg)'
    el.style.transform = string
  })
});


/* Define function a */
function handleMove(e) {
  /*
    * Get position of mouse cursor
    * With respect to the element
    * On mouseover
    */
  /* Store the x position */
  const xVal = e.layerX
  /* Store the y position */
  const yVal = e.layerY
  info[0].classList.remove("show")
  info[1].classList.remove("show")
  info[2].classList.remove("show")
  info[3].classList.remove("show")
  if (xVal<(width/2) - 10){
    if (yVal<(height/2) - 10) info[0].classList.add("show")
    else if (yVal>(height/2) + 10) info[2].classList.add("show")
  }
  else if(xVal>(width/2) + 10){
    if (yVal<(height/2) - 10) info[1].classList.add("show")
    else if (yVal>(height/2) + 10) info[3].classList.add("show")
  }
  /*
    * Calculate rotation valuee along the Y-axis
    * Here the multiplier 20 is to
    * Control the rotation
    * You can change the value and see the results
    */
  const yRotation = 15 * ((xVal - width / 2) / width)

  /* Calculate the rotation along the X-axis */
  const xRotation = -15 * ((yVal - height / 2) / height)

  /* Generate string for CSS transform property */
  const string = 'perspective(500px) scale(1.1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'

  /* Apply the calculated transformation */
  el.style.transform = string
}

/* Add listener for mouseout event, remove the rotation */
el.addEventListener('mouseout', function() {
  el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
  info[0].classList.remove("show")
  info[1].classList.remove("show")
  info[2].classList.remove("show")
  info[3].classList.remove("show")
})

/* Add listener for mouseup, simulate release of mouse click */
el.addEventListener('mouseup', function() {
  el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
})
