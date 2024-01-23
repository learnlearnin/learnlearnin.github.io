---
title: Internet Relay Chat (IRC)
description: The grandfather of chatrooms and instant messaging
keywords: irc, im, internet relay chat, chatroom, channels
---
IRC is the predecessor of all instant messaging apps in the market today. It is still actively used by Free Software communities around the world and of course for some other uses.

IRC is more of a protocol. People can run IRC servers on their own, using whatever server software they want. And client applications can connect to these servers.

For example, [Mozilla](../mozilla/) runs Moznet at irc.mozilla.org which is used by Mozillians around the world. I use hexchat on my computer, and atomic on my android phone as client apps to connect to IRC servers.

Once connected, one can join several channels (chatrooms, groups, whatever you call it) and strike up conversations with other users. For example, the most active channels on Mozilla server are #firefox, #introduction, #webmaker, etc.

When you connect to a server, you have the option to choose a nickname. This is much like a username. If you really care about it, most servers let you register your nick and set a password for it. 

That's enough basics, let's get started using IRC. I will write the rest of this article assuming that you are a volunteer for Mozilla wanting to join the conversation. 

## Client ##
Download a client. I'd say [Hexchat](https://hexchat.github.io/) is the best. It is a fork of the now obsolete XChat. After a while you will definitely be trying weechat, irssi, ChatZilla etc. Anyhow if you run Hexchat, you'll see a friendly window to select a network to join.

## Network ##
Most FOSS groups run their channels on Freenode, which is a really nice IRC network. But since Hexchat gives Freenode as the default choice, I want you to go down the list and choose Moznet. If you are on some other client, you might have to add the server on your own. In either case, Mozilla's IRC server is at irc.mozilla.org.

There are some really crazy networks like [foonetic](http://wiki.xkcd.com/irc/Main_Page) with channels in which you should not say anything that has never been said before, or you should say only such things that have been said before, etc.

## Nickname ## 
Try to come up with a creative nickname which is both fun and rememberable. To change nickname once you are connected to a server `/nick newnick`

## Channels ##
Channels start with a # in their name. That predated hashtags. Join #introduction on Moznet. `/join #introduction`

## Chat ##
Just send your message and start talking :D

## Mention someone ##
Hexchat, and most other clients, support tab completion of nicks. So when you're replying to someone in a chat, you just type the first few letters of their nick and tab, and your message can start (or include) their name. Most clients have some kind of notifcation when your nick is mentioned in a chat.

## Private Chat ##
Although you can start a private chat with users, it is generally considered intrusive. Many channels have a rule that you should ask for permission in the channel before you send a privaet message to anyone in the channel. Yet, you can try `/msg firebot hi`

## Bots ##
Don't be surprised if you get a reply from firebot saying yo. It is a bot. In fact it is a [lovely person](https://github.com/globau/firebot). Bots are first class citizens of IRC servers. They work for us tirelessly and amuse us at times.

## NickServ ##
NickServ is also kind of a bot. It is an official account found on most networks which serves nicknames to people. So if you really like your nickname, and want to keep it, you `/msg nickserv help` and then follow instructions to register you nickname. Once you register you can configure your client to automatically login with nickserv every time you connect to the network.

## ChanServ ##
ChanServ is a close relative of nickserv and helps in channel registration, management, etc. Channels are almost always given out in a first come first serve basis. So when you join a channel, and you're the only one in that channel, you become the operator of that channel. But when you disconnect you lose this privilege. ChanServ is a way to retain this privilege even while you are disconnected.

## Fun ##
`/me likes fun`
`/part #introduction I'll be back`
`/join #india`
`/whois firebot`

