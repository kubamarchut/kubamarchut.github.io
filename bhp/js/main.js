var button = document.getElementsByTagName('button')[0]
var startScreen = document.getElementsByClassName('startScreen')[0]

var jsonx = JSON.parse('{"c":[{"n":"Postepowanie w związku z wypadkiem przy pracy, chorobie zawodowej i świadczenia z tego tytułu","p":[{"p":"Co to jest wypadek przy pracy?","o":"Wypadek przy pracy to zdarzenie nagłe, wywołane przyczyną zewnętrzną, powodujące uraz lub śmierć, które nastąpiło w związku z wykonywana pracą."},{"p":"Co to jest choroba zawodowa?","o":"Za chorobę zawodową uważa się chorobę, jeżeli w wyniku oceny warunków pracy można stwierdzić bezspornie lub z wysokim prawdopodobieństwem, że została spowodowana działaniem czynników szkodliwych dla zdrowia występujących w środowisku pracy, albo w związku ze sposobem wykonywania pracy ( zwanych narażeniem zawodowym )"},{"p":"Komu należy zgłosić podejrzenie o chorobę zawodową?","o":"Każde podejrzenie o chorobę zawodową musi być zgłoszone na piśmie do właściwego inspektora sanitarnego oraz właściwego okręgowego inspektora pracy."},{"p":"Kto upoważniony jest do rozpoznania choroby zawodowej?","o":"Upoważnione do rozpoznania choroby zawodowej są następujące jednostki:poradnia chorób zawodowych klinika chorób zawodowych wchodzące w skład odpowiednich zakładów służby zdrowia, akademii medycznych, instytutów naukowo-badawczych."},{"p":"Komu przysługują świadczenia z tytułu wypadku przy pracy i choroby zawodowej?","o":"Świadczenia  z tytułu wypadku i chorób zawodowych przysługują pracownikom, którzy doznali uszczerbku na zdrowiu oraz członkom rodzin pracowników zmarłych w skutek wypadku lub choroby."},{"p":"Jakie znasz świadczenia z tytułu wypadku przy pracy i choroby zawodowej?","o":"zasiłek chorobowy świadczenie rehabilitacyjne zasiłek wyrównawczy jednorazowe odszkodowanie dodatek pielęgnacyjny renta szkoleniowa (jeśli musi się przekwalifikować) renta z tytułu niezdolności do pracy renta rodzinna"},{"p":"Wymień przynajmniej 5 chorób zawodowych","o":"Astma oskrzelowa pylica płuc beryloza byssinoza przewlekłe choroby narządu głosu"}]},{"n":"Oświetlenie pomieszczeń i stanowisk pracy","p":[{"p":"Jakie są 3 podstawowe zasady dobrego oświetlenia?","o":"fizjologiczne - wynikające z analizy parametrów oświetlenia wpływających na jakość widzenia estetyczne - wynikające z analizy oddziaływania światła na psychikę człowieka ekonomiczne - polegające na wybraniu takiego wariantu oświetlenia, który spełniając powyższe zasady dałby najniższe koszty eksploatacji, przy jednoczesnym spełnieniu zasad fizjologicznych i estetycznych"},{"p":"Jakie korzyści wynikają z dobrego oświetlenia pomieszczeń i stanowisk pracy?","o":"Korzyści z dobrego oświetlenia to: uzyskanie wyższego poziomu produkcji pod względem jakościowym i ilościowym zapobieganie nadmiernemu wytężaniu wzroku, a tym samym przedwczesnym jego zmęczeniu zmniejszenie ryzyka wypadku, ułatwienie właściwego rozróżniania barw umożliwienie łatwego rozróżniania szczegółów"},{"p":"Jakie są rodzaje oświetlenia podstawowego?","o":"Rozróżniamy 3 rodzaje oświetlenia podstawowego pomieszczeń: oświetlenie ogólne oświetlenie miejscowe oświetlenie złożone"},{"p":"Co, z higienicznego punktu widzenia, ma wpływ na wygodę widzenia na stanowisku pracy?","o":"Na wygodę widzenia na stanowisku pracy ma wpływ: natężenie oświetlenia w lx równomierność oświetlenia barwa światła i rozróżnianie barw (wskaźnik oddawania barw) rozkład luminancji w całym pomieszczeniu ograniczenie olśnienia"},{"p":"Jakie negatywne skutki powoduje ma niewłaściwe oświetlenie?","o":"Niewłaściwe oświetlenie powoduje:    zmęczenie wzroku możliwość popełniania błędów przy pracy możliwość powstawania wypadków"},{"p":"Jaki jest, wymagany minimalny poziom natężenia oświetlenia dla stanowisk pracy w biurach?","o":"Minimalny poziom natężenia oświetlenia dla stanowisk pracy wnosi: 500 lx – pisanie ręczne, obsługiwanie klawiatury, czytanie, przetwarzania danych, stanowiska komputerowe, pokoje spotkań, sale konferencyjne; 300 lx – recepcje, segregowanie dokumentów, kopiowanie; 200 lx – archiwa, magazyny."},{"p":"Wymień przynajmniej 5 chorób zawodowych","o":"Astma oskrzelowa pylica płuc beryloza byssinoza przewlekłe choroby narządu głosu"}]},{"n":"Nowa kategoria"}]}')
var arr = ["Co tam?", "Chciałbym umrzeć z miłości", "No fajna ta gra na BHP"]

function getCategories(){
  var categoriesArr = []
  var random = []
  while(random.length < 3){
      var r = Math.floor(Math.random() * jsonx.c.length);
      if(random.indexOf(r) === -1) random.push(r);
  }
  for (var i = 0; i < 3; i++) {
    categoriesArr.push(jsonx.c[random[i]].n);
  }
  return categoriesArr
}

function generateCards(categories){
  s = 0
  s1 = 0
  for (var i = 0; i < 3; i++) {
    var newText = document.createElement('p')
    newText.innerHTML = categories[i];
    newText.style.transitionDelay = s1 +"s"
    var question = document.createElement('p')
    question.innerHTML = '<h1>Pytanie:</h1>'
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
  cards[0].classList.add('top')
  cards[1].classList.add('zero')
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
      cards[i].classList.remove('top', 'bottom', 'zero')
      var cat = cards[i].childNodes[0].childNodes[0].childNodes[0].innerHTML
      var ques;
      for (var j = 0; j < jsonx.c.length; j++) {
        if(jsonx.c[j].n == cat){
          ques = jsonx.c[j].p
          break
        }
      }
      var r = Math.floor(Math.random() * ques.length)
      var question = ques[r].p
      var ans = ques[r].o
      ques.splice(ques.indexOf(ques[r]), 1);
      cards[i].childNodes[0].childNodes[1].childNodes[0].innerHTML += question;
      var button = document.createElement('button')
      button.innerHTML = "Zobacz odpowiedź"
      cards[i].removeEventListener('click', showQuestion)
      cards[i].addEventListener('click', showAns)
      cards[i].childNodes[0].childNodes[1].childNodes[0].appendChild(button)
      cards[i].childNodes[0].childNodes[0].childNodes[0].innerHTML = ans;
      cards[i].classList.add('pick');
    }
    s += 0.1;
  }
  setTimeout(function(){
    var toRemove = document.getElementsByClassName('hide');
    while(toRemove[0]){
      toRemove[0].remove()
    }
  },500)

}

function showAns(event){
  event.target.parentNode.parentNode.style.transform = 'rotateX(0)'
  event.target.parentNode.parentNode.parentNode.removeEventListener('click', showAns)
  event.target.parentNode.parentNode.parentNode.addEventListener('click', restart)
}

function restart(event){
  event.target.parentNode.parentNode.parentNode.classList.add('hide')
  setTimeout(function(){event.target.parentNode.parentNode.parentNode.remove()}, 2000)
  startScreen = document.createElement('div')
  startScreen.classList.add('startScreen')
  button = document.createElement('button')
  button.addEventListener('click', starter)
  button.innerHTML = 'Startuj'
  var h1 = document.createElement('h1')
  h1.innerHTML = 'Wylosuj nowe pytanie'
  startScreen.appendChild(h1)
  startScreen.appendChild(button)
  setTimeout(function(){document.body.appendChild(startScreen)}, 200)
}

function starter(){
  startScreen.classList.add('hide')
  setTimeout(function(){startScreen.remove()}, 500)
  setTimeout(function(){generateCards(getCategories())}, 1000)
}

button.addEventListener('click', starter)
