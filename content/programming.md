---
title: Programming
description: Programming is the art of taming your computer,
keywords: cs, computer science, programming, coding
---

## General reading

* [Programming is mostly thinking](http://agileotter.blogspot.com/2014/09/programming-is-mostly-thinking.html?utm_source=hackernewsletter&utm_medium=email&utm_term=code&m=1)

## Tips ##

* Do not copy paste code. Read code and type it out yourself from memory. ([Even protects you from Pastejacking](https://github.com/dxa4481/Pastejacking))
* Use a text editor [you love](../atom-editor/)
* Learn [software architecture](https://martinfowler.com/architecture/)

### Writing functions ###

* A function should not rely on any globals (even in python and javascript)
* Conversely, all the dependencies a function needs should be passed in as parameters.
* Use default parameter values if you do not want to supply parameters for all calls.
* If you think you will have too many dependencies, use a service locator object as the last dependency which includes all the services a function would need. But read the next point.
* A function should only go between layers adjacent to each other. For example, a function which receives HTTP request should never directly talk to a database because HTTP and database are not adjacent layers. The layers could be HTTP -> Receiver -> Business logic -> Repository -> Database
* If a function is so simple that it can directly talk to two far away layers, introduce an abstraction in the middle.


## Resources ##

* [The Amazon Builders' Library](https://aws.amazon.com/builders-library/)
* [Venkat Subramaniam](https://www.youtube.com/results?search_query=venkat+subramaniam)

## Skills ##

* [Skill levels of programmers](https://basecamp.com/handbook/titles-for-programmers)
