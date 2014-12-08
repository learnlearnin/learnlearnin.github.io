---
title: Public Key Cryptography
description: Imagine you hold the key to an auto-locking lock. Anyone can send you a suitcase locked with that. But only you can open it.
keywords: cryptography, rsa, modular arithmetic, dh key exchange
---
There are two levels of understanding public key cryptography and assymmetric cryptography (which are very important in [security](/security/)

* The superficial details of [how it works](#how-it-works) in practice
* The exciting [math behind it](#the-math-behind-it)

They are both interesting and will be presented (with links of course) on this page.

##How it works##
[PGP manual](http://www.pgpi.org/doc/pgpintro/) gives a very simple introduction to cryptography leading to the inner workings of pgp. 

To be precise, all messages are encrypted with the recipients public key, and decrypted by the recipient using their own private key. The private key and public key are an intricately tied together unique pair of keys that can lock what the other closed and close what the other opens. 

To safely execute this algorithm, we make use of software like `gpg`. Enigmail plugin for thunderbird, and [openkeychain](https://play.google.com/store/apps/details?id=org.sufficientlysecure.keychain) app for android along with [k-9 mail](https://play.google.com/store/apps/details?id=com.fsck.k9) allows communication on computer and phone respectively. 

First, we create a key pair - **the private key and the public key**. Along with it, we also create a **revokation certificate** which we will keep separate and safe, so that in case we lose our keys (which is very likely for people like me) we could use the revokation certificate to establish our identity to say the key is no longer valid.

GPG does not save the key in plaintext. It secures the key itself by encrypting it with a passphrase. Forgetting this passphrase is an easy way to lose your keys earlier on.

We will add different identities inside this key. Different email addresses, mainly.

Then, we submit our public key to various keyservers around the world, which will make our identity and public key searchable. Notice that anyone can create a key on [anyone's identity](http://pgp.mit.edu/pks/lookup?search=rms%40gnu.org&op=index) and therefore, verification of the key is an important and non-optional step. The verification is done by comparing key fingerprint, or asking a lot of people we trust to have verified others (web of trust - trusting the friend of friend of friend).

Once we have a few public keys of our friends imported to our computer, we can send them messages encrypted with their public key such that only they can decrypt them. 

Encryption and decryption does not necessarily have to be within email communication. One can encrypt any piece of text or whatever and write the encrypted version (probably not write, maybe copy paste) and send them in any means to the recipient (USBs, floppys, CDs - remember spy movies?)

###Put it simply###

Encryption is like locking something. They key is the only thing that can open the lock.

Public key cryptography involves creation of special kinds of locks which can be locked with one key and opened with a different key. Distributing the locker key and keeping the opener key safe = successfully keeping secrets.

Here is another, more detailed into to [what it is, and some math behind it.](http://math.uchicago.edu/~mann/encryption.pdf)

##The math behind it##
To understand the math behind public key encryption, there are certain prerequisites.

* [Modular arithmetic](http://www.math.rutgers.edu/~erowland/modulararithmetic.html) - [page on wikipedia](https://en.wikipedia.org/wiki/Modular_arithmetic)
* [Fermat's theorem and Chinese remainder theorem](http://mathcircle.berkeley.edu/BMC3/rsa/node6.html)

Now we can read about the actual rsa math.

* [a concise introduction](http://pajhome.org.uk/crypt/rsa/maths.html)
* [a somewhat detailed introduction](http://mathcircle.berkeley.edu/BMC3/rsa/node4.html)
* [one more concise text to recheck the understanding](http://www.woodmann.com/crackz/Tutorials/Rsa.htm)

Congrats! Now you can move to setting up pgp on all your devices.

