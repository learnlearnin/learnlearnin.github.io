---
title: Programming Languages
---

## Comparing languages

Every language has certain advantages and disadvantages. It is useful to understand these.

| JavaScript | Can run on the browser. Which means you ship to everyone on earth at once. Tightly coupled with web. For nodejs based things the advantage is a large number of libraries. There's also good concurrency model in terms of promises. |
| Java | Very very mature language. It has tons of users in the enterprise space and therefore the libraries and ecosystem around developing web services, etc are very mature |


### Philosophical issues

* [The issue with promises and how most languages have blue-red functions](https://journal.stuffwithstuff.com/2015/02/01/what-color-is-your-function/)
* [A response to that on why red-blue is good](https://blainehansen.me/post/red-blue-functions-are-actually-good/)


## Building new language, some considerations

* In [this talk Herb Sutter](https://www.youtube.com/watch?v=nhzyLY171XI) gives the importance of value, availability, and most importantly **compatibility** with previous language. They give example of python2/3, javascript->typescript, etc. This was linked to from [talk about Carbon](https://www.youtube.com/watch?v=omrY53kbVoA) which is an experimental successor to C++
