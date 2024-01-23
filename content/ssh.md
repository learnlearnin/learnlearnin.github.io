---
title: SSH
description: How to use SSH the best way
keywords: ssh, mosh
---

SSH allows you to work on remote computers as if it is yours.

I usually change /etc/ssh/sshd_config to include `PermitRootLogin no` and `PasswordAuthentication no`

I also use mosh and tmux.

It is possible to setup [two factor authentication through PAM](https://wiki.archlinux.org/index.php/Secure_Shell#Two-factor_authentication_and_public_keys). 