#!/usr/bin/python3
# Filename: feeder.py

import os, sys
import json
from pprint import pprint
from xml.dom.minidom import parseString

import tools

import argparse


parser = argparse.ArgumentParser(description="A command line multi feed updater")
parser.add_argument('-f','--file', default="feed.json")
# parser.add_argument('-a','--add', nargs='*', help="adds an entry to the feeds with the values following used as title, content, and link respectively", metavar=('content'))
subparsers = parser.add_subparsers()

parser_add = subparsers.add_parser('add', help="adds an entry to feed")
parser_add.add_argument('content')
parser_add.add_argument('-t','--title')
parser_add.add_argument('-l','--link')
parser_add.add_argument('--test',action="store_true",default=False)
parser_add.add_argument('--cat')
parser_add.set_defaults(func=tools.addentry)

parser_sync = subparsers.add_parser('sync', help="syncs the feed to the json")
parser_sync.set_defaults(func=tools.sync)

parser_deletelast = subparsers.add_parser('deletelast', help="deletes the last feed from json and feed")
parser_deletelast.set_defaults(func=tools.deletelast)

parser_showlast = subparsers.add_parser('showlast', help="shows the last feed from json")
parser_showlast.set_defaults(func=tools.showlast)

parser_push = subparsers.add_parser('push', help="pushes last update to social networks")
parser_push.add_argument('--tg',action="store_true",default=False)
parser_push.add_argument('--fb',action="store_true",default=False)
parser_push.add_argument('--mail',action="store_true",default=False)
parser_push.set_defaults(func=tools.push)

args = parser.parse_args()
args.func(args)
