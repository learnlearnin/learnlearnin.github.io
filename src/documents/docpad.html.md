---
title: Docpad
description: Docpad along with yo generator makes life for web developers easier than anything
keywords: docpad, yo, yeoman, docpad-generator, html, web development
---
To begin with you need to get npm installed properly. DO NOT install this from Ubuntu official repository. It will give you all sorts of trouble later on upgrading and stuff.
I do not remember how I installed the stuff, but the ideal installation will let you update npm packages without sudo. This will involve placing NODE_PATH in ~/.bashrc and I am sure you can find out how to do that on your own.

But once you have node and npm correctly installed, installing docpad is a piece of cake. `npm install -g docpad`

FOr my workflow, you need yeoman generator also. `npm install -g yeoman`. It is then invoked via `yo` command

## Workflow ##
The workflow I use is the following.

### One time steps ###

    mkdir my-project
    cd my-project
    yo docpad
    
During the yo interactive choices, I choose gh-pages plugin also. This helps me deploy the site to github-pages easily. The gh-pages plugin might need a small configuration (which branch to push to). This is gh-pages by default. But if you are hosting an organization repo, you will need to change that to master (after renaming the source branch to "source" maybe?). Check [my docpad.coffee file](https://github.com/learnlearnin/learnlearnin.github.io/blob/source/docpad.coffee).
  
  
  
  
You will have to adjust various other settings in docpad.coffee and also change the layout and other things.  


Additionally, I create an alias in ~/.zshrc (or ~/.bashrc for bash people),`alias cdgh='git push && docpad deploy-ghpages --env static'`. This is useful in pushing all changes to source branch and master (or gh-pages) simultaneously.  

Now we are ready to hack away.  

### Each time steps ###
Every new post I need to make, I do just this.
````
vim src/newfile.html.md  #and edit that
git add src/newfile.html.md
git commit -m "added a newfile"
cdgh #our earlier alias
````
