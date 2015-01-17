---
title: GSM SIM Secret codes
description: These codes can help do things when your phone settings fail
keywords: secret codes
---

TO DIVERT CALLS
ACTION 	CODE
Deactivate call diverts 	##002#@
Deactivate all conditional diverts 	##004#@
Activate all conditional diverts 	**004*DestinationNumber#@

@ = Send/OK button on your mobile phone

DIVERT ALL CALLS
Action 	Hash Codes
Deactivate automatically divert all calls to Destination Number 	##21#@
Deactivate automatically divert all calls to Destination Number 	#21#@
Set and Activate divert all calls to 	**21*DestinationNumber#@
Activate divert all calls 	*21#@
Status of automatically divert all calls to Destination Number 	*#21#@

@ = Send/OK button on your mobile phone

CALLNOT ANSWERED
ACTION 	CODE
Activate and Set call divertion when not answered 	**61*DestinationNumber#@
Deactivate and turn off call divert when not answered 	##61#
Deactivate call divert 	#61#@
Activate call divertion 	*61#@

@ = Send/OK button on your mobile phone



DIVERTS FOR ALL CALLS
ACTION 	CODE
Set and Activate divert all calls to 	**21*DestinationNumber#@
Activate divert all calls 	*21#@
Deactivate divert all calls 	#21#@
Status of automatically divert all calls to Destination Number 	*#21#@

@ = Send/OK button on your mobile phone

DIVERTS WHEN PHONE IS UNREACHABLE
ACTION 	CODE
Activate call divert when not reachable 	**62*DestinationNumber#@
Activate call divert 	*62#@
Deactivate and turn off call divert if unreachable 	##62#@
Deactivate call divert 	#62#@
Status of call divert if not reachable 	*#62#@

@ = Send/OK button on your mobile phone


DIVERT WHEN PHONE IS BUSY
ACTION 	CODE
Activate call divert when busy (engaged on another call) 	**67*DestinationNumber#@
Activate call divert when busy 	*67#@
Deactivate call divert when busy 	##67#@
Deactivate call divert when busy 	#67#@
Status of call divert when busy 	*#67#@



BARRING ALL OUTGOING CallS
ACTION 	CODE
Change password for call barring 	**03*330*oldPW*newPW*newPW#@
Activate barring for all outgoing calls 	**33*PW#@
Deactivate barring for all out going calls 	#33*PW#@
Statusbarring for all out going calls 	*#33#@

@ = Send/OK button on your mobile phone

BARRING ALL CALLS
ACTION 	CODE
Activate barring for all calls 	**330*PW#@
Deactivate barring for all calls 	#330*PW#@
Statusbaring for all calls 	*#330*PW#@

@ = Send/OK button on your mobile phone



BARRING ALL OUTGOING INTERNATIONAL CallS
ACTION 	CODE
Activate barring for all outgoing international calls 	**331*PW#@
Deactivate barring for all outgoing international calls 	#331*PW#@
Statusbarring all outgoing international calls 	*#331#@


BARRING ALL OUTGOING CALLS
ACTION 	CODE
Activate barring all outgoing calls 	**333*PW#@
Deactivate barring all outgoing calls 	#333*PW#@
Statusbarring all outgoing calls 	*#333#@

BARRING ALL INCOMING CALLS
ACTION 	CODE
Activate barring all incoming calls 	**35*PW#@ or **353*PW#@
Deactivate barring all incoming calls 	#35*PW#@ or **353*PW#@
Statusbarring all incoming calls 	*#35#@ or *#353#@





BARRING ALL INCOMING CALLS IF ROAMING
ACTION 	CODE
Activate barring all incoming calls if abroad 	**351*PW#@
Deactivate barring all incoming calls if abroad 	#351*PW#@
Statusbarring all incoming calls if abroad 	*#351#@



CALL WAITING
ACTION 	CODE
Activate call waiting 	*43#@
Deactivate call waiting 	#43##@
Statuscall waiting 	*#43#@



RINGS UNTIL ANSWERED BY YOUR VOICEMAIL


If your mobile's voicemail number is, for example:
+27-82-131-987-6543

....and you want your phone to divert to your voicemail after say 20 seconds, then type:

**61*+27821319876543**20#

The time can be up to 30secs (network default)

ACTION 	CODE
Set number of rings 	**61*YourVoiceMailNumber**N#@
Cancel previous Setting entered 	##61#@

N =Ring Time (up to 30sec)

@ = Send/OK button on your mobile phone

SEND/PREVENT YOUR PHONE NUMBER BEING SENT TO A PARTICULAR PHONE NUMBER

@ = Send/OK button on your mobile phone
ACTION 	CODE
Disable your phone number being sent 	#30#DestinationNumber@
Enable your phone number being sent 	*30#DestinationNumner@
Status of your phone number being sent 	*#30#



SEND/PREVENT INCOMING PHONE NUMBERS BEING SEEN ON YOUR PHONE

@ = Send/OK button on your mobile phone
ACTION 	CODE
Disable incoming number being shown on your phone 	*77#
Enable incoming number being shown on your phone 	#77#@
Status of whether calling parties number is shown on your phone 	*#77#@



CHANGING PIN CODES
ACTION 	CODE
Change PIN 1 	**04*PINOLD*PINNEW*NEWPIN1#@

UNBLOCKING PHONE USING A PUK NUMBER
ACTION 	CODE
Unblock PIN 1 	**05*PUK*newPIN1*newPIN1#@



DISPLAY IMEI NUMBER
Display IMEI Number 	*#06#

Source: [cellular.co.za/](http://www.cellular.co.za/gsm_hash_code.htm)
Also: [nirajtricks.blogspot.ro/](http://nirajtricks.blogspot.com/2011/10/latest-gsm-codes-all-network.html) and [happy42779.blogspot.in/](http://happy42779.blogspot.in/2013/02/all-mobile-secrets-code-hacked.html)
