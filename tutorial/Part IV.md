# Part IV: JavaScript Libraries & Github Pages

Deploying your project is thrilling - you get to share what you're building and maybe make life a little more pleasant for those using your page. That's one of the beautiful parts of the developer community; sharing and benefitting from eachother's hard work, which is what we're going to be covering in our last section. Specifically, sharing your page and using other people's pre-built functionality found in *libraries*. 

HTML2Canvas is a neat little library we can use to turn our code into a image. Importing libraries like HTML2Canvas can help carry the weight for heavier tasks, like mapping our DOM structure and building a image representation of our card container. We're using this library in particular mostly because it's easy to import and use for a static like ours - it's not the only option, so feel free to search for alternatives.

One of the downsides is that all of the images that you use will need to be *hosted* on the same domain as your project. That's another reason why deploying our project using GitHub pages will be valuable - we can add all the images we want to use for our card generator to our project folder and GitHub will host them on the same domain along. Populate your `<select>` form element with as many images options as you want to provide but make sure they're all in your `img` folder before you upload your project.

You can explore the docs for HTML2Canvas [here](https://html2canvas.hertzen.com/) - we'll be using this inside our 'save card' button click handler in our `main.js` file. 

````
saveButton.addEventListener('click', function(event) {
  event.preventDefault();
  
  html2canvas(cardContainer, {
    onrendered: function(canvas) {
      var myImage = canvas.toDataURL("image/png");
      downloadURI("data:" + myImage, "HappyHolidays.png");
    }
  });
  
});
````

Functions are invaluable snippets of reusable code, where you can pass in different variables and send back the results of whatever operations you want to perform. They are essential to all aspects of JavaScript and you'll encounter a million ways to learn to use them. Get started by covering the [basics with MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions) or [try some exercises](http://www.learn-js.org/en/Functions).

The `html2canvas();` function runs whenever our `saveButton` is clicked, which will convert our `cardContainer` and store a reference to it in a variable called `myImage`. We then call the `downloadURI();` function provided in your boilerplate code (and below) which will download the card onto the user's device!

````
function downloadURI(uri, name) {
  var link = document.createElement("a");
  link.download = name;
  link.href = uri;
  link.click();
}
````

And there you have it. Our basic card generator is done, and you have a playground to play with your basic HTML, CSS and JavaScript skills! Now we can launch it for the world to enjoy.

# Deploying to GitHub Pages

In order to get your card generator live, you're going to need your [Github account](https://github.com/). If you haven't yet, it's a great time to go through the [Hello World](https://guides.github.com/activities/hello-world/) tutorial and fire up your own repo. If you already have an account, hit the '+' button in the top right hand corner and follow the steps. You'll need to make sure it's `public` and make sure what you name your repository well - the name of your repo will be part of the `url` you share!

Now is a great time to tackle the you're going to want to tackle the git stretch goal. You'll also need to learn some simple file navigation with the *command line* - walk through [this Codecademy tutorial](https://www.codecademy.com/courses/learn-the-command-line/lessons/navigation/exercises/your-first-command?action=lesson_resume) to get familiar with the basic commands.

Git is used for something called *Version Control* which allows developers to easily keep track of project versions, see changes between old and new code files, segment projects into branches and so much more. To get started, you'll need to download Git and get familiar with the basic commands. You can get Git [direct from the source here](https://git-scm.com/downloads) or take a look through [Git - the simple guide](
http://rogerdudler.github.io/git-guide/). If you want to dive a even deeper, make your way through [Git-it](http://jlord.us/git-it/challenges/get_git.html), a simple tutorial that walks you through how to leverage the benefits of using Git or check out the Odin Project's [chapter on git](https://www.theodinproject.com/courses/web-development-101/lessons/introduction-to-git).

Once you are comfortable with the command line and git, let's commit and push your project into your new repo.  Follow [these instructions](https://help.github.com/articles/adding-a-remote/) to set up a remote to your repository from within your project folder.

````
git add *
git commit -m "your commit message"
````

You'll need to grab the link to your remote by hitting the 'Clone or download' button on your empty repo. 

![image](https://i.imgur.com/9PAz7TE.png)

 For me, that command would look like:

`git remote add origin https://github.com/drhaliburton/card-generator.git
`

Then, push your repo to your newly added `remote origin`.

`git push origin master`

Your files should now be hosted within your new repository. Now other users can see your coding chops and even make *pull requests* to add to your projects. Technically, that makes your card generator your first contribution to the *open source* community.

![image](https://i.imgur.com/C9meffp.png)

Now that your code and your images are hosted, it's time to pull the magic lever to publish your page to the world wide web. In your repository settings, find the 'Github Pages' settings and select the branch you want to publish - in this case, it'll likely be the master branch. Once your page is published, you can see it live at the link provided (`https://<your-username>.github.io/<repository-name>/`). When you push new code to your master branch, your page will be re-deployed within a few minutes with your changes.

![image](https://i.imgur.com/ow0NPFM.png)

Congrats! You're now a published web developer. You can now pump out your Holiday greetings en-masse and share your project with others to send some holiday e-cheer. I hope you were able to get a broader picture of all of the tiny moving pieces that make up the front-end of a web app, and that you have enough resources to keep tinkering. If you need more coding resources, find some links to online and in-person tutorials in [How To Learn To Code](https://lighthouselabs.ca/blog/how-to-learn-to-code-a-comprehensive-guide).




