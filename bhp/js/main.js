var button = document.getElementsByTagName('button')[0]
var startScreen = document.getElementsByClassName('startScreen')[0]
var cards = []
var ansbox;
var ans

var jsonx = JSON.parse('{"c":[{"n":"Czynniki występujące w środowisku pracy","p":[{"p":"Jak klasyfikujemy czynniki zagrożeń występujących w środowisku pracy?","o":"Czynniki szkodliwe dla zdrowia, czynniki niebezpieczne, czynniki uciążliwe."},{"p":"Które czynniki wyróżnia się wśród czynników szkodliwych dla zdrowia?","o":"Czynniki biologiczne, czynniki fizyczne, czynniki chemiczne, czyniki psychofizyczne."},{"p":"Czym jest czynnik uciążliwy?","o":"Czynnik uciążliwy to czynnik, którego oddziaływanie na pracownika może być przyczyną złego samopoczucia lub nadmiernego zmęczenia, które nie prowadzi jednak do trwałego pogorszenia stanu zdrowia."},{"p":"Do jakich głównych kategorii można zaliczyć czynniki o charakterze uciążliwym?","o":"Mikroklimat (wysoka wilgotność), monotonia, obciążenie psychiczne, obciążenie statyczne, oświetlenie, wysiłek fizyczny."},{"p":"Jakie są zagrożenia w czynnikach niebezpiecznych?","o":"Zagrożenia elementami ruchomymi i luźnymi, zagrożenia elementami ostrymi i wystającymi, zagrożenia związane z przemieszczaniem się ludzi, zagrożenia porażeniem prądem elektrycznym, zagrożenia poparzeniem, zagrożenia pożarem lub/i wybuchem."}]},{"n":"Ergonomia w kształtowanie warunków pracy","p":[{"p":"Jak nazywamy naukę zajmująca się projektowaniem systemów pracy, produktów i środowiska zgodnie z psychofizycznymi zdolnościami człowieka.","o":"Ta nauka to Ergonomia"},{"p":"Wymień przynajmniej 6 dziedzin nauk składających się na wiedzę ergonomiczną","o":"Dobre to: Fizjologia pracy, Psychologia, Antropometria, Biomechanika, Higiena pracy, Socjologia, Ochrona środowiska, Medycyna pracy, Estetyka, Bionika, Mechanika"},{"p":"Jeden z typów ergonomii zajmuje się opracowywaniem rozwiązań technicznych we wczesnej fazie opracowywania, jak nazywamy ten typ ergonomii?","o":"Jest to ergonomia koncepcyjna."},{"p":"Jaką rolę spełnia oświetlenie przy projektowaniu stanowiska pracy?","o":"Odpowiedni dobór światła decyduje o komforcie psychofizycznym pracownika."},{"p":"Wymień 3 cechy fizyczne człowieka należy uwzględnić w kształtowaniu stanowiska pracy?","o":"Dobre to: Wymiary antropometryczne ciała ludzkiego, zakresy kątowe ruchu w stawach, możliwości siłowe i sprawnościowe układu ruchu związane z: siłami rozwijanymi, pozycją ciała, czasem pracy lub częstością powtórzeń czynności roboczych"}]},{"n":"Fizjologia pracy","p":[{"p":"Co to jest fizjologia pracy?","o":"Dział fizjologii stosowanej praktycznej, której przedmiotem badań jest wpływ pracy na człowieka. "},{"p":"Na jakie dwie fazy dzielimy rytmy endogenne?","o":"Pozytywne i negatywne."},{"p":"Czy praca zmianowa jest korzystna dla człowieka?","o":"Nie. Jestniekorzystna i sprzeczna z jego wewnętrzną chronologią."},{"p":"Jakie wyróżniamy postacie zmęczenia?","o":"Wyróżniamy zmęczenie podostre, ostre, przewlekłe oraz znużenie i wyczerpanie."},{"p":"Do czego prowadzą przedłużające się stany stresu?","o":"Do stanów lękowych i depresji."},{"p":"W czym mierzymy energetyczną wartość pożywienia?","o":"Mierzymy ją w dżulach [J] lub kaloriach [kcal]."}]},{"n":"Hałas w środowisku pracy","p":[{"p":"Jakie jest maksymalne natężenie hałasu dla 8-godzinnego okresu pracy?","o":"85dB."},{"p":"Ile maksymalnie może trwać praca w hałasie do 110 dB?","o":"Nie dłużej niż 10 minut dziennie."},{"p":"Co należy zrobić jeżeli hałas przekracza 85dB?","o":"Zadbać o ochronę słuchu."},{"p":"Jakie jest dopuszczalne natężenie hałasu dla kobiet w ciąży?","o":"65dB."},{"p":"Jak trzeba postępować ze strefami, w których występuje nadmierny hałas?","o":"Wyznaczyć je i odpowiednio oznakować, a także ograniczyć dostęp do nich."}]},{"n":"Ocena ryzyka zawodowego na stanowisku pracy","p":[{"p":"Co to jest ryzyko zawodowe ?","o":"Ryzyko zawodowe to prawdopodobieństwo wystąpienia niepożądanych zdarzeń mogących spowodować niekorzystne dla zdrowia skutki, które są wynikiem zagrożeń zawodowych występujących w środowisku pracy lub związanych ze sposobem wykonywania pracy."},{"p":"Jakie elementy składają się na ryzyko zawodowe?","o":"Na ryzyko zawodowe składa się prawdopodobieństwo wystąpienia urazu lub pogorszenia stanu zdrowia oraz ciężkość następstw"},{"p":"Czy pracodawca może samodzielnie przeprowadzić ocenę ryzyka ?","o":"Tak, ocenę ryzyka pracodawca może przeprowadzić samodzielnie, jeżeli jest dobrze zorientowany w technologii oraz rodzaju wykonywanej pracy, lub może to zlecić specjalistom do spraw BHP. Należy pamiętać, że odpowiedzialność za prawidłowość sporządzonej oceny zawsze spoczywa na pracodawcy."},{"p":"Kiedy powinno nastąpić poinformowanie pracownika o ryzyku zawodowym?","o":"Poinformowanie pracownika o ryzyku zawodowym powinno nastąpić przed dopuszczeniem do pracy. Pracownik powinien podpisać potwierdzenie poinformowania o zagrożeniach związanych z pracą, które należy dołączyć do akt osobowych pracownika. Udowodnienie, że pracownik został poinformowany o ryzyku, ma ogromne znaczenie, gdy dojdzie do szkód wyrządzonych mu przy wykonywanej pracy. "},{"p":"Jakie korzyści będzie miał pracodawca z prawidłowo przeprowadzonej oceny ryzyka zawodowegona stanowisku pracy?","o":"spełnieni wymagania przepisów prawnych<br>świadomość, jakie występują zagrożenia, jakie jest ryzyko i czy zastosowane środki profilaktyczne są wystarczające"},{"p":"Czy ocenę ryzyka należy  powtarzać? ","o":"Ocenę ryzyka należy okresowo powtarzać, aby była aktualna. Przeprowadza się ją w przypadku zmian technicznych czy technologicznych. Wszelkie modyfikacje w procesie pracy mogą bowiem powodować zmiany w środowisku pracy. Dotyczy to także występujących zagrożeń. Zaktualizowaną ocenę ryzyka podaje się do wiadomości załogi."}]},{"n":"Oświetlenie pomieszczeń i stanowisk pracy","p":[{"p":"Jakie są 3 podstawowe zasady dobrego oświetlenia?","o":"fizjologiczne - wynikające z analizy parametrów oświetlenia wpływających na jakość widzenia<br><br>estetyczne - wynikające z analizy oddziaływania światła na psychikę człowieka<br><br>ekonomiczne - polegające na wybraniu takiego wariantu oświetlenia, który spełniając powyższe zasady dałby najniższe koszty eksploatacji, przy jednoczesnym spełnieniu zasad fizjologicznych i estetycznych"},{"p":"Jakie korzyści wynikają z dobrego oświetlenia pomieszczeń i stanowisk pracy?","o":"Korzyści z dobrego oświetlenia to:<br><br>uzyskanie wyższego poziomu produkcji pod względem jakościowym i ilościowym<br><br>zapobieganie nadmiernemu wytężaniu wzroku, a tym samym przedwczesnym jego zmęczeniu<br><br>zmniejszenie ryzyka wypadku,<br>ułatwienie właściwego rozróżniania barw<br><br>umożliwienie łatwego rozróżniania szczegółów"},{"p":"Jakie są rodzaje oświetlenia podstawowego?","o":"Rozróżniamy 3 rodzaje oświetlenia podstawowego pomieszczeń:<br><br>oświetlenie ogólne<br><br>oświetlenie miejscowe<br><br>oświetlenie złożone"},{"p":"Co, z higienicznego punktu widzenia, ma wpływ na wygodę widzenia na stanowisku pracy?","o":"Na wygodę widzenia na stanowisku pracy ma wpływ:<br><br>natężenie oświetlenia w lx<br><br>równomierność oświetlenia<br><br>barwa światła i rozróżnianie barw (wskaźnik oddawania barw)<br><br>rozkład luminancji w całym pomieszczeniu<br><br>ograniczenie olśnienia"},{"p":"Jakie negatywne skutki powoduje ma niewłaściwe oświetlenie?","o":"Niewłaściwe oświetlenie powoduje:<br><br>zmęczenie wzroku<br><br>możliwość popełniania błędów przy pracy<br><br>możliwość powstawania wypadków"},{"p":"Jaki jest, wymagany minimalny poziom natężenia oświetlenia dla stanowisk pracy w biurach?","o":"Minimalny poziom natężenia oświetlenia dla stanowisk pracy wnosi:<br><br>500 lx – pisanie ręczne, obsługiwanie klawiatury, czytanie, przetwarzania danych, stanowiska komputerowe, pokoje spotkań, sale konferencyjne;<br><br>300 lx – recepcje, segregowanie dokumentów, kopiowanie;<br><br>200 lx – archiwa, magazyny."},{"p":"Wymień przynajmniej 5 chorób zawodowych","o":"Astma oskrzelowa<br><br>pylica płuc<br><br>beryloza<br><br>byssinoza<br><br>przewlekłe choroby narządu głosu"}]},{"n":"Postepowanie w związku z wypadkiem przy pracy chorobie zawodowej i świadczenia z tego tytułu","p":[{"p":"Co to jest wypadek przy pracy?","o":"Wypadek przy pracy to zdarzenie nagłe, wywołane przyczyną zewnętrzną, powodujące uraz lub śmierć, które nastąpiło w związku z wykonywana pracą."},{"p":"Co to jest choroba zawodowa?","o":"Za chorobę zawodową uważa się chorobę, jeżeli w wyniku oceny warunków pracy można stwierdzić bezspornie lub z wysokim prawdopodobieństwem, że została spowodowana działaniem czynników szkodliwych dla zdrowia występujących w środowisku pracy, albo w związku ze sposobem wykonywania pracy ( zwanych narażeniem zawodowym )"},{"p":"Komu należy zgłosić podejrzenie o chorobę zawodową?","o":"Każde podejrzenie o chorobę zawodową musi być zgłoszone na piśmie do właściwego inspektora sanitarnego oraz właściwego okręgowego inspektora pracy."},{"p":"Kto upoważniony jest do rozpoznania choroby zawodowej?","o":"Upoważnione do rozpoznania choroby zawodowej są następujące jednostki:<br><br>poradnia chorób zawodowych<br><br>klinika chorób zawodowych wchodzące w skład odpowiednich zakładów służby zdrowia, akademii medycznych, instytutów naukowo-badawczych."},{"p":"Komu przysługują świadczenia z tytułu wypadku przy pracy i choroby zawodowej?","o":"Świadczenia  z tytułu wypadku i chorób zawodowych przysługują pracownikom, którzy doznali uszczerbku na zdrowiu oraz członkom rodzin pracowników zmarłych w skutek wypadku lub choroby."},{"p":"Jakie znasz świadczenia z tytułu wypadku przy pracy i choroby zawodowej?","o":"zasiłek chorobowy<br><br>świadczenie rehabilitacyjne<br><br>zasiłek wyrównawczy<br><br>jednorazowe odszkodowanie<br><br>dodatek pielęgnacyjny<br><br>renta szkoleniowa (jeśli musi się przekwalifikować)<br><br>renta z tytułu niezdolności do pracy<br><br>renta rodzinna"},{"p":"Wymień przynajmniej 5 chorób zawodowych","o":"Astma oskrzelowa<br><br>pylica płuc<br><br>beryloza<br><br>byssinoza<br><br>przewlekłe choroby narządu głosu"}]},{"n":"Prawa i obowiązki pracownika i pracodawcy w zakresie BHP","p":[{"p":"Czy pracownik ma prawo do powstrzymania się od wykonywania pracy w szczególnych sytuacjach?","o":"Tak, może w przypadku gdy warunki pracy nie odpowiadają przepisom bezpieczeństwa i higieny pracy i stwarzają bezpośrednie zagrożenie dla zdrowia lub życia pracownika."},{"p":"Czy pracownik ma prawo do oddalenia się z miejsca pracy?","o":"Tak, w razie gdy powstrzymanie się od wykonywania pracy nie usuwa zagrożenia."},{"p":"Co powinien zrobić pracownik, jeśli zauważy wypadek w zakładzie pracy?","o":"Pracownik powinien niezwłocznie zawiadomić przełożonego o zauważonym w zakładzie pracy wypadku albo zagrożeniu życia lub zdrowia ludzkiego oraz ostrzec współpracowników, a także inne osoby znajdujące się w rejonie zagrożenia, o grożącym im niebezpieczeństwie."},{"p":"Czy pracownik musi znać przepisy i zasady BHP, czy wystarczy że są one dostępne w razie potrzeby?","o":"Obowiązkiem pracownika jest znać przepisy i zasady BHP, a także brać udział w szkoleniu i instruktażu z tego zakresu oraz poddawać się wymaganym egzaminom sprawdzającym."},{"p":"Na jakie badania musi uczęszczać pracownik?","o":"Pracownik musi uczęszczać na badania wstępne, okresowe, i kontrolne."},{"p":"Kto odpowiada za szkolenia w zakresie BHP w zakładzie pracy?","o":"To pracodawca musi przed zatrudnieniem przeprowadzić szkolenie nowych pracowników."},{"p":"Do czyjego obowiązku należy zapewnienie przestrzegania w firmie przepisów oraz zasad w zakresie BHP?","o":"To obowiązek pracodawcy."}]},{"n":"System ochronny pracy w Polsce","p":[{"p":"Jakie są główne źródła prawa ochrony pracy?","o":"Konstytucja RP, Kodeks pracy, inne ustawy dotyczące organów nadzoru państwowego nad warunkami pracy (ustawa o PIP, PIS i dozorze technicznym)"},{"p":"Wymień 3 państwowe organy sprawujące nadzór nad warunkami pracy","o":"Państwowa Inspekcja Pracy, Państwowa Inspekcja Sanitarna, Urząd Dozoru Technicznego"},{"p":"Jakimi 3 karami pracodawca może ukarać pracownika? ","o":"Pracodawca może ukarać pracownika: karą upomnienia, nagany, pieniężną."},{"p":"Kiedy pracodawca jest obowiązany powołać służbę BHP?","o":"Pracodawca musi powołać służbę BHP kiedy zatrudnia więcej niż 100 pracowników."},{"p":"Jaki organ musi powołać pracodawca zatrudniający powyżej 250 pracowników?","o":"Pracodawca musi powołać Komisję Bezpieczeństwa i Higieny Pracy"}]},{"n":"Zagrożenie czynnikami biologicznymi","p":[{"p":"Jakie są biologiczne skutki pracy w gorącym mikroklimacie?","o":"Udar cieplny, wyczerpanie cieplne i bolesne skurcze mięśni."},{"p":"Do jakiej grupy zagrożenia szkodliwych czynników biologicznych zaliczamy dżumę?","o":"Do grupy trzeciej."}]},{"n":"Zagrożenie czynnikami chemicznymi","p":[{"p":"Podaj określenie substancji lub mieszaniny stwarzającej zagrożenie (niebezpiecznej).","o":"Substancja lub mieszanina, która ze względu na swoje właściwości powoduje zagrożernia dla zdrowia lub środowiska nazywamy substancją niebezpieczną"},{"p":"Jakie znasz rodzaje zatruć?","o":"Zatrucia dzielimy na ostre, podostre i przewlekłe"},{"p":"Jakie są sposoby działania substancji chemicznych na organizm?","o":"Substancje chemiczne mogą działać na organizm miejscowo i układowo, a ich nasilenie może mieć charakter ostry lub przewlekły"},{"p":"Jakie znasz rodzaje wentylacji?","o":"Wentylacja pomieszczeń pracy może być naturalna lub mechaniczna powodująca wymuszony ruch powietrza. Wentylacja mechaniczna może być ogólna i miejscowa. Zarówno jedna jak i druga może być nawiewna, wywiewna lub nawiewno-wywiewna. Wentylacja ogólna polega na wymianie powietrza w całym pomieszczeniu, a miejscowa w pewnych określonych punktach związanych najczęściej z wydzielaniem się czynników szkodliwych"},{"p":"Co to są środki ochrony indywidualnej?","o":"Środkami ochrony indywidualnej nazywamy wszelkiego rodzaju urządzenia, których rola polega na indywidualnej ochronie pracownika przed czynnikami niebezpiecznymi występującymi na stanowisku pracy"}]},{"n":"Środki ochrony indywidualnej","p":[{"p":"Jakie części ciała powinny chronić środki ochrony indywidualnej?","o":"środki ochrony kończyn (ochraniacze stóp, obuwie ochronne, ochraniacze kolan, łokci, dłoni itd.), głowy (głównie hełmy), twarzy i oczu, m.in. okulary ochronne, słuchu (nauszniki, wkładki przeciwhałasowe itp.), układu oddechowego, izolujące cały organizm, (np. kombinezony gazoszczelne, środki chroniące przed upadkiem z wysokości)."},{"p":"Kiedy powinny być stosowane środki ochrony indywidualnej?","o":"Powinny byc stosowane gdy, nie można uniknąć zagrożeń lub wystarczająco ich ograniczyć za pomocą środków ochrony zbiorowej albo odpowiedniej organizacji pracy"},{"p":"Jak powinny być zaprojektowane środki ochrony indywidualnej?","o":"Środki ochrony indywidualnej powinny być zaprojektowane i wykonane tak, aby możliwe było ich łatwe i prawidłowe założenie przez użytkownika oraz pozostawienie ich na właściwym miejscu przez przewidywany okres użytkowania, z uwzględnieniem panujących wokół warunków, wykonywanych ruchów i przyjmowania pozycji ciała."},{"p":"Jak oznakowane są środki ochrony indywidualnej gdy spełniają wymagania?","o":"Potwierdzeniem tych wymagań jest oznakowanie środków ochrony indywidualnej znakiem CE."},{"p":"Co grozi pracownikowi gdy ten nie dostarczy pracownikowi środków ochrony indywidualnej?","o":"Niedostarczenie pracownikowi środków ochrony indywidualnej, jak również dostarczenie środków ochrony indywidualnej niespełniających wymagań oceny zgodności jest wykroczeniem zagrożonym karą grzywny."}]}]}')
var arr = ["Co tam?", "Chciałbym umrzeć z miłości", "No fajna ta gra na BHP"]

function getCategories(){
  var categoriesArr = []
  var random = []
  if(jsonx.c.length > 2){
    while(random.length < 3){
        var r = Math.floor(Math.random() * jsonx.c.length);
        if(random.indexOf(r) === -1) random.push(r);
    }
    for (var i = 0; i < 3; i++) {
      categoriesArr.push(jsonx.c[random[i]].n);
    }
  }
  else{
    alert('Za mało pytań')
  }

  return categoriesArr
}

function generateCards(categories){
  cards = [];
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
    cards.push(newDiv)
    s += 0.25
    s1 += 0.5
  }
  setTimeout(function(){animateCards()}, 2)
}
function animateCards(){
  cards[0].classList.add('top')
  cards[1].classList.add('zero')
  cards[2].classList.add('bottom')
  setTimeout(function(){animateText(cards)}, 1000)
}

function animateText(){
  for (var i = 0; i < cards.length; i++) {
    cards[i].childNodes[0].classList.add('show')
  }
}

function showQuestion(event){
  var cards2 = cards;
  var pickedCard = event.target;
  while(!pickedCard.classList.contains('card')){
    pickedCard = pickedCard.parentNode
  }

  var s = 0
  for (var i = 0; i < cards2.length; i++) {
    if(cards2[i] != pickedCard){
      cards2[i].style.transitionDelay = s + "s";
      cards2[i].classList.add('hide')
    }
    else {
      cards2[i].style.transitionDelay = 0 + "s";
      cards2[i].classList.remove('top', 'bottom', 'zero')
      var cat = cards2[i].childNodes[0].childNodes[0].childNodes[0].innerHTML
      var ques;
      for (var j = 0; j < jsonx.c.length; j++) {
        if(jsonx.c[j].n == cat){
          ques = jsonx.c[j].p
          break
        }
      }
      var r = Math.floor(Math.random() * ques.length)
      var question = ques[r].p
      ans = ques[r].o
      ques.splice(ques.indexOf(ques[r]), 1);
      if (ques.length == 0) jsonx.c.splice(j, 1)
      cards2[i].childNodes[0].childNodes[1].childNodes[0].innerHTML += question;
      var button = document.createElement('button')
      button.innerHTML = "Zobacz odpowiedź"
      cards2[i].removeEventListener('click', showQuestion)
      cards2[i].addEventListener('click', showAns)
      cards2[i].childNodes[0].childNodes[1].childNodes[0].appendChild(button)
      ansbox = cards2[i].childNodes[0].childNodes[0].childNodes[0];
      cards2[i].classList.add('pick');
      cards = cards2[i]
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

function showAns(){
  console.log(cards);
  ansbox.style.fontSize = '1.75em'
  ansbox.innerHTML = ans
  cards.childNodes[0].style.transform = 'rotateX(0)'
  cards.childNodes[0].childNodes[0].removeEventListener('click', showAns)
  cards.childNodes[0].childNodes[0].addEventListener('click', restart)
}

function restart(){
  cards.classList.add('hide')
  setTimeout(function(){cards.remove()}, 100)
  generate();
}

function generate(){
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