+++
title = 'BlocklistEmailDomains'
description = 'MediaWiki extension to block sign-up from specified email domains'
keywords = ['mediawiki']
+++

BlocklistEmailDomains helps you to specify bad domains from which sign-ups won't be permitted. If you have already restricted your wiki to only allow emailconfirmed users to edit, but find that spammers sign-up from temporarily/disposable email addresses, you will find this extension valuable.

## Installation

Download the extension code to your extensions folder:

```
cd extensions
git clone https://github.com/asdofindia/BlocklistEmailDomains.git
```

Enable the extension and set path to your blocklist by editing your `LocalSettings.php`:
```
wfLoadExtension( 'BlocklistEmailDomains' );
$wgBEDBadDomainsPath = "/path/to/blocklist.txt";
```

Make sure the blocklist exists at the given path. The format of the file is simply one domain name in each line, like this:

```
example.com
example.org
mailmenot.io
sharklasers.com
dynainbox.com
```

## Configuration

Presently, the only configuration is $wgBEDBadDomainsPath as shown above. It has to be absolute path to a local file.

## Important

Do note that this works only if email is passed in during account creation. You might want to set `$wgEmailConfirmToEdit = true;` in your `LocalSettings.php` such that it becomes mandatory to pass in email for sign-up. Read the documentation of [wgEmailConfirmToEdit](https://www.mediawiki.org/wiki/Manual:$wgEmailConfirmToEdit).

## Blocklist

It is intentional that there's no blocklist distributed with the extension. It would be difficult to maintain a continuously updated blocklist. You can find a blocklist online, like [disposable-email-domains](https://github.com/disposable-email-domains/disposable-email-domains/) and set up your own mechanism to keep it updated.
