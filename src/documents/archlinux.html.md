---
title: Arch Linux
description: An intro to why arch is arch
keywords: arch, distro, linux, best
---
Arch Linux is my favorite Linux distro, for the following reasons:

* It does not contain anything 
* It contains everything
* It does not decide anything
* It helps you decide everything

After having used [bosslinux](http://bosslinux.in/) and [Linux Mint](http://linuxmint.com/) for a few months, I was using Ubuntu for a few years. 

But then, I was tired of the package management system, not knowing exactly how the configurations worked, etc. and so I started [lfs](http://www.linuxfromscratch.org/). This was a fail since I never proceeded after building the build tools.

That is when I discovered arch, its excellent wiki, and everything good.

Arch is special because when it is first installed, it is just kernel, build tools, and a log in shell. After that, following the wiki, you can install whichever [applications](https://wiki.archlinux.org/index.php/List_of_Applications) you want. And that is a blessing because I do not want bloatware on my computers.

Also, configuration of every application is documented on the Arch Wiki.

Then, the most beautiful concept called Arch User Repository. Anyone can build arch packages and submit it to the AUR. This can easily be installed by anyone else. 

## My Installation ##
I followed the Arch Installation Guide and got most things working. I had to figure out a few quirks, though.

### Disable auto-suspend on lid close ###
Read wiki: [Power Management](https://wiki.archlinux.org/index.php/Power_management)

Set `HandleLidSwitch` to `lock` in `/etc/systemd/logind.conf`

`systemctl restart systemd-logind.service` to take effect.

### DM ###
After going through all DEs I settled on Gnome Shell.

I was using lightdm as the DM but then Gnome Shell's screen lock won't work with lightdm, so I had to switch to gdm. And it works super awesome after that.