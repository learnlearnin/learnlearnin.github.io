---
title: vim
description: The advanced editor
keywords: vim, text editor
---
Learning vim might seem a futile exercise when modern day editors like [atom](/atom-editor/) are available.

But the beauty and strength of vim is appreciated the moment you enter a remote console. All of a sudden you feel like handicapped, without your pretty mouse. Using vim is like training for a day when you might become blind by choosing to close your eyes. And while you're at it, you could add that extra strength even when you can see.

Vim apparently has the largest learning curve. But only if you're trying to do all the advanced things on day 1.

## Modes ##

**Vim is not Notepad** (nor nano)

The moment someone enters `vim newfile` in their terminal they're facing an empty slate that looks just like it needs some text to be written. This is the first step where people get really stuck. In vim, there are three different modes. 

1. command mode (default)
2. insert mode (notepad mode)
3. last line mode (the actual command mode)

When you just entered vim, you were in command mode. And command mode does not let you type things. For that you need to enter insert mode, by pressing i or Insert button. To go back to command mode, you press Esc. To go to last line mode, from command mode, enter :

## Edit, exit ##
To successfully use vim like notepad, all you need to know are these.

* Moving around is done in command mode.
    * Use h, j, k, l to move around
* Typing is done in insert mode. 
    * Move cursor wherever you want, and enter insert mode. Type text.
* Saving and quitting is done in last line mode
    * Tap Esc, Type :wq
    * : takes you to last line mode
    * w writes the file
    * q quits

That's it. That's all you need to know to use vim like notepad. 

## Configuration ##
Vim configuration is done in `~/.vimrc`

## Plugins ##
If vim is atom-editor, vim plugins are atom packages.

### Installation ###
Usual way of installing is by placing the plugin's .vim file in ~/.vim/plugin/
But we will use Vundle for managing plugins. 

Here are my favourite plugins and their useful commands and configuration.

### Vundle ###
[Vundle](https://github.com/gmarik/Vundle.vim) should probably be the first plugin you install. An alternative is [Pathogen](https://github.com/tpope/vim-pathogen). 

Follow the [Vundle installation guide](https://github.com/gmarik/Vundle.vim#quick-start) and you should be having no problem getting started.

One thing you should remember is that although there's a command :PluginInstall which allows you to download and install plugins, for example, `:PluginInstall scrooloose/nerdcommenter` will download nerdcommenter plugin from github repo of scrooloose, plugins downloaded in this way should be added to the .vimrc manually. So it might make sense to add those plugins to the .vimrc first, and then run `:PluginInstall`

### vim-gnupg ###
[vim-gnupg](https://github.com/jamessan/vim-gnupg/) is a must use plugin when you use gpg. 

With it, whenever you create a file with extensions *.gpg, *.pgp, etc a list of recipients is asked for and the file is encrypted automatically on write quit. Thus saving you the trouble of writing confidential information in plain text and then `gpg -e`-ing that. This plugin basically eliminates that step.

Also, if you're opening a *.gpg file signed with your public key, it will automatically ask for your passphrase and decrypt it on the fly.

If you don't want to lookup `gpg --list-keys` each time you are creating an encrypted file, you can edit .vimrc and include the recipients like this:
```
let g:GPGPossibleRecipients=[
 \"Example User <example@example.com>",
 \"Other User <otherexample@example.com>"
\]
```
With that, any new file will automatically be populated by those recipients, but commented out. You can uncomment to add recipient.

### vim-fugitive ###
[vim-fugitive](https://github.com/tpope/vim-fugitive) allows easy integration with git.

### emmet-vim ###
[emmet-vim](https://github.com/mattn/emmet-vim/) is useful if you are an HTML writer. It allows you to write things like "html:5" press Ctrl+y followed by , and suddenly you will have the basic layout of an empty html page.

### sparkup ###
[sparkup](https://github.com/rstacruz/sparkup) is the perfect companion for emmet-vim. Sparkup lets you write `div#header`, press Ctrl+e and you have a div with id header opened and closed for you.
