---
title: Reserve telegram username
---

Download webogram by :

    git clone git@github.com:zhukov/webogram.git
    cd webogram

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
Go to firefox -> tools -> web developer -> web console
In the console type this (where "whatever" is your username which you want):

	a=angular.injector(['myApp']);
	b=a.get('MtpApiManager');
	b.invokeApi('account.checkUsername',{username:"whatever"});
	b.invokeApi('account.updateUsername',{username:"whatever"});


If "Api call" "account.checkUsername" is followed by "Rpc response" "true" it means your username is available
And "Rpc response" "false" means your username is taken