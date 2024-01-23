---
title: Gnome, Shell, GTK, and everything
description: Setting up everything gnome
keywords: gnome, themes, suggestions, setup, how-to
---
Before Gnome started removing all useful features from applications and I switched to [KDE](../kde/), I was using Gnome for a long time.

Here's my Gnome set-up. I'll just list down the steps I used on my favorite [Arch Linux](../archlinux/) to get to my current set up.

## GNOME display manager ##

For GNOME Shell, GDM provides the most seamless integration. Although it is slightly slow, it works without problems.

I'd gdm installed and running automatically at startup.

    pacman -S gdm
    systemctl enable gdm

## GNOME ##

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
