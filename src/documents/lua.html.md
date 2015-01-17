---
title: Lua
description: The wonderful scripting language
keywords: lua, luarocks, install
---

Lua is best used with luarocks.

When you install modules (say luasocket) you can do
```
luarocks --local install luasocket
```

To make these available for scripts, all you need to do is add
```
eval `luarocks path`
```
to your .bashrc or .zshrc. Credit: [Installing MPI for Lua](http://colberg.org/lua-mpi/INSTALL.html)
