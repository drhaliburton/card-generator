# Part III: JavaScript and the Document Object Model

Now that we've created something beautiful, we're going to explore how to bring your page to life. JavaScript allows you to dictate how your page will interact with it's users when they interact with your page. We'll walk through how to add some basic functionality but JavaScript opens a whole other dimension of interaction that is really only limited by your understanding of the language. I really loved the Odin Project's [Web Develpment 101](https://www.theodinproject.com/courses/web-development-101) course for hands-on practice and Wes Bos has been an invaluable resource for both JS wizardry and terrible jokes - try out his [JavaScript 30](https://javascript30.com/) challenge.

In order for someone to be able to fill out and save their own card, we'll need to cover how to:

	- Find and select elements on our page 
	- Listen for user events
	- Attach event listeners to specific elements
	- React to user events

## Client Side vs. Server Side

Today, we'll only be working with the *Document Object* using *Client Side* (Front-End) JavaScript. Client-side JavaScript runs in your user's Browser after the HTML has loaded, allowing you to respond to events and manipulate it's content. *Server Side* (Back-End) code runs before the page is loaded to setup and deliver the content from the server hosting the webpage. Later on in this project, we'll be using GitHub pages to handle the Server Side setup and to host our project to share with others. If you want to learn more about Back-End programming with JavaScript, explore Node.js with the folks from [NodeSchool](https://nodeschool.io/).

Learning the differences between *Front-End/Back-End* or *Client Side/Server Side* early on is useful to give you perspective on the bigger picture of building published a full-scale web app vs. a static page. The Odin Project covers this well, or [read up on the essentials](http://blog.teamtreehouse.com/i-dont-speak-your-language-frontend-vs-backend).


## DOM Selection & Manipulation

Okay so now we have a little context on why JavaScript is *wonderful*, let's make it useful. All of our JavaScript will be added in our `main.js` file, which has been linked in our `<script>` tag at the bottom of our `index.html` file.

We're going to start by grabbing the different elements and manipulating the *Document Object Model*, most fondly known as *the DOM*. Honestly, the DOM is just your markup - the HTML and CSS you wrote in Part I & II. Open up your DevTools and there she is. Read up on the basics of the DOM [here](https://css-tricks.com/dom/) and then [this short article](https://www.theodinproject.com/courses/web-development-101/lessons/dom-manipulation) from the Odin Project covering the essentials of DOM manipulation. This one is manditory 🚧.

So let's take a look at our form and start grabbing the different elements we're going to need. Add this to the top of your `main.js` file.

````
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
````

Using our first selector as an example `document.getElementById('card-container')`, we're searching through our DOM for the element that has been tagged with the CSS Id `#card-container`, and then storing a reference to that DOM element in a *variable*. Variables are like shorthand references to help keep our code cleaner and easier to read. You can create new variables using the `var` delcaration, a variable name of your choice `var cardContainer`, and then assigning it a value `var cardContainer = document.getElementById('card-container')`.

The big upside to using `getElementById` is that we have already tagged each of the form elements we knew we would need to manipulate. Seeing CSS Ids can only be used *once*, we can be fairly certain that our `document.getElementById('card-container')` selector will give us the right element. You'll need to know more about JavaScript loops and conditionals when you start selecting multiple elements and NodeLists, which you can learn about in [this chapter on the DOM](https://eloquentjavascript.net/13_dom.html) from Eloquent JavaScript.


## Event listeners

With all of our elements neatly stored in their variables, we can now attach our *Event Listeners* to trigger a response to a user's actions. Once an event takes place, we can then react by running a function, adding or removing DOM elements, manipulating content on the page or changing CSS properties to name a few. 

Read up on events and how we can react to them in [this chapter on handling events](https://eloquentjavascript.net/14_event.html) from Eloquent JavaScript and check out [this list](https://developer.mozilla.org/ru/docs/Web/Events) of all the events that you can listen for.

To start, we're going to be listening to changes to the contents of our form fields, and then updating the corresponding text value on our card. You can [see it in action here](https://drhaliburton.github.io/card-generator/). 

First, we need to add our event listener to the reference to our DOM elements stored in our variable. Let's take the `formTitle` and attach a listener for the `keyup` event. The `keyup` event will fire anytime a user releases a keyboard key while the `formTitle` input field is *focused*.

````
formTitle.addEventListener('keyup', function(event) {

})
````

When the `keyup` event fires, it will run a *function* consisting of the behaviour that we tell it to do. When a user releases a key, we want to take the value from the `formTitle` input field and replace the value in our `cardTitle` element.

Luckily when an event is fired, we have access to something called the *event object*, which will give us the details about what element triggered the event [amongst other things](https://javascript.info/introduction-browser-events#event-object). Seeing we've attached our event to our `formTitle` input field, we can access value the user inputted using `event.target.value`.

We now can access the value of our card's title using our `cardTitle.innerText` and assigning it a new value using the equals sign, similarly to how we assigned our variables their values. 


````
formTitle.addEventListener('keyup', function(event) {
  cardTitle.innerText = event.target.value;
})

formFrom.addEventListener('keyup', function(event) {
  cardFrom.innerText = event.target.value;
})

formMsg.addEventListener('keyup', function(event) {
  cardMsg.innerText = event.target.value;
})

````

Next up, we can allow users their select from your list of images. We'll add a `change` event listener which will fire when a selection is changed, and update `cardImage`'s `src` attribute with our `formImage` select field's value.

````
formImage.addEventListener('change', function(event) {
  cardImage.src = event.target.value;
})
````

Last, we're going to add a `click` handler for our `saveButton`. As is implied, this will trigger anytime your user clicks on your 'save card' button. Buttons inside forms have the default behaviour of *submitting* your form, and your HTML form is smart enough to try and do this with any button you add inside of your `<form>` tags. In order to stop your webpage from attempting to do what it's told when a user clicks on the form's `saveButton`, we can add `event.preventDefault();` at top of our function to (you guessed it) prevent the default behaviour.

````
saveButton.addEventListener('click', function(event) {
	event.preventDefault();

});

````

We'll cover the functionality for inside your click handler to save a card in the next tutorial.
