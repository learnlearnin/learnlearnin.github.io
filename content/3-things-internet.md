---
title: "Three important things about the Internet that millions do not know"
description: "These are three fundamental things about the Internet that millions around the world do not know about. They will change the way you think about internet"
keywords: internet, privacy
img: internet-map.jpg
imgattr: '"<a href="https://commons.wikimedia.org/wiki/File:Internet_map_1024.jpg#mediaviewer/File:Internet_map_1024.jpg">Internet map 1024</a>" by <a href="//commons.wikimedia.org/w/index.php?title=Barrett_Lyon&amp;action=edit&amp;redlink=1" class="new" title="Barrett Lyon (page does not exist)">The Opte Project</a> - Originally from the <a href="//en.wikipedia.org/wiki/Main_Page" class="extiw" title="en:Main Page">English Wikipedia</a>; description page is/was <a class="external text" href="http://en.wikipedia.org/wiki/Image:Internet_map_1024.jpg">here</a>.. Licensed under <a title="Creative Commons Attribution 2.5" href="http://creativecommons.org/licenses/by/2.5">CC BY 2.5</a> via <a href="//commons.wikimedia.org/wiki/">Wikimedia Commons</a>.'
---
As the world is moving to the Internet for even grocery shopping, it is important that we stay informed about how the Internet works, lest we should be caught off guard by agencies that fight to destroy it.

In this article, I'll talk about three very important things about [the Internet](../web/)  that many people are unaware of.

## One: The Domain Name System ##
Every device that is connected to the Internet has a unique address called an IP address. This looks like 46.51.216.186 ([in the old format](https://en.wikipedia.org/wiki/IPv4)) or 2606:2800:220:6d:26bf:1447:1097:aa7 ([in the upcoming format](https://en.wikipedia.org/wiki/IPv6)).  

Even the servers of large websites like Wikipedia or small ones like Learn Learnin' are identified on the Internet with such IP addresses. For example, try going to [91.198.174.192](http://91.198.174.192/) in your browser and you should reach Wikimedia's central server.

But remembering such numbers is difficult for humans, and [whenever that happens computers](../computers/) come to our help. There is a simple but effective way of converting those random numbers to easily rememberable names like `wikipedia.org` or `learnlearn.in` and that is called Domain Name System ([DNS](https://en.wikipedia.org/wiki/Domain_Name_System)).

The DNS is like a phonebook service. You give it a name (say `duckduckgo.com`) and it gives you the corresponding IP address (`176.34.131.233` here). That way you do not have to remember the address and also, the address can easily be changed.

But normally you never come to know about the DNS because your browser (mine is Firefox) does this DNS lookup automatically for you. Whenever you enter a domain name or URL in the address bar (location bar), you are asking the browser to look that up in the DNS if required, get the IP address, and go to that website.

#### Why DNS is important ####
1. Government ordered censorship is commonly implemented by blocking websites at the DNS level. For example, recently [when the Government of India blocked ](https://www.loomio.org/d/nqX18GOa/statement-on-indian-government-censorship-of-the-internet) about 30 websites including github, which the author uses for code publishing, without any consideration about the innumerable legitimate users of those websites, most ISPs implemented just a DNS level block. That is, when you asked for github.com instead of showing the actual IP address of github, the DNS would return an IP address that leads to a message "blocked" or similar.
In these cases one can easily circumvent the censorship and reach the websites you need by changing the DNS server used by your computer or router.

2. Crackers can change the DNS server your computer uses and point you to wrong/fake websites. The [DNS server setting can quite easily be changed](http://samy.pl/usbdriveby/) and the attackers can then make your browser go through their computer before it visits banking sites, etc. This is why it is important to [look for the site identity button in Firefox](https://support.mozilla.org/kb/how-do-i-tell-if-my-connection-is-secure) while browsing.

## Two: Your ISP can monitor (almost) all your traffic ##
> An old man living alone on his farm writes to his son in prison. “Dear Jim, I’m feeling down because I’m just too old to plant my potato garden this year. It’s too much digging.” Jim write back. “Dad, don’t dig up the garden that’s where I buried the bodies!” That day a van full of FBI agents stormed into the backyard and dug up the entire garden. They didn’t find anything and left apologizing to the old man. Soon the farmer received another letter. “Dear Dad, It was the best I could do under the circumstances. Love, Jim”
> <footer> [Family Friend Jokes](http://www.familyfriendjokes.com/joke/father-son-prison-joke)</footer>

You are in the situation of this prisoner when you are using Internet. All your Internet traffic goes through your Internet Service Provider. They can and sometimes do monitor your traffic. This could be at a very low level - like amount of data that you consume (which is acceptable when you are paying for data consumed). But also, sometimes illegally, which sites you are visiting, what kind of traffic yours is, etc. This is how they [throttle download speed](https://en.wikipedia.org/wiki/Bandwidth_throttling) on torrent traffic.

#### How to protect your privacy then? ####
You have an advantage over the prisoner. Your computers can encrypt and decrypt messages at lightning speed. Therefore you could send encrypted messages that the prison guards cannot be reading.

This is the principle in action when you are visiting sites over the https protocol. When the site you are visiting is fully using https, your ISP can only see the domain name of the site you are visiting. They cannot even see which URL you are visiting as this is all encrypted in a secure fashion.

There are tools like [HTTPS Everywhere](https://www.eff.org/https-everywhere) which helps you use https wherever possible.

#### If I am sharing someone's WiFi, can that person see my traffic? ####
Yes. When you are using someone else's WiFi, that person gets all the powers the ISP gets when they grant you Internet access. All the traffic goes through their router and there are packet sniffing utilities which can capture all that traffic, and churn out your passwords, form entries, instant messages, almost all things. Sometimes even https traffic is not safe in these situations, especially when you are using your phone, because there is a fairly advanced technique called [Man in the Middle Attack](https://en.wikipedia.org/wiki/Man-in-the-middle_attack) through which someone can stand in between you and the website you are visiting and trick both sides into believing they are communicating with each other; and on your phone apps there usually is no safeguard in place to [verify the identity of the server you are communicating with](https://support.mozilla.org/kb/how-do-i-tell-if-my-connection-is-secure).

## Three: The Web is the largest public property in the world and the Internet is the largest public service ##
There are more than a billion users of the Internet. Yet, nobody controls the Internet. It is everyone's. The Web is larger than any other project in the world. It is the largest collaboration of people. It is made up of pieces contributed by everyone. Even this article is a piece of the Web.

All of this belongs to everyone. And it should always stay the same.

There are millions who are denied access to the Internet. There are even more people who do not even know what Internet is. There are thousands of activists who would be dead if it wasn't for the Internet protecting their anonymity, voices which are heard only because the Internet allows them to be heard. The Internet is changing the way we do things. What you can learn or do is no longer limited by where you are. You could be the son of a scammer in Nigeria, but you can [learn from the lecturers of MIT](http://ocw.mit.edu/).  You could be a mother of three, breastfeeding your youngest, while you are working on your company's next product. You could be [an anonymous blogger](http://bbc.com/news/magazine-19899540) in repressive societies, letting people know what is happening in your place. You can [ask questions to important people and get answers](http://www.reddit.com/r/IAmA/comments/z1c9z/i_am_barack_obama_president_of_the_united_states/). You can [connect with friends](https://diasporafoundation.org), discover fresh ideas, learn new skills, and reach out to people. The things you can do with Internet is limitless, as long as it stays open and free, the way it is now.

**And it is our duty to protect that openness and freedom of the Internet.** 

We must be responsible netizens who oppose any injustice done to the Internet in terms of controlling, censoring, distorting the neutrality of, or mounting surveillance via the Internet. Just as we stand up for ethical causes offline, we should stand up for the ethical issues about the Internet.

And when we are called for action, we must be prepared to protect the Internet - if not for us, for our future generations.  
