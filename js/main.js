var cardContainer = document.getElementById('card-container');
var cardTitle = document.getElementById('card-title');
var cardMsg = document.getElementById('card-msg');
var cardFrom = document.getElementById('card-from');

var formTitle = document.getElementById('title');
var formFrom = document.getElementById('from');
var formMsg = document.getElementById('msg');
var formImage = document.getElementById('image');


formTitle.addEventListener('keypress', function(event) {
  cardTitle.innerText = event.target.value;
})

formFrom.addEventListener('keypress', function(event) {
  cardFrom.innerText = event.target.value;
})

formMsg.addEventListener('keypress', function(event) {
  cardMsg.innerText = event.target.value;
})

formImage.addEventListener('change', function(event) {
  cardContainer.style.backgroundImage = "url('" + event.target.value + "')";
})