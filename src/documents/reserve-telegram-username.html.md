---
title: Reserve telegram username
---

If you don't want to do anything go down to lazy

If you're like my unfortunate friend Marco, and do not have a linux installation handy follow No-linux and then common.
If you have linux, node, and git, follow Linux and then common.

Linux
---

Download webogram by :

    git clone git@github.com:zhukov/webogram.git
    cd webogram

(You don't have to have git installed. Just use the link https://github.com/zhukov/webogram/archive/master.zip if you don't have git)

Run the server: 

    node server.js

Go to localhost:8000/app/index.html in a browser, log in with your phone number and get your keys and stuff from the server (this is required because after we change the schema webogram will stop working and you can't sign in)
ctrl+c the server to stop it

Open the file webogram/app/js/lib/config.js
We need to change the lines 78 and 80
78 should become "Config.Schema.API = " followed by whatever is in this file: https://core.telegram.org/scheme/json (just copy paste that)
80 should become "Config.Schema.API.layer = 18;" I think

Now that we've changed the API schema, 
Run the server again

    node server.js

Go to localhost:8000/app/index.html (The chats won't load because the schema is damaged)


No linux
----
First sign in and test stuff at [learnlearn.in/webogram](http://learnlearn.in/webogram)

Then, go to [learnlearn.in/webogram-broken](http://learnlearn.in/webogram-broken) where I have made the necessary changes


Common steps
----
Go to firefox -> tools -> web developer -> web console
In the console type this (where "whatever" is your username which you want):

	a=angular.injector(['myApp']);
	b=a.get('MtpApiManager');
	b.invokeApi('account.checkUsername',{username:"whatever"});
	b.invokeApi('account.updateUsername',{username:"whatever"});


If "Api call" "account.checkUsername" is followed by "Rpc response" "true" it means your username is available
And "Rpc response" "false" means your username is taken

Lazy
---
Go to learnlearn.in/webogram and sign in 
then go to learnlearn.in/webogram-broken
press ok for "runs"
scroll down.
Scroll down.
Enter username
Click "get username"
press ok for the username you entered
check with someone who runs cli