---
title: Gnome, Shell, GTK, and everything
description: Setting up everything gnome
keywords: gnome, themes, suggestions, setup, how-to
---
Here's my set-up of desktop managers, its themes, etc. I'll just list down the steps I used on my favorite [Arch Linux](../archlinux/) to get to my current set up.

## GNOME display manager ##

Since I'm using GNOME Shell, GDM provides the most seamless integration. Although it is slightly slow, it works without problems.

I've gdm installed and running automatically at startup.

    pacman -S gdm
    systemctl enable gdm

## GNOME ##

I've tried various desktop environments in various stages of development and designed for various kinds of users. GNOME is a stable, yet highly developed; simple yet highly extensible; popular desktop environment.

    pacman -S gnome gnome-extra

To start using GNOME, choose GNOME in GDM while logging in.

Install Tweak tool to edit a myriad of options.

    pacman -S gnome-tweak-tool

## Shell extensions ##
Go to [extensions.gnome.org](http://extensions.gnome.org/) to install these:
* [AlternateTab](https://extensions.gnome.org/extension/15/alternatetab/)
* [Dash to Dock](https://extensions.gnome.org/extension/307/dash-to-dock/)
* [Hide top bar](https://extensions.gnome.org/extension/545/hide-top-bar/)

## Themes ##

A beautiful, material design based theme is [Paper](http://snwh.org/paper). To install it you can either download the tar balls and extract it to the specific folder, or clone git (so that updating is easier). Let's say you're cloning the repositories to ~/Downloads

    cd ~/Downloads
    git clone git@github.com:snwh/paper-gtk-theme.git
    git clone git@github.com:snwh/paper-icon-theme.git
    cd ~
    mkdir .themes # if doesn't exist
    mkdir .icons  # if doesn't exist
    ln -s ~/Downloads/paper-gtk-theme/Paper .themes/
    ln -s ~/Downloads/paper-icon-theme/Paper .icons/

You can now switch to these themes in Tweak tool -> Appearance -> (GTK+|Icons|Shell theme) -> Paper

To update the themes a month or so later, you just go to the respective directories in `~/Downloads` and do `git pull`

Now you can install some of [my favorite applications](../applications/).
