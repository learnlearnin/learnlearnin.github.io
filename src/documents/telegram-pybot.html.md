---
title: Datamachine's telegram-pybot - building a bot for yourself
desciption: An introduction to telegram-pybot and building Telegram bots for oneself
keywords: telegram, python, bots
---
Datamachine studios has developed [telegram-pybot](https://github.com/datamachine/telegram-pybot) which is a beautiful, plugins based (similar to Yago's Lua based [telegram-bot](https://github.com/yagop/telegram-bot)) Python bot.

You can [read an introduction about it on my blog](http://asdofindia.blogspot.com/2015/05/early-preview-telegram-pybot-telegram.html).

## Dogfeeding ##
Now that we have a Python bot framework there is no more an excuse to not write your own Jacondas or Anacondas or what not?

Below, I shall put together a small high level overview of all that needs to be understood so that one can directly jump into building plugins for telegram-pybot and enjoy it in group chats. For all the low level details, it is preferrable to read the linked code, source, or docs.

## The chain ##
All useful interaction with any bot is a long chain of calls between different programs. It is fun to think of the actual physical connection and the software connection. Just for that fun:

* You, from your Telegram client send a command, say "/wiki Telegram" to a group in which the bot is running.
* Your telegram client converts into gibberish by encypting with MTProto and passes it over to your phone's data connection to be sent over.
* The mobile data carrier, using air waves picks up the data at the cell tower and hoping through all loops the data reaches Telegram server.
* Telegram server sends it to all members of the group, including the bot.
* And **here's where it gets interesting**. The bot is running vysheng's [tg](https://github.com/vysheng/tg), which decodes the MTProto encryption. It then passes the details about the message (sender, recipient, text, etc.) through the Python bindings.
* That's where telegram-pybot gets hold of the message. It runs it through the various plugins and passes control to the plugin that needs to run on each particular command.
* The plugin itself does the most specialized job of applying logic and composing a response. This could be:
 * A simple mapped response. Like, command "Hi" would return "Hello"
 * Some kind of processing and stuff. Say "2+2" returns "4"
 * Connecting to a web API/website and fetching a result. Say "/wiki Telegram" would go to wikipedia page on Telegram and fetch the first paragraph and respond with that. (**This is the part we have to code**)
* Once the plugin returns something the whole chain runs in reverse and you get a reply to your command.

## The Setup ##
This is the most difficult part or the easiest part depending on what you've been doing with your computer in your life. Here are the essentials required:
* A GNU/Linux or Mac OS X operating system (because tg-cli runs only on these). I use [Arch Linux](/archlinux/).
* Command line (Ctrl+Alt+T might work in most cases)
* Python 3.4, virtualenv, pip, git, etc. (install as and when command not found is thrown)
* An Internet connection
* A text editor. I use [atom](/atom-editor/).
* An alternate Telegram account. (Because the bot does not respond to its own messages)

### Downloading ###
Assuming you've all that handy, you can follow the instructions in [the readme](https://github.com/datamachine/telegram-pybot#telegram-pybot) of telegram-pybot to clone itself, clone tg, configure and make tg, and even launch the bot.

### tg-cli ###
This is probably the first biggest hurdle

#### #newhere ####

> If you've never used tg-cli you'll be asked to enter your phone number. And the input won't work because the bot runs in a subprocess.

Just do this
```
cd tg
bin/telegram-cli
```
enter your alternate phone number, verification code, and then
```
safe_quit
cd ..
./launch.sh
```

#### #oldhere ####

> If you have used tg-cli with your primary number once, the bot'll start running in that. And when I tried last night it wasn't able to respond to its own commands.

tg-cli comes with an excellent way to run multiple profiles. Profiles are defined in a [config file](https://github.com/vysheng/tg/blob/master/config.sample).

By default, the ~/.telegram-cli folder is used as the directory to save authentication info. There's a config file created in this folder automatically.  

Delete the ~/.telegram-cli folder, and follow #newhere steps to register your alternate number.

Later if you want to use your primary number, just create a new profile using ~/.telegram-cli/config and use -p switch while running bin/telegram-cli to choose that profile.

### Launch ###
`./launch.sh` is our command to run the bot. It'll take care of everything.

## Configuration ##
There is very little configuration to be done. In `permissions.conf`, `admins = 0` should become `admins = 1234567` if 1234567 is your Telegram user id. You can use tg-cli to find out your user id with the command `user_info YourName`

## Plugin Management ##
Plugin management is best done via a Telegram chat itself. Once you have added yourself as an admin, you will be authorized to use the PluginManager plugin and `!pkg update` will sync the plugin list. `pkg install dice` will install the dice plugin and so on.

## Writing your own plugin ##
This is the most interesting part.

### Plugin folder structure ###
For the sake of avoiding git, maintaining plugin repo, etc, we will build plugins directly inside the plugins folder inside telegram-pybot. If you are interested to see how an advanced plugin would look like, checkout the folder structure of [spyfall](https://github.com/datamachine/telegram-pybot-spyfall/)

### Sample plugin ###
Use the echo plugin in plugins folder to base your work on. Let's call our new plugin "ping-pong".
```
cp echo.py pingpong.py
cp echo.plugin pingpong.plugin
```
`pingpong.plugin` contains metadata about the plugin. Name and Module info are important in it. Change it to PingPong and pingpong respectively.

`pingpong.py` contains the basics of a plugin. Read the comments beneath to see what each line in this file does. The new function of our plugin is to respond with pong when someone says /ping.

```
import plugintypes
```
import plugintypes module so that we can subclass TelegramPlugin.
```
class PingPongPlugin(plugintypes.TelegramPlugin):
```
define a class called PingPongPlugin which's a subclass of TelegramPlugin
```
    """
    Just say pong when someone says ping
    """
```
This is just a docstring for developers
```
    patterns = [
        "^/ping$"
    ]
```
define the patterns that need to be captured by the plugin. This does a regex matching and we will talk about matching later. `^` refers to the beginning of a line and `$` refers to the end of a line.

```
    usage = [
        "/ping: pongs",
    ]
```
This is the string that is shown when someone says !help PingPong
```
    def run(self, msg, matches):
    ```
this is the function that'll run if our pattern matches. msg is the object that has all the information about the message that matched. matches is a python object that is the result of the match, it can be used to access the text that matched. We can ignore it now.

```
        return "pong"
```
whatever is returned is send as a message back to the user. In this case, pong

### Make this plugin seen ###
To enable this plugin we can manually edit `plugins.conf` file and add `;;PingPong` to the default_plugins_to_load list. Then launch the bot.

## Pattern matching ##
Pattern matching is an brain twister. Read Python docs of [re module](https://docs.python.org/3.4/library/re.html) to know how this works.

## Advanced ##
Plugins are even more fun when you can effectively use git to keep your plugin updated and curate plugins in a repository. Checkout [telegram-pybot-emoticons](https://github.com/datamachine/telegram-pybot-emoticons) to see a simple sample plugin structure.
The plugin repository structure can be seen [here](https://github.com/datamachine/telegram-pybot-plugin-repo). Although, a word of caution, there's a very good chance that this architecture will be overhauled soon.

## Iteration ##
This page goes through an iterative write-feedback-improve cycle. Please [give me ideas](/about/#contact) of how to improve this page. 
