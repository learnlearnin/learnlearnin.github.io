---
title: Android Development
description: How to get started as an android developer
keywords: os, mobile, android, development, studio
---

## Pre-requisites

First and foremost, you need to know Java and possibly Kotlin too. That is to say, you need to know the object oriented ways of these languages. You absolutely need to know what a null pointer is and how to program in Java in ways that you never see a null-pointer error. (Yes, that last requirement is the hardest. Null-pointers have got a lot to do with object initialization, object destruction, etc. The only way to avoid them is to write neat programs with clear separation of concerns. And if you know how to do that, it is easy to get started with Android programming)

You also need to have Android Studio and a computer that can run Android Studio without crashing.

## Architecture patterns

Listen to [Adam McNeilly talk about MVC, MVP, MVVM, and MVI](https://www.youtube.com/watch?v=T7A-JbJBjyg). That gives you a pretty good start on what these architectures do.

We will use Adam's [sampleapp](https://github.com/AdamMc331/MVWTF/tree/master/sampleapp) to learn rest of the stuff.

## Model

A model is the simplest thing to get started with. A model is like a plain old java object. But with one difference. It needs to be parcelable. [Why?](https://joaoalves.dev/posts/kotlin-playground/parcelable-in-kotlin-here-comes-parcelize/). One of the things with Android is that things keep getting destroyed. Read about Android activity life cycle for reading about this.


