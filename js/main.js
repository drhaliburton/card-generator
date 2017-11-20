var cardContainer = document.getElementById('card-container');
var cardImage = document.getElementById('card-image');
var cardTitle = document.getElementById('card-title');
var cardMsg = document.getElementById('card-msg');
var cardFrom = document.getElementById('card-from');

var formTitle = document.getElementById('title');
var formFrom = document.getElementById('from');
var formMsg = document.getElementById('msg');
var formImage = document.getElementById('image');

var saveButton = document.getElementById('save-button');



formTitle.addEventListener('change', function(event) {
  cardTitle.innerText = event.target.value;
})

formFrom.addEventListener('change', function(event) {
  cardFrom.innerText = event.target.value;
})

formMsg.addEventListener('change', function(event) {
  cardMsg.innerText = event.target.value;
})

formImage.addEventListener('change', function(event) {
  cardImage.src = event.target.value;
})

function downloadURI(uri, name) {
  var link = document.createElement("a");
  link.download = name;
  link.href = uri;
  link.click();
}

saveButton.addEventListener('click', function() {

  html2canvas(cardContainer, {
    onrendered: function(canvas) {
      var myImage = canvas.toDataURL("image/png");
      downloadURI("data:" + myImage, "HappyHolidays.png");
    }
  });
});