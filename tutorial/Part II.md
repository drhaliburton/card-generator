## Styling, Animations & Reponsive Design With CSS

Welcome back! Now that we have our lovely card generator structured, it's time for some fun with CSS. CSS is wildly powerful and doesn't get enough credit for the hard work it does for your webpage. You can do so much with CSS, like:

	- Spacing and positioning your elements
	- Changing your font styles and colors
	- Adding borders and background images
	- Creating hover effects 
	- Animations and transitions
	- Responsive design to add custom styling for different screen sizes

Now, I can't help you much with this step of the project - it's up to you to research the different CSS properties to achieve card design you have in mind. Don't worry, I'll give you as many tools as you'll need and lead you down a few paths to explore - but CSS is all about aethestics. It's your personal brand and style that will make your card unique. I always start by sketching out a rough idea of what I want end product to look like, choose my colour scheme and make sure I'm happy with my layout before getting started. 

Before you start styling, I recommend getting familiar with DevTools, a *very* useful tool for playing with your CSS style and HTML page structure. DevTools allows you to interact and change the HTML & CSS on *any* webpage and ,ost browsers like Chrome, FireFox or Safari will come with this handy tool included. Learning how to leverage the power of dev tools for exploring and playing with your code **will** drastically improve your life. Learn more about the different features and how to use DevTools in [this tutorial](http://blog.galvanize.com/how-to-use-chrome-devtools-for-the-absolute-beginner/).

### Styling basic card

Here's my beautiful, yet simple card. Let's explore some of the basic CSS styles I've used.

![img](https://i.imgur.com/ctYPFR9.jpg)

First up, take a look at my text container and you'll notice that lovely cursive font. Over in our <code>index.html</code> file we've included a link tag: 

<code>\<link href="https://fonts.googleapis.com/css?family=Dancing+Script|Roboto+Slab" rel="stylesheet"></code>

This little nugget is adding two fonts called 'Dancing Script' and 'Roboto Slab' to our project directly from [Google Fonts](https://fonts.google.com/). Google Fonts is a great free resource for adding more font variety to your projects than what your browser will include by default. If you want to add a custom fonts, browse their library and find a font that you enjoy and hit the red '+' button to genereate a link tag to include in your <code>index.html</code> file.

Once you've imported your desired fonts, you can use them by name in your CSS <code>font-family</code> declarations  - below I've set all of our <code>h1 & h2</code> tags to use our cursive 'Dancing Script' font imported from Google, and adjusted some of the default sizes to better suit our card size.

<pre><code>h1, h2 {
  color: darkred;
  font-family: 'Dancing Script', cursive;
}
h1 {
  font-size: 6rem;
}
h2 {
  font-size: 4rem;
}
p {
  font-size: 1.8rem;
  padding-left: 1rem;
}
</pre></code>

You'll also notice I'ved added something called <code>padding</code> to our paragraph (<code>\<p></code>). Padding or margins can be added to any of your elements to add help align and add buffer spacing between your elements. I recommend reading up on the [box model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Box_model) or try out a [Codecademy course](https://www.codecademy.com/courses/learn-css-box-model/lessons/box-model-intro/exercises/box-model-intro?action=lesson_resume&course_redirect=learn-css) to get a better understanding on how and when to use each box model property.

You'll see we've applied some padding, a maximum height and a few other small CSS tweaks to our card container and elements to make sure our text content is well positioned within our card container. Feel free to play with this structure using your *DevTools* to tweak your card to your liking.

<pre><code>\#card-container {
  background-color: white;
}
.text-container {
  padding: 4rem 1rem 2rem 1rem;
  max-height: 500px;
  overflow: scroll;
}
\#card-from {
  float: right;
  padding-right: 1rem;
}
</pre></code>

Lastly, we have our image. I've included this lovely festive image of my dream family using the <code><img></code> tag, but you can use any image you'd like. In the code below, I've removed any margin and set it to occupy 100% of it's container's width. In this case, our image is in our <code>two-thirds column</code>, which means the image will stretch to fit the whole third of our card. 

In order to prevent our image from stretching and distorting our beautiful family's faces, the property <code>object-fit: cover;</code> will ensure we preseve the original image's aspect ratio. Finally, we floated the image to the right of it's container to make sure there is no extra white space to the right of our should we include an image that doesn't fit the whole container.

<pre><code>img {
  height: 500px;
  width: 100%;
  margin: 0;
  float: right;
  object-fit: cover;
}
</pre></code>

### CSS Animations
CSS animations are pretty mind blowing and it's incredible what some artists can creating using just code. Check out some of [these animations](https://webdesign.tutsplus.com/articles/15-inspiring-examples-of-css-animation-on-codepen--cms-23937) if you don't believe me. Animations can be used to create anything from a loading screen spinner to a pulsating gradient background - if you're curious about how, read more about [building your own animations](https://css-tricks.com/almanac/properties/a/animation/).

As someone who is admittedly artistically challenged, I like to stand on the shoulders of giants when I'm looking for a neat animation. Say we want to have a card that has blinking Christmas lights in it - I'm going to pop over to Google and ask the experts. A quick search for [Christmas Lights CSS](https://www.google.ca/search?ei=rZskWp7gCqa4jAOkqJQI&q=christmas+lights+css&oq=christmas+lights+css&gs_l=psy-ab.3..0j0i30k1.2384.2384.0.2854.1.1.0.0.0.0.159.159.0j1.1.0....0...1c.1.64.psy-ab..0.1.159....0.UVm3XvLXvCo) turns up *CodePen* links where kind folks have graced us with their CSS magic.

Don't celebrate Christmas, or maybe you're tired of looking at the lights? Tack 'CSS animation' of what you're looking for and you will likely be in luck, like some [Hanukkah candles](https://codepen.io/laviperchik/pen/vjwnI) or some [falling snow](https://codepen.io/NickyCDK/pen/AIonk). Keep in mind you'll likely need to tweak the CSS to fit in with your page structure and style.

Let's add some snow over our card image! We'll need to add <code>\<div id="snow">\</div></code> to our card file to hold our snow animation just under our image - the image column in our card container should now look like this.

<pre><code>\<div class="two-thirds column">
	\<img src="./img/our-family.jpg">
	\<div id="snow">\</div>
\</div>
</pre></code>





Now we can add code for the snow CSS animation to our <code>card.css</code> file:

<pre><code>\#snow{
    background: none;
    font-family: Androgyne;
    background-image: url('http://www.wearewebstars.dk/codepen/img/s1.png'), url('http://www.wearewebstars.dk/codepen/img//s2.png'), url('http://www.wearewebstars.dk/codepen/img//s3.png');
    height: 400px;
    left: 0;
    position: relative;
    top: 0;
    width: 100%;
    z-index:1;
    -webkit-animation: snow 10s linear infinite;
    -moz-animation: snow 10s linear infinite;
    -ms-animation: snow 10s linear infinite;
    animation: snow 10s linear infinite;
}
@keyframes snow {
  0% {background-position: 0px 0px, 0px 0px, 0px 0px;}
  50% {background-position: 500px 500px, 100px 200px, -100px 150px;}
  100% {background-position: 500px 1000px, 200px 400px, -100px 300px;}
}
@-moz-keyframes snow {
  0% {background-position: 0px 0px, 0px 0px, 0px 0px;}
  50% {background-position: 500px 500px, 100px 200px, -100px 150px;}
  100% {background-position: 400px 1000px, 200px 400px, 100px 300px;}
}
@-webkit-keyframes snow {
  0% {background-position: 0px 0px, 0px 0px, 0px 0px;}
  50% {background-position: 500px 500px, 100px 200px, -100px 150px;}
  100% {background-position: 500px 1000px, 200px 400px, -100px 300px;}
}
@-ms-keyframes snow {
  0% {background-position: 0px 0px, 0px 0px, 0px 0px;}
  50% {background-position: 500px 500px, 100px 200px, -100px 150px;}
  100% {background-position: 500px 1000px, 200px 400px, -100px 300px;}
}</pre></code>

When you refresh the page, you should see some dainty snow falling over your card's image.


### Pseudo Classes

Pseudo classes allow you to add conditional styles depending on different actions your user is taking - like hovering over an element, focusing an input field or visiting a link. You can learn more about the [different pseudo classes here](https://css-tricks.com/pseudo-class-selectors/).

Our CSS framework Skeleton comes with some default styles that are decidedly un-festive, like the blue outline when we focus our form input fields and our bland white and grey 'save' button. Let's fix that!

We're going to start by targeting the <code>\<input></code> and <code>\<textarea></code> fields and updating their border color when they are in *focus* - focus means when the input element as been selected and a user is able to type. We can use the <code>:focus</code> pseudo class to change our border-color, using the !important flag to make sure our styles will override the default input:focus styling imported from Skeleton. 

Add the following to your <code>main.css</code> file to update your input field border on focus.

<pre><code>input:focus, textarea:focus {
    border-color: darkgreen !important;
}
</pre></code>

Let's also add an effect to our save button that will update the background-color and the font color when a user hovers over the button.

<pre><code>button:hover {
    background-color: darkred;
    color: white;
    border: white;
}
</pre></code>

### Responsive Design

One of the most beautiful parts of using a grid system (like we have with Skeleton) to structure our page is the built-in responsiveness of our columns. If you shrink your screen size, notice how your form and card container columns collapse neatly and beautifully into one column?

Using *media queries*, you're able to customize different CSS rules to apply depending on the width of your screen. This is incredibly important in our modern-era of devices that come in all shapes and sizes. This allows us to redestribute our page elements and add custom sizing for mobile or tablet devices in addition to standard desktop screens.

Now you probably saw that as you shrink your screen, the our card message disapears outside of the card frame. Let's add a media query to adjust our styling around where our card starts to break so we always have enough real-estate for our message.

Here's what a media query would look like to change our *column width* and *image height* on screens that are *smaller* than 750px wide. You can add this at the bottom of your <code>card.css</code> file.

<pre><code>@media (max-width: 750px) {
  .one-third.column, .two-thirds.column {
    width: 100%;
    float: none;
  }
  .column {
    margin: 0;
  }
  img {
    height: auto;
  }
}
</pre></code>

Try out some different media queries to adjust the style and layout of your card on different screen sizes - you can read [this article](https://www.tutorialrepublic.com/css-tutorial/css3-media-queries.php) or try out a [tutorial on media queries](https://internetingishard.com/html-and-css/responsive-design/) to learn a little more about responsive styling.
