const button = document.getElementsByTagName('button')[0]
const startScreen = document.getElementsByClassName('startScreen')[0]

var arr = ["Co tam?", "Chciałbym umrzeć z miłości", "No fajna ta gra na BHP"]

function generateCards(){
  s = 0
  s1 = 0
  for (var i = 0; i < 3; i++) {
    var newText = document.createElement('p')
    newText.innerHTML = arr[i];
    newText.style.transitionDelay = s1 +"s"
    var question =document.createElement('p')
    question.innerHTML = 'tu będzie pytanie'
    var newDiv = document.createElement('div')
    var innerDiv = document.createElement('div')
    var frontDiv = document.createElement('div')
    var backDiv = document.createElement('div')
    innerDiv.classList.add('card-inner')
    frontDiv.classList.add('card-front')
    backDiv.classList.add('card-back')
    frontDiv.appendChild(newText)
    backDiv.appendChild(question)
    innerDiv.appendChild(frontDiv)
    innerDiv.appendChild(backDiv)
    newDiv.appendChild(innerDiv)
    newDiv.classList.add('card')
    newDiv.style.transitionDelay = s +"s"
    newDiv.addEventListener('click', showQuestion)
    document.body.appendChild(newDiv)
    s += 0.25
    s1 += 0.5
  }
  setTimeout(function(){animateCards()}, 2)
}
function animateCards(){
  const cards = document.getElementsByClassName('card')
  cards[0].classList.add('top');
  cards[2].classList.add('bottom')
  setTimeout(function(){animateText(cards)}, 1000)
}

function animateText(cards){
  for (var i = 0; i < cards.length; i++) {
    cards[i].childNodes[0].classList.add('show')
  }
}

function showQuestion(event){
  const cards = document.getElementsByClassName('card')

  var pickedCard = event.target.parentNode.parentNode.parentNode;
  var s = 0
  for (var i = 0; i < cards.length; i++) {
    if(cards[i] != pickedCard){
      cards[i].style.transitionDelay = s + "s";
      cards[i].classList.add('hide')
    }
    else {
      cards[i].style.transitionDelay = 0 + "s";
      cards[i].classList.add('pick');
    }
    s += 0.1;
  }

}

function starter(){
  startScreen.classList.add('hide')
  setTimeout(function(){startScreen.remove()}, 500)
  setTimeout(function(){generateCards()}, 1000)
}

button.addEventListener('click', starter)
