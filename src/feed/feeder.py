#!/usr/bin/python3
# Filename: feeder.py

import os, sys
import json
from pprint import pprint
from xml.dom.minidom import parseString
import time
import uuid

def gettime():
    return time.strftime("%Y-%m-%dT%H:%M:%SZ",time.gmtime())

def getuuid():
    urn=uuid.uuid4()
    return str(urn)

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
    if hasattr(entry, "updated"):
        entrystring+='<updated>'+entry['updated']+'</updated>'
    entrystring+='<published>'+entry['published']+'</published>'
    entrystring+='<author><name>'+entry['author']+'</name><uri>'+entry['authoruri']+'</uri><email>'+entry['authoremail']+'</email></author>'
    entrystring+='<content type="'+entry['contenttype']+'">'+entry['content']+'</content>'
    entrystring+='</entry>'
    return entrystring

def main(*args):
    try:
        filename = args[0]
    except IndexError:
        filename = "feed.json"

    dirname = os.path.dirname(os.path.realpath(sys.argv[0]))
    filepath = os.path.join(dirname,filename)
    atompath = os.path.join(os.path.dirname(dirname),"files",filename.split('.')[0]+".atom")

    if not os.path.isfile(filepath):
        print(filepath,"does not exist")
        return
    with open(filepath, 'r') as jsonfile:
        print("loading",filepath)
        feeds = json.load(jsonfile)
        pprint(feeds)
        feedstring="""<?xml version="1.0" encoding="utf-8"?><feed xmlns="http://www.w3.org/2005/Atom"><title type="text">Learn Learnin'</title><subtitle type="html">The quintessential insight aggregator</subtitle>"""
        feedstring+="<updated>"+gettime()+"</updated>"
        feedstring+="<id>http://learnlearn.in/feed.atom</id>"
        feedstring+='<link rel="alternate" type="text/html" hreflang="en" href="http://learnlearn.in/"/>'
        feedstring+='<link rel="self" type="application/atom+xml" href="http://learnlearn.in/feed.atom"/>'
        feedstring+='<generator uri="http://github.com/learnlearnin/learnlearnin.github.io/blob/source/src/feed/feeder.py" version="1.0">Hand written python json to feed converter</generator>'
        preparedentries=[]
        for entry in feeds['entries']:
            preparedentries.append(entryprepare(entry))
        feeds['entries']=preparedentries
        for entry in feeds['entries']:
            feedstring+=entrytoxml(entry)
        feedstring+="</feed>"

    with open(filepath, 'w') as jsonfile:
        json.dump(feeds,jsonfile,indent=1)

    atomxml = parseString(feedstring)
    with open(atompath, 'w') as atomfile:
        atomfile.write(atomxml.toprettyxml())



if __name__=="__main__":
    print("Parsing json")
    main()
