---
title: Gulp.js
description: Easy front end development with gulp.js - a primer
keywords: web, html, gulp, npm
---
Gulp is the slave of a front end developer to DRY concatting, minifying, uglifying, compressing, and everything.

Read [this beautiful introduction by Travis Maynard](http://travismaynard.com/writing/getting-started-with-gulp).

##Basics##
The absolute basic of gulp is that everything is piped.

##Tips##
Gulp runs tasks simultaneously. But sometimes you need to run them one after the other. For this, till [this issue](https://github.com/gulpjs/gulp/issues/355) is solved, you can use run-sequence as [pointed out by Tomasz Bujnowicz](https://github.com/tomaszbujnowicz/html5-boilerplate-gulp-less/blob/master/gulpfile.js#L9). For a sample such gulpfile, see [my gulpy branch of diaspora yatra](https://gitlab.com/asdofindia/diasporayatra/blob/gulpjs/gulpfile.js)
