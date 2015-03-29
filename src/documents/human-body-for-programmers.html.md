---
title: Human Body for Programmers
description: Developer documentation for the human body
keywords: api, human body, programmers, developers
---
Human body is a heavily object oriented, object dependent, rate limited interface driven multi-modular structure.

To write down documentation for it is a heavy task. Yet, I shall attempt to give an overview of the way things work.

## Object Oriented ##
Everything in the human body is an object. In fact, these are real objects. And they are sometimes consumed during the running of the process. Therefore there is a rate limit on some interfaces.  

Take, for example, an endothelial cell. It is an instance of the endothelial cell class. The endothelial cell class is a subclass of the cell class. There are a lot of interfaces available on an endothelial cell class. For example, the Insulin receptor interface. This can take an Insulin object as its parameter. One Insulin instance cannot act on more than one cell instance at a time. The Insulin receptor interface is designed in such a way that when an Insulin object binds to it, it opens up another interface called the sugar interface. Simple sugar objects can bind to this interface. In fact, these objects are consumed by the interface (taken up inside the class). 
