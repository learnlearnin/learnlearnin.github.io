---
title: Programming
description: Programming is the art of taming your computer,
keywords: cs, computer science, programming, coding
---

## General reading

* [Programming is mostly thinking](http://agileotter.blogspot.com/2014/09/programming-is-mostly-thinking.html)

## Tips ##

* Do not copy paste code. Read code and type it out yourself from memory. ([Even protects you from Pastejacking](https://github.com/dxa4481/Pastejacking))
* Learn [software architecture](https://martinfowler.com/architecture/)
* Develop a philosophy of software engineering
  * [Core Design Principles for Software Developers by Venkat Subramaniam](https://www.youtube.com/watch?v=llGgO74uXMI)
  * [12 ways to make code suck less](https://www.youtube.com/watch?v=nVZE53IYi4w)

## Principles ##

Here are some principles that you can build on.

### Simplicity ###

> “I didn't have time to write a short letter, so I wrote a long one instead.”  - Mark Twain

The same applies to software. If you put thought, time, and effort into it, you can write simple software. What's simple software? A simple software is one which is easy to understand. This "ease" could be for users, but also for developers. The ease for users usually come from user experience design. The ease for developers come from architectural design of the code.

Code is written a few times, but read many many more times. Therefore, simple code is easy to read and understand. To fix bugs, you have to read code. To add features, you have to read code. To understand performance issues, you have to read code. Every time you make code that is hard to read, you make it hard to do anything with that code.

How do you make code simple to read and understand? There are many ways.

#### Use good variable names ###

If you name things well, it saves one level of indirection in your mind.

#### Single Responsibility ###

If something (a function, a class, a module, etc) does only one thing, it is easy to understand what it does.

#### Writing functions ####

* A function should not rely on any globals (even in python and javascript)
* Conversely, all the dependencies a function needs should be passed in as parameters.
* Use default parameter values if you do not want to supply parameters for all calls.
* If you think you will have too many dependencies, use a service locator object as the last dependency which includes all the services a function would need. But read the next point.
* A function should only go between layers adjacent to each other. For example, a function which receives HTTP request should never directly talk to a database because HTTP and database are not adjacent layers. The layers could be HTTP -> Receiver -> Business logic -> Repository -> Database
* If a function is so simple that it can directly talk to two far away layers, introduce an abstraction in the middle.

### Refactoring ###

Developers who get attached to code they write are dangerous. They learn new things about the software, but their learning doesn't get put into the code. They don't refactor code to include the new insights they've had about how things work together.

To be a good developer, get rid of attachments. Delete code ruthlessly. Refactor.

## Resources ##

* [The Amazon Builders' Library](https://aws.amazon.com/builders-library/)
* [Venkat Subramaniam](https://www.youtube.com/results?search_query=venkat+subramaniam)

## Skills ##

* [Skill levels of programmers](https://basecamp.com/handbook/titles-for-programmers)


## Frontend ##

Frontend web development consists of multiple fields that are confused for each other. There is:
* User experience design
* User interface design
* Software design
* API design (sometimes)

User experience is closely linked with product management and also influences API design. What does the home page of your app contain? Should people fill their whole profile at sign-up or do they get prompts for filling it after sign-up? What features of your website are built and which ones are dropped? All of these are questions that UX deals with.

Once these bigger questions are answered, each screen or page of the product will need to be designed with an aesthetic appeal that matches the experience intended. That is where user interface comes in.

Regardless of what the UX or UI is, any code that is written needs to be organized and designed in a way that allows it to be maintained and changed. This is where software design comes in.

If you are a frontend developer who thinks only about UI design, you need to think about the rest of the stack. The [principles in software design](#principles) remain constant across frontend, backend, and the rest of the stack.

### ReactJS / NextJS

To understand react, it is important to understand reactivity. And the best talk about this is that by [Rich Harris, the author of Svelte](https://www.youtube.com/watch?v=AdNJ3fydeao)

React Server Components are taking us back to the times of backend development. It is a whole new paradigm and one has to change their mental models about react to understand it. Here are some good resources:
* [Making Sense of React Server Components](https://www.joshwcomeau.com/react/server-components/)
* [RSC from Scratch](https://github.com/reactwg/server-components/discussions/5)
* [React for Two Computers Talk](https://www.youtube.com/watch?v=wcj5LSVcxJc)

