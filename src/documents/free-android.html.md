---
title: Free Android
description: Free your Android phone from Google's hungry hold
keywords: foss, android, f-droid
---
You [can quit google](../quit-google/) without it affecting you in any way. And you should quit Google.

But since you probably have an Android phone (and efforts like [Firefox OS](https://developer.mozilla.org/Firefox_OS) no longer active) you are surrounded on all sides by Google. But since Google took help from everyone in making Android a success by making it "open source", we have LineageOS (previously CyanogenMod), Android Open Source Project (AOSP), etc coming to our rescue.

Here is how you get rid of Google from your phone.

## Easy way - which does not work ##

* Trust Google that it won't send your data via backdoors.
* Disable Google search, Gmail, Google Now Launcher, Google+, Google Hangouts, Youtube, Google Play Store, Google Play Music, Sync on all google accounts, everything with G on it via Settings -> Apps -> all apps -> app name -> disable (because uninstall is disabled)
* For Google apps that do not have a "disable" button in the UI, there is a workaround [popularized by FSMI](https://twitter.com/fsmi_in/status/1404284555209568257). For Android M and later - you can do `pm uninstall -k --user 0 com.android.vending`, etc where the com.android.vending is the example of the package name. [StackExchange has](https://android.stackexchange.com/questions/95975/how-can-i-disable-a-stock-app-that-has-its-disable-button-greyed-out#comment256728_114798) more details and workarounds for Kitkat and Lollipop.
* Install [f-droid](../f-droid/) and alternate apps listed below

## Slightly hard way - easily reversible - incomplete ##

* Root your phone
You most definitely have to find a way to root your phone by yourself. There is no one-click method for all the models. Just go to [forum.xda-developers.com](http://forum.xda-developers.com/) and search your phone model and find the root method. They usually have really detailed tutorials.

* [Install F-droid](../f-droid/) and alternate apps listed below.

* Install AFWall+ in whitelist mode and allow only your nice apps to communicate with internet.

## Harder way - retains android - more complete ##

* Flash [LineageOS](https://lineageos.org/). xda is where you go again. (If you are not able to root your device, it is most certain that you cannot install a custom ROM like LineageOS in it.)
* Do not flash gapps (Most xda tutorials will end with a step "flash gapps for google apps"). Our purpose of installing LineageOS was to get rid of Google apps. So it makes no natural sense to flash the same.
* Install [f-droid](../f-droid) and alternate apps listed below.

## Alternate apps

* Fennec / FFUpdater -> Firefox (for browsing)
* Element (Matrix client) (for communication)
* Osmand~ (for map & navigation)
* AFWall+ (for firewall)
* FairEmail or K-9 Mail (email client)
* Aegist Authenticator (2-factor / OTP app)
* AntennaPod (for podcasts)
* Aurora Store (for accessing google play APKs)
* DAVx⁵ (for calendar/contact synchronization)
* Fedilab (for microblogging/social network with fediverse)
* Feeel (home workouts)
* FreshRSS (for RSS feeds)
* Indic Keyboard (for a keyboard)
* Fritter (twitter front-end)
* Libera Reader (e-books)
* Nekogram X (Third party telegram client. There is also Telegram FOSS)
* RedReader (Third party reddit client)
* Tunerly (for tuning your stringed instruments)
* NewPipe (as youtube frontend)
