
#Coding Practice: Building A Holiday Card Generator

Hello, welcome! It was around this time last year when I started prepping for the Web Development Bootcamp at Lighthouse, and I really enjoyed tinkering with small projects over learning syntaxes and walking through tutorials. It was nice to have some down time over the Holidays to focus on playing with the basics which helped build my excitement for starting the program. I put together this little tutorial that will hopefully give you the opportunity to tinker, with lots of resources to explore web development and design a little futhur. 

If you're considering taking a coding Bootcamp, having a good grasp of structure, styling, event handlers and DOM manipulation can be endlessly useful, and isn't always covered in a prep course. It's worth practicing and fiddling with your CSS to get a solid grasp of the sometimes frustrating complexities of building even a simple webpage.

**What are we making?** Seeing 'tis the season, let's put together a simple Holiday card generator! This will give you the chance to explore page structure with HTML, styling and animations with CSS and functionality with JavaScript. 

	- Project setup and Github
	- Building a basic webpage with HTML
	- CSS frameworks and grids
	- CSS styling and animations
	- jQuery & the Document Object Model (DOM)
	- html2canvas to save your code as a .jpg image

You can see what I've made for [my card generator here](https://drhaliburton.github.io/card-generator/), but the most important part of this tutorial isn't to copy what I've created! This is your project, and you should explore the limits of CSS to make something incredibly unique that represents your aesthetic. Everything on the page can be customized with your own code, this is just a guideline.

On top of the coding bits, we'll use *Github* for managing and hosting projects and how to leverage the mountains of code seasoned Developers have already built with *CSS & JavaScript frameworks*. While there's nothing overly complicated about what we're taking on, having an understanding of simple HTML & CSS will be very useful. If you haven't explored the basics yet, it doesn't take long to get caught up! Take a few hours to try out some courses like the [HTML & CSS Essentials](https://lighthouse-labs.thinkific.com/courses/html-and-css) courses or some Codecademy modules and you'll be in good shape.

## Project Setup

Alright, so let's get started with some simple project setup. You're going to need a **basic code editor**, something like [Atom](https://atom.io/) or [Sublime](https://www.sublimetext.com/). This is where you'll write your code and manage your project's files.

Most developers out there use a service like [Github](https://github.com/) to store their project files and versions. It makes it easy to contribute to projects from all around the world and is a safe haven for your code should your computer bite the dust. If you want to get more familiar with Github, check out their traditional ['Hello World' tutorial](https://guides.github.com/activities/hello-world/).

**Register for a Github account**. We'll be using [Github Pages](https://pages.github.com/) to host our card generator later on in the project and it's useful to get familiar with Github's interface. To get started on our Holiday Card Generator, you'll need to download the boilerplate I've shared through my Github page.

1. Grab the starter files [found here](https://github.com/drhaliburton/card-generator-boilerplate). Click the big green 'Clone or download' button and hit Download Zip, or clone using Git if you decide to take on the <a href='#stretch-goal'>stretch goal below</a>. 

2. Unzip the folder and open the project with your preferred code editor.


3. Open the index.html file in your browser and take a look at the `index.html` file in your code editor - that's what we'll explore first.

## Building Your Page Structure

I like to think that a webpage is like an apartment - HTML is your walls & furniture, CSS is your paint colours, animations are those smooth no-slam drawers, and JavaScript is the electricity that powers the joint. But before we can move in and start decorating, let's build our walls and set up the furniture. 

When you open up your `index.html` file, you'll see some basic tags.

- `<title\>` & `<meta\>` tags which will help search engines like Google show your page to the right people. 

- `<link\>` tags to import your CSS files


- `<body\>` tag to hold your page structure


- `<script>` tags to import your JavaScript files


Notice in our `<link\>` tags, we've included a stylesheet called `skeleton.css`. Skeleton is a CSS framework of premade styles to simplfy building our page. There are many different CSS frameworks available, like the popular [Bootstrap](https://getbootstrap.com/) or [Bulma](https://bulma.io/). To get an idea of some of the basic pre-build styles Skeleton gives us, you can visit their *[documentation](http://getskeleton.com/)*.

One example of the default styling are with forms. In your `<body\>`, add a basic form that will accept the data for the message on your card, like the greeting title, image, your message content and your signature.

````
<form>
	<label for="title">Card Title:</label>
	<input type="text" id="title" name="title">
	<label for="from">From:</label>
	<input type="text" id="from" name="from">
	<label for="image">Background Image:</label>
	<input type="text" id="image" name="image">
	<label for="msg">Message:</label>
	<textarea id="msg" name="message"></textarea>
	<button id="save-button">Save Card</button>
</form>
````

*Make sure you refresh the `index.html` page in your browser to see your changes.*

Here's where we can start to see the benefits of using a CSS framework - the default styles from our framework are applied on our new form giving them a much smoother feel than the browser defaults. 

<center>
<img src="https://i.imgur.com/YoKLMMi.png" style="width: 40%">
<img src="https://i.imgur.com/mC4hY3z.png" style="width: 40%">
</center>

Another benefit of using a CSS framework is a pre-defined grid system. A grid system allows us to easily divide our page into `rows` and `columns` that will occupy a set width depending on which column size you choose. Visit the documentation for [Skeleton's grid system](http://getskeleton.com/#grid) for a detailed visual their columns and lets apply that to building our page and card's structure.

Looking at our form, it seems like it would look better split into two columns. Create a form container to wrap the whole `row` and then split the form elements into two half sized `columns`:

````
<div class="row form-container">
	<div class="one-half column"></div>
	<div class="one-half column"></div>
</div>
````

Now let's add our form code into our new columns:

````
<div class="row form-container">
	<div class="one-half column">
	    <form>
		<label for="title">Card Title:</label>
		<input type="text" id="title" name="title">
		<label for="from">From:</label>
		<input type="text" id="from" name="from">
		<label for="image">Background Image:</label>
		<input type="text" id="image" name="image">
	</div>
	<div class="one-half column">
	  <form>
	    <label for="msg">Message:</label>
	    <textarea id="msg" name="message"></textarea>
	    <button id="save-button">Save Card</button>
	  </form>
	</div>
</div>
````

Perfect! Our forms should now be split into two lovely columns, leaving us more space to build our card container. You can take some creative liberty for your card layout and build whatever structure you'd like, but I'm going to make two-column card like the one below.

![img](https://i.imgur.com/ctYPFR9.jpg)

I set up my card container with a `one-third column` to hold the text content and a `two-thirds column` to hold the image. 

````
<div id="card-container" class="row">
   <div class="one-third column text-container">
       <h1 id="card-title">Happy Holidays!\</h1>
       <p id="card-msg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et efficitur nulla, non convallis purus. Proin faucibus tellus nulla, a convallis nisi tincidunt quis. Nulla lacus felis, iaculis vel magna eu, faucibus porta est.\</p>
       <h2 id="card-from">Love Aunt Debbie\</h2>
    </div>
    <div class="two-thirds column">
      <img src="./img/our-family.jpg">
    </div>
  </div>
</div>
````

![our basic card generator](https://i.imgur.com/8FD6e63.jpg)

Looking sharp 😎. We've split our form and card containers into organized columns, and we have the start to a wonderful webpage. The boilerplate project that we're working out of includes some basic CSS styling for this card layout, but we'll be tackling customization with CSS shortly so don't worry if this doesn't quite fit your vision.


If you want to dive deeper into the world of structuring your HTML layout using CSS, you can learn about [building your own grid system](https://www.sitepoint.com/understanding-css-grid-systems/), or I encourage you to explore [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) or [CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) as newer alternatives to using a grid framework.


#### <span id="stretch-goal">Stretch Goal: Using Git to Manage Your Project

While it's in no way necessary for this project, learning the basics of Git early on will help you build your skills using the best practices of professional developers. Try learning enough about Git to manage your project on Github using Git from the Command Line (😅)! 

Git is used for something called *Version Control* which allows developers to easily keep track of project versions, see changes between old and new code files, segment projects into branches and so much more. Git is most often used as a *Command Line Tool*, which at first can seem intimdating but very quickly makes you feel VERY COOL. Like hackerman cool. `

To get started, you'll need to download Git and get familiar with the basic commands. You can get Git [direct from the source here](https://git-scm.com/downloads) or take a look through [Git - the simple guide](
http://rogerdudler.github.io/git-guide/). If you want to dive a even deeper, make your way through [Git-it](http://jlord.us/git-it/challenges/get_git.html), a simple tutorial that walks you through how to leverage the benefits of using Git.

*Try cloning the boilerplate repository from the command line:*
`git clone https://github.com/drhaliburton/card-generator-boilerplate`




