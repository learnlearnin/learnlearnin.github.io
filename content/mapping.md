+++
title = 'Mapping'
description = 'All I know about mapping'
keywords = ['mapping', 'gis']
+++

## Raster maps vs vector maps

This is perhaps the most fundamental difference to understand when it comes to digital mapping. A raster map is like an image or a drawing. It can be drawn with hand even. In fact, all the maps that were in existence before computers were raster maps. The world map on your wall is a raster map. A raster map is basically "what you see is what you get". In "community mapping" exercise where people draw maps on the ground or on a paper, you would end up with a raster map, for example.

But a vector map is a digital upgrade of the concept of a map. When it became possible to store data in a computer and visualize it later, it also became possible to collect map data without "drawing" it. Anything on earth could be represented in data in a latitude/longitude coordinate system using points, lines, polygons, etc. Using this map data, computer can then create visualizations (maps) of various colors, zoom level, etc. Thus computers with vector maps unlocked a whole new level of maps.

Modern mapping is mostly about vector mapping. Although a vector map at any particular point can still be represented as a raster map, it is vector maps that underlie most modern maps.

## Web based shared maps

* [OpenStreetMap](https://openstreetmap.org/) (open data)
* [Google maps](https://maps.google.com/)
* [Apple maps](https://maps.apple.com/)
* [Bing maps](https://www.bing.com/maps)


## Process of mapping

1. Identify the truth on the ground
2. Identify the coordinates
3. Digitally capture the coordinates along with the ground truth (attributes like name, type of building, open hours, etc)
4. Repeat steps 1-3
5. Finalize the map
6. Use the map (visualize/share/upload)

#### Types of map elements

* **Point** data - the fundamental unit of map data. Composed of an X and Y coordinate (latitude and longitude). Optionally includes the Z coordinate (altitude) too.
* **Line** data - a line can be seen as a collection of points with a straight line between them. If you want a line to curve, you'll basically have several smaller straight line segments that are slightly angled.
* **Polygon** data - a polygon can be seen as a collection of lines that join together to form an enclosed area.


#### Attributes

Attributes are extra data about the ground truth that makes maps really useful. An attribute can also be called a "field", a "property", etc.

Some commonly used attributes are:

- **Latitude/Longitude/Altitude**: Technically, latitude and longitude is already included in the point's data in geographical system. But you could think of these as attributes too.
- **ID**: You might want to give a unique ID to any point on the map. Say numerical IDs like 1, 2, 3. Or maybe some systematic ID like "ABC123", "ABC124", etc.
- **Name**: The name of any entity on the map
- **Type**: If you're mapping, say, buildings, then the type of the building (government office? shop?)
- **Anything**: You can add any attribute you want to your map. Say you're mapping a school, you might add "number of students" as an attribute for classrooms.

#### Tools

There are many tools to capture and edit map data. The best way to learn about each would be to go through the OSM wiki:
* [Mapping techniques](https://wiki.openstreetmap.org/wiki/Mapping_techniques)
* [Editors](https://wiki.openstreetmap.org/wiki/Editors)

Keep in mind that not all tools allow downloading your edits for offline use. Many tools upload datato OpenStreetMap and then later you will have to download them back from OSM.

## Read

* [A Gentle Introduction to GIS](https://docs.qgis.org/3.44/en/docs/gentle_gis_introduction/index.html)