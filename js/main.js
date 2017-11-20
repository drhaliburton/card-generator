var cardContainer = document.getElementById('card-container');
var cardTitle = document.getElementById('card-title');
var cardMsg = document.getElementById('card-msg');
var cardFrom = document.getElementById('card-from');

var formTitle = document.getElementById('title');
var formFrom = document.getElementById('from');
var formMsg = document.getElementById('msg');
var formImage = document.getElementById('image');

var saveButton = document.getElementById('save-button');



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

function downloadURI(uri, name) {
  var link = document.createElement("a");
  link.download = name;
  link.href = uri;
  link.click();
  //after creating link you should delete dynamic link
  //clearDynamicLink(link);
}


saveButton.addEventListener('click', function() {

  html2canvas(cardContainer, {
    onrendered: function(canvas) {
      var myImage = canvas.toDataURL("image/png");
      downloadURI("data:" + myImage, "yourImage.png");
    }
  });
});