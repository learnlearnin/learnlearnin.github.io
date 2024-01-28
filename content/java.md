---
title: Java
description: Java programming tips and tricks
keywords: java, jvm
---

The first thing about programming in Java is that one should try to use [Kotlin](https://kotlinlang.org/) if possible and use Java only if absolutely required.

Some other points I figured out:
* Most frameworks that implement standards won't be very much documented on what they do or how they do it. This is because the standards itself form some sort of documentation. Find the standard on [jcp.org](https://jcp.org/) and read from there to get context on how implementations work.
* Think in terms of real life objects for everything. When writing methods, try to use declarative style that lambdas and streams bring.
* On that matter, listen to [every talk by Venkat Subramaniam](https://www.youtube.com/results?search_query=venkat+devoxx)


### Database / Persistence ###

It will be tempting to use Hibernate. [But it is cake mix](https://vimeo.com/28885655). Use [jooq](https://jooq.org/) if you want. Or even [sql2o](https://www.sql2o.org/).

### Web Development ###

#### JAX-RS ####

* [Intercepting Jersey resource method calls](https://blog.dejavu.sk/intercepting-jersey-resource-method-calls/)
