---
title: What is focussed in movie songs?
description: An objective analysis of what the camera focusses in movie songs.
keywords: objectification, gender
styles: /projects/songfocus/songfocus.css
scripts: [ "/lazyload.min.js", "/projects/songfocus/songfocus.js"]
---
This study was conceived when I felt that Bollywood songs were focussed on female body parts rather than conveying particular emotions or anything (which supposedly are the reason why movies have songs).

## Methodology ##

### Sample ###
First I try to get a sample of song videos from YouTube. This is probably where I should exert maximum care (to prevent bias). But since the experiment can be repeated any number of times, I do different kinds of sampling.

### Downloading ###
The songs will be downloaded from YouTube using [youtube-dl](https://github.com/rg3/youtube-dl)

### Frame picking ###
To objectively assess the videos, I shall pick out random frames from the songs. 10 frames from each song at random seconds by the code `randint(1,vidlength)` where vidlength is the length of the video in seconds rounded to the largest integer less than it.

### Scoring ###
Based on the frames I pick, I could assign some kind of score to the videos. But I will consider this after doing some frame picking.

## Results ##
The 10 frames that were snapped shall be uploaded for each dataset.


## Highest Grossing Bollywood films ##
Based on the top 10 movies from [List of highest-grossing Bollywood films](https://en.wikipedia.org/wiki/List_of_highest-grossing_Bollywood_films) and all songs from those.

Here's the list I used to feed youtube-dl: [top10bollywoodgross](https://drive.google.com/file/d/0B0ot3d36B9StSlMyU0lUUlE4VWc/view?usp=sharing)

Here's the script used to process it all: [process.py](https://drive.google.com/file/d/0B0ot3d36B9StNGptRFBzck1BcGs/view?usp=sharing)

The images have been moved to the [Google Drive folder here](https://drive.google.com/folderview?id=0B0ot3d36B9StfjlBRnc4SGozSVhJUVBRaHlISWtQVWZjMERKRDVLUHFZUF9ZVWpXaFdzc1U&usp=sharing)
