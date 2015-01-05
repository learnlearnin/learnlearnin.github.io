import os, sys
import json
from pprint import pprint
from xml.dom.minidom import parseString
import time
import uuid

donotupdate=True

def gettime():
    return time.strftime("%Y-%m-%dT%H:%M:%SZ",time.gmtime())

def getuuid():
    urn=uuid.uuid4()
    return str(urn)

def jsonload(filepath):
    with open(filepath,'r') as fileobj:
        jsondata = json.load(fileobj)
    return jsondata

def addentry(args):
    if (args.content!=None and args.title!=None):
        global newentry
        newentry={
            "title": args.title,
            "content": args.content
        }
        print("New entry titled:",args.title)
        print(args.content)
        if args.link!=None:
            newentry['link']=args.link
            print(args.link)
        if args.cat!=None:
            newentry['category']=args.cat
        global donotupdate
        if not args.test:
            donotupdate=False
        getfiles(args)
        default()
        print("added")
        print(pprintentry(getlastentry(args)))
    else:
        print("Missing content or title")

def showlast(args):
    getfiles(args)
    print(pprintentry(getlastentry(args)))

def sync(args):
    getfiles(args)
    default()

def deletelast(args):
    getfiles(args)
    default(delete=1)

def entryprepare(entry):
    if not 'title' in entry:
        raise Warning("entry with no title")
    if not 'content' in entry:
        raise Warning(entry['title']+" has no content")
    entry['link'] = entry['link'] if 'link' in entry else "http://learnlearn.in/"
    if entry['link'].startswith("/"):
        entry['link']="http://learnlearn.in"+entry['link']
        entry['content']+="""

Read more at """+entry['link']
    entry['published'] = entry['published'] if 'published' in entry else gettime()
    if "dirty" in entry:
        if not entry['dirty']=="false":
            entry['updated'] = gettime()
            entry['dirty']="false"
    entry['id'] = entry['id']  if 'id' in entry else "urn:uuid:"+getuuid()
    entry['contenttype'] = entry['contenttype'] if  "contenttype" in entry else "text"
    entry['author'] = entry['author'] if "author" in entry else "Akshay S Dinesh"
    entry['authoremail'] = entry['authoremail'] if  "authoremail" in entry else "akshay@autistici.org"
    entry['authoruri'] = entry['authoruri'] if "authoruri" in entry else "http://learnlearn.in/about/"
    return entry

def entrytoxml(entry):
    entrystring="<entry>"
    entrystring+="<title>"+entry['title']+"</title>"
    entrystring+='<link href="'+entry['link']+'" />'
    entrystring+='<id>'+entry['id']+'</id>'
    if "updated" in entry:
        entrystring+='<updated>'+entry['updated']+'</updated>'
    if "category" in entry:
        entrystring+='<category>'+entry['category']+'</category>'
    entrystring+='<published>'+entry['published']+'</published>'
    entrystring+='<author><name>'+entry['author']+'</name><uri>'+entry['authoruri']+'</uri><email>'+entry['authoremail']+'</email></author>'
    entrystring+='<content type="'+entry['contenttype']+'">'+entry['content']+'</content>'
    entrystring+='</entry>'
    return entrystring

def generatefeed(feeds):
    feedstring="""<?xml version="1.0" encoding="utf-8"?><feed xmlns="http://www.w3.org/2005/Atom"><title type="text">Learn Learnin'</title><subtitle type="html">The quintessential insight aggregator</subtitle>"""
    feedstring+="<updated>"+feeds['updated']+"</updated>"
    feedstring+="<id>http://learnlearn.in/feed.atom</id>"
    feedstring+='<link rel="alternate" type="text/html" hreflang="en" href="http://learnlearn.in/"/>'
    feedstring+='<link rel="self" type="application/atom+xml" href="http://learnlearn.in/feed.atom"/>'
    feedstring+='<generator uri="http://github.com/learnlearnin/learnlearnin.github.io/blob/source/src/feed/feeder.py" version="1.0">Hand written python json to feed converter</generator>'
    try:
        preparedentries=[entryprepare(newentry)]
    except NameError:
        preparedentries=[]
    for entry in feeds['entries']:
        preparedentries.append(entryprepare(entry))
    feeds['entries']=preparedentries
    for entry in feeds['entries']:
        feedstring+=entrytoxml(entry)
    feedstring+="</feed>"
    return feedstring

def writejson(feeds, filepath):
    with open(filepath, 'w') as jsonfile:
        json.dump(feeds,jsonfile,indent=1)

def writexml(atomxml,atompath):
    with open(atompath, 'w') as atomfile:
        atomfile.write(atomxml.toprettyxml())

def getfiles(args):
    filename = args.file
    dirname = os.path.dirname(os.path.realpath(sys.argv[0]))
    global filepath , atompath
    filepath = os.path.join(dirname,filename)
    atompath = os.path.join(os.path.dirname(dirname),"files",filename.split('.')[0]+".atom")
    if not os.path.isfile(filepath):
        raise Warning(filepath,"does not exist")


def default(delete=0):
    global filepath, atompath
    feeds=jsonload(filepath)
    if "updated" in feeds:
        if not donotupdate:
            feeds['updated']=gettime()
    else:
        feeds['updated']=gettime()
    feeds['entries']=feeds['entries'][delete:]
    feedstring=generatefeed(feeds)
    atomxml = parseString(feedstring)
    writejson(feeds,filepath)
    writexml(atomxml,atompath)

def getlastentry(args):
    getfiles(args)
    global filepath
    feeds=jsonload(filepath)
    lastentry=feeds['entries'][0]
    return lastentry

def pprintentry(entry):
    title=entry['title']
    content=entry['content']
    message=title+'\n-----------\n'+content
    return message

def sendmails(entry):
    import sys, os, re
    from smtplib import SMTP_SSL as SMTP
    from email.mime.text import MIMEText
    global config
    footer="""
---
You are receiving this mail because you were interested in learnlearn.in
If you wish to no longer receive these emails, just send a reply to this address saying "unsubscribe" or anything to that effect.
    """
    try:
        conn = SMTP(config.SMTPserver)
        conn.set_debuglevel(False)
        conn.login(config.username, config.password)

        for reader in config.mailinglist:
            text_subtype='plain'
            subject=entry['title']
            try:
                content="Dear "+reader[1]+'\n'+entry['content']
            except IndexError:
                content="Hello friend!\n"+entry['content']
            content+=footer

            msg = MIMEText(content, text_subtype)
            msg['Subject']=       subject
            msg['From']   = config.sender
            msg['To'] = reader[0]
            try:
                conn.sendmail(config.sender, reader[0], msg.as_string())
            except Exception as exc:
                print("mail to %s failed: %s"%(reader[0],str(exc)))

            for reader in config.postbymail:
                text_subtype='plain'
                subject=entry['title']
                content=entry['content']
                msg = MIMEText(content, text_subtype)
                msg['Subject']= content
                msg['From']   = config.sender
                msg['To'] = reader
                try:
                    conn.sendmail(config.sender, reader, msg.as_string())
                except Exception as exc:
                    print("mail to %s failed: %s"%(reader,str(exc)))
    except Exception as exc:
        sys.exit( "mail failed; %s" % str(exc) )
    finally:
        conn.close()

def fbpush(oauth, message):
    import facebook
    graph=facebook.GraphAPI(oauth)
    graph.put_object("me", "feed", message=message)

def telegramshare(message,cat="all"):
    import subprocess
    global config
    sendto=""
    for chat in config.tgchats:
        if cat=="all":
            sendto+=chat[0]+" "  # sends entries with no tags to everyone
        else:
            try:
                if chat[1]==cat:
                    sendto+=chat[0]+" "   # sends people with explicit tags the messages of their tags
            except IndexError:
                sendto+=chat[0]+" "    # sends people with no explicit tags all messages
    print("sending via telegram to %s"%sendto)
    command=['./src/feed/grambot.sh', config.tgdir, message]
    command.extend(sendto.split())
    process=subprocess.Popen(command)
    process.wait()

def push(args):
    getfiles(args)
    global filepath
    pardir=os.path.dirname(os.path.dirname(os.path.dirname(filepath)))
    os.sys.path.insert(0,pardir)
    global config
    import config
    lastentry=getlastentry(args)
    message=pprintentry(lastentry)
    print("sending to social networks")
    print(message)
    if args.mail:
        try:
            mails=config.mailinglist
            sendmails(lastentry)
        except AttributeError:
            pass
    if args.fb:
        try:
            fboauth=config.fbaccess
            fbpush(fboauth, message)
        except AttributeError:
            pass
    if args.tg:
        try:
            tgdir=config.tgdir
            print("telegramming")
            if "category" in lastentry:
                telegramshare(message,cat=lastentry['category'])
            else:
                telegramshare(message)
        except AttributeError:
            pass
