#!/usr/bin/env python3

# This file takes videos from videos folder and creates snapshots at random seconds in snapshots folder

# 

import os
import subprocess
from random import randint

os.chdir("videos")
os.system("youtube-dl --download-archive ../downloaded -f worstvideo --restrict-filenames -a ../top10bollywoodgross")
os.chdir("..")


for filename in os.listdir('videos'):
	if filename=="done":
		continue
	bettername=filename.replace("'","")
	bettername=bettername.replace(" ","")
	bettername=bettername.replace('"','')
	bettername=bettername.replace(',','')
	os.rename("videos/"+filename, "videos/"+bettername)
	filename=bettername
	vidname="videos/"+filename
	dirname="snapshots/"+filename
	if not os.path.exists(dirname):
		os.mkdir(dirname)
	print("processing to "+dirname)
	vidlength=subprocess.check_output('mplayer -really-quiet -vo dummy -ao dummy -identify "'+vidname+'" | grep ID_LENGTH | sed "s:ID_LENGTH=::"', shell=True)
	vidlength=int(float(str(vidlength).strip("b'").strip("\\n")))
	onefifth=int(float(vidlength/5))
	onetenth=int(float(vidlength/10))
	counter=0
	for a in range(10):
		counter+=1
		#sec=randint(1,onetenth)
		sec=randint(1,vidlength)
		#secplus=sec+1    
		sec=str(sec)
		#secplus=str(secplus)
		print("taking snap at"+sec)
		#os.system('cvlc videos/"'+filename+'" --rate=1 --video-filter=scene --vout=dummy --start-time='+sec+' --stop-time='+secplus+' --scene-format=png --scene-ratio=24 --scene-prefix=snapshots/"'+filename+'"-snap --scene-path=./ --play-and-exit vlc://quit')
		os.system('mplayer "'+vidname+'" -vo jpeg:outdir="'+dirname+'" -ss '+sec+' -frames 1')
		os.rename(dirname+"/00000001.jpg",dirname+"/%s.jpg"%str(counter))
		#os.system('mplayer "'+vidname+'" -vo jpeg:outdir="'+dirname+'" -sstep '+str(onetenth)+' -frames 10')