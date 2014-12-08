---
title: Digital Security
description: Staying secure on the web and on your computer is the first thing you learn before starting to use them
keywords: computer, digital, security
---
When you understand how stupid computers are, mastering them and staying secure while using them are child's play. (That's why children are so good at it too)

Security can be broadly divided into [keeping your files and stuff safe](#offline-safety) and [staying safe on the internet](#online-safety).

##Offline Safety##
This is applicable to people who never connect to the internet. 

If you are absolutely alone, with no access to outside world, nobody coming in to chat with you, no new pen drives going into your USB ports; the only person who can delete files on your computer or otherwise cause avoidable problems is - *you yourself*

Assuming you don't indulge in self-harm, you should learn to protect yourself from others who (inadvertently at times) do harm to your files. Following these broad steps can help you prevent such unforeseen mistakes.

* Never leave your computer without locking it with a password. (Always set a password, to begin with). If you are going out even for a second, lock the screen. Ctrl+Alt+L will lock the screen on most GNU/Linux computers. Win+L on windows. 
* Never let others install stuff on your computer. They will always be careless.
* When installing anything, make sure you uncheck all "install ask toolbar FREE!" options.
* Never use sudo to install something that does not require sudo. For example, install python modules with virtualenv, install node libraries inside the home directory. Set up brew, bower, and other package managers such that they write to a user writeable directory.
* Make sure your file browser hides no files. View -> Show hidden files (in nautilus). Tools -> Folder Options -> View -> Uncheck Hide protected system files, Check Show hidden files (for windows explorer)
* Always keep file explorer in "details" view (not thumbnails or list). See the filetype, size, etc before opening them. Shortcuts almost always are viruses. (on windows)
* On windows : tools -> folder options -> view -> uncheck "hide extensions for known filetypes". You need to see the extensions for any file.
* Never open a file of the wrong type. If you are expecting a video, the format should be mp4, avi, wav, wma, ogg, mkv, 3gp, etc. For a document it would be pdf, doc, epub, etc. 
* Never open any file that has these extensions: exe, cmd, bat, lnk (shortcut) unless you know what you are doing.

##Online Safety##
The web is a place full of all kinds of people. And the moment you connect to the internet, you are leaving the safety of your walled house. Anyone, potentially anyone could harm you.

You can stay strong and safe with some basic precautions.

I plan to expand this section later.


###Private, secure communication###
Encryption is one word for safe communication on the net. Read about [public key cryptography](/public-key-cryptography/) which is now widely used to ensure that your communications are readable only by you and the recipient.
