---
title: DRY (Don't Repeat Yourself)
keywords: dry, coding, best practice
description: If a coder writes the same code twice, he's doing it wrong
---
Coders should never repeat themselves. Not just coders, anyone. That is a terrible waste of anyone's time.

That is why I write things down. Once you write your mind down somewhere, every time you have to pour out your ideas on something, you can just link people to what you've written down already and use that time to write more things.

When it comes to coding, there're very many ways to not repeat oneself.

## Functions ##
Create functions, and smaller functions, and even more functions. [But don't get trapped in creating all serving functions either](https://xkcd.com/974/).

## Libraries ##
First, never code something yourself when there's a library for it.

Second, when you code something that could be a library, make it a library and reuse it.

## Automation ##
Everything can be automated (except maybe the creativity part). Do not type out code, use snippets. Do not compile manually, use Makefile. For every language, there are automation tools that does most repeated tasks with a single command.

Like [gulp](../gulpjs/), grunt (and yeoman) for [web development](../web-development/).
