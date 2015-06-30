---
title: Node.js
description: Node.js or io.js
keywords: nodejs, iojs
---
Node is the web developers' operating system. (No, [really](https://github.com/NodeOS/NodeOS)).

It allows you to build anything using javascript.

Setting up node is the most difficult part of getting started with node.

[Follow this tutorial to set up node and npm](https://github.com/joyent/node/wiki/Installation).

A word of caution: Do not install node from Ubuntu/Debian official repository. It will give you all sorts of trouble later on upgrading and stuff.

I do not remember how I installed the stuff, but the ideal installation will let you update npm packages without sudo. This will involve placing NODE_PATH in ~/.bashrc and I am sure you can find out how to do that on your own.

But once you have node and npm correctly installed, installing any node app globally will be like `$ npm install -g appname` and won't require `sudo`

Node.js [goes well with Unix philosophy](http://blog.izs.me/post/48281998870/unix-philosophy-and-node-js)

## Related ##
* [Browserify](http://browserify.org/) - lets you use node modules in the browser
