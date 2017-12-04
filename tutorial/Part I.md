
#Building A Holiday Card Generator

Hello, welcome! We're here today to channel some of that Holiday break boredom into a productive, useful project that can set you on the right foot come the new year. It was around this time last year that I started to prep for the Web Development Bootcamp at Lighthouse and I found myself lost at where to start. I wanted to build something productive, not just walk through tutorials teaching me rules and syntaxes. That's what I'm hoping this tutorial will provide for you! A little guide on building a small semi-useful project that can open different doors for you to explore the fundamentals of building a webpage.

Tthis tutorial isn't just about teaching you the basics of coding - my goal is that you'll come away from this project with a better understanding of what is possible to build with just the basics, and to give you some ideas of the tools that Developers use everyday.

**So what are we building?** Seeing 'tis the season, let's put together a simple Holiday card generator! This will give you the chance to explore page structure with HTML, styling and animations with CSS and functionality with JavaScript. We'll be covering:

	- Project setup and Github
	- Building a basic webpage with HTML
	- CSS frameworks and grids
	- CSS styling and animations
	- JavaScript: listening for events & responding with functions
	- jQuery & the Document Object Model (DOM)
	- html2canvas to save your code as a .jpg image

You can see what I've made for [my Holiday card generator here](https://drhaliburton.github.io/card-generator/) as an idea of what we're working towards, but the most important part of this tutorial isn't to copy what I've created! This is YOUR holiday card, and you should explore the limits of CSS to make something incredibly unique that represents your aesthetic. Everything on the page can be customized with your own code, this is just our guideline.

On top of the coding bits, we'll be learning about *Git and Github* for managing and hosting your projects to share with others and how to leverage the mountains of code seasoned Developers have already built for you by importing *CSS & JavaScript frameworks*.

Well I know that sounds like a lot, so this we'll break down the tutorial into a few different sections. I recommend tackling each section one day at a time to give your brain a break, plus it is the Holidays after all and you are still obligated to spend *some* time with your family. Sorry.

To get started, I'm making the assumption that you've dabbled in some basic coding. While there's nothing overly complicated about what we're taking on, having an understanding of simple HTML & CSS will be very useful. If you haven't explored the basics yet, it doesn't take long to get caught up! Take a few hours to try out some courses like the [HTML & CSS Essentials](https://lighthouse-labs.thinkific.com/courses/html-and-css) courses or some CodeAcademy modules and you'll be in good shape.

## Project Setup

Alright, so let's get started with some simple project setup. You're going to need a **basic code editor**, something like [Atom](https://atom.io/) or [Sublime](https://www.sublimetext.com/). This is where you'll write your code and manage your project's files.

Let's first walk through some of the basics of Github and Git. Both are essential to life as a Developer, but you will not need any prior knowledge to use them for our project. 


Most developers out there use a service like [Github](https://github.com/) to host all of their project files and versions - it's sort of like a coding social network. Not only does this make it easy to share and contribute to projects from all around the world, it's a safe haven to store your projects should your computer bite the dust. If you want to get more familiar with Github before we get started, check out their traditional ['Hello World' tutorial](https://guides.github.com/activities/hello-world/).

**Now get yourself setup with a Github account**. It's not 100% necessary for now, but we'll be using [Github Pages](https://pages.github.com/) to host our card generator later on in the project and it's useful to get familiar with Github's interface.

To get started on our Holiday Card Generator, you'll need to download the boilerplate I've shared through my Github page.

1. Grab the starter files [found here](https://github.com/drhaliburton/card-generator-boilerplate). Click the big green 'Clone or download' button and hit Download Zip, or clone using Git if you decide to take on the <a href='#stretch-goal'>stretch goal below</a>. 

2. Open the project folder with your preferred code editor.


3. Open up the index.html file - that's what we'll explore first.

## Building Your Page Structure

I like to think that a webpage is like an apartment - HTML is your walls & furniture, CSS is your paint colours and ceiling height, animations are like those smooth no-slam drawers, and then JavaScript is the electricity that powers the joint.

But before we can move in and start decorating, let's build our walls and set up the furniture. When you open up your <code>index.html</code> file, you'll see some basic tags.

- <code>\<title\></code> & <code>\<meta\></code> tags which will help search engines like Google show your page to the right people. 

- <code>\<link\></code> tags to import your CSS files


- <code>\<body\></code> tag to hold your page structure


- <code>\<script></code> tags to import your JavaScript files


Notice in our <code>\<link\></code> tags, we've included a stylesheet called <code>skeleton.css</code>. Skeleton is a CSS framework of premade styles to simplfy building our page. There are many different CSS frameworks available, like the popular [Bootstrap](https://getbootstrap.com/) or [Bulma](https://bulma.io/) so feel free to explore others.

To get an idea of some of the basic pre-build styles Skeleton gives us, you can visit their *[documentation](http://getskeleton.com/)*.  Here you'll find a list of all the classes and id for the different styles you may want to use, as well as seeing the default styles that will be applied on everything you add to your page.

One example of the default styling we'll see right away as we start to build our card generator are with form's. In your <code>\<body\></code>, add a basic form that will accept the data for the message on your card, like the greeting title, image, your message content and your signature.

<pre><code>\<form>
	\<label for="title">Card Title:\</label>
	\<input type="text" id="title" name="title">
	\<label for="from">From:\</label>
	\<input type="text" id="from" name="from">
	\<label for="image">Background Image:\</label>
	\<input type="text" id="image" name="image">
	\<label for="msg">Message:\</label>
	\<textarea id="msg" name="message">\</textarea>
	\<button id="save-button">Save Card\</button>
\</form>
</pre></code>

Here's where we can start to see the benefits of using a CSS framework - the default styles from Skeleton are applied on our new form giving them a much smoother feel than the browser defaults. 

<center>
<img src="https://i.imgur.com/YoKLMMi.png" style="width: 40%">
<img src="https://i.imgur.com/mC4hY3z.png" style="width: 40%">
</center>

One of the key benefits a framework like Skeleton can offer us on top of the default styles are pre-built CSS classes that make up grid to structure our page. A grid allows us to easily divide our page into <code>rows</code> and <code>columns</code> that will occupy a set width depending on which column size you choose. Visit the documentation for [Skeleton's grid](http://getskeleton.com/#grid) for a detailed visual of how their columns work and lets apply that to building our page and card's structure.

Looking at our form, it seems like it would look better split into two columns. We'll need to create a form container to wrap the whole <code>row</code> and then split the form elements into two half sized <code>columns</code>, which woud look like this:

<pre><code>\<div class="row form-container">
	\<div class="one-half column">\</div>
	\<div class="one-half column">\</div>
\</div>
</pre></code>

Now let's add our form code into our new columns:

<pre><code>\<div class="row form-container">
	\<div class="one-half column">
	    \<form>
		\<label for="title">Card Title:\</label>
		\<input type="text" id="title" name="title">
		\<label for="from">From:\</label>
		\<input type="text" id="from" name="from">
		\<label for="image">Background Image:\</label>
		\<input type="text" id="image" name="image">
	\</div>
	\<div class="one-half column">
	  \<form>
	    \<label for="msg">Message:\</label>
	    \<textarea id="msg" name="message">\</textarea>
	    \<button id="save-button">Save Card\</button>
	  \</form>
	\</div>
\</div>
</pre></code>

Perfect! Our forms should now be split into two lovely columns, leaving us more space to build our card container. You can take some creative liberty for your card layout and build whatever structure you'd like, but I'm going to make two-column card like the one below.

![img](https://i.imgur.com/ctYPFR9.jpg)

Let's set up our card container with a one-third column to hold our text content and a two-third column to hold the image. 

<pre><code>
\<div id="card-container" class="row">
    \<div class="one-third column text-container">
       \<h1 id="card-title">Happy Holidays!\</h1>
       \<p id="card-msg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et efficitur nulla, non convallis purus. Proin faucibus tellus nulla, a convallis nisi tincidunt quis. Nulla lacus felis, iaculis vel magna eu, faucibus porta est.\</p>
       \<h2 id="card-from">Love Aunt Debbie\</h2>
    \</div>
    \<div class="two-thirds column">
      \<img src="./img/our-family.jpg">
    \</div>
  \</div>
\</div>
</pre></code>

Alright! Looking sharp. 

![our basic card generator](https://i.imgur.com/8FD6e63.jpg)

We've split our form and card containers into organized columns, and we have the start to a wonderful webpage. The boilerplate project that we're working out of includes some basic CSS styling for this card layout, but we'll be tackling customization with CSS shortly so don't worry if this doesn't quite fit your vision.


If you want to dive deeper into the world of structuring your HTML layout using CSS, you can learn about [building your own grid system](https://www.sitepoint.com/understanding-css-grid-systems/), or I encourage you to explore [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) or [CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) as newer alternatives to using a grid framework.


#### <span id="stretch-goal">Stretch Goal: Using Git to Manage Your Project

While it's in no way necessary for this project, learning the basics of Git early on will help you build your skills using the best practices of profession developers and will simplify managing your projects when you get the hang of it. Try learning enough about Git to manage your project on Github using Git from the Command Line (😅)! 

Git is used for something called *Version Control* which allows developers to easily keep track of project versions, see changes between old and new code files, segment projects into branches and so much more. Git is most often used as a *Command Line Tool*, which at first can seem intimdating but very quickly makes you feel VERY COOL. Like hackerman cool. 

To get started, you'll need to download Git and get familiar with the basic commands. You can get Git [direct from the source here](https://git-scm.com/downloads) or take a look through [Git - the simple guide](
http://rogerdudler.github.io/git-guide/). If you want to dive a little deeper than our project requires, make your way through [Git-it](http://jlord.us/git-it/challenges/get_git.html), a simple tutorial that walks you through how to leverage the benefits of using Git.

*Want to clone our project repository using Git from the command line? Try this:*
<code>git clone https://github.com/drhaliburton/card-generator-boilerplate</code>




