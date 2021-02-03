---
title: "head + heart poly"
date: '2018-11-18'
image: "/images/gifs/head-and-heart-low-poly-nov-10-2018.gif"
imageWidth: 480
imageHeight: 314
codepenLink: "https://codepen.io/bloom-dan/pen/EOPGKo?editors=0010"
slug: head-and-heart-low-poly
---

This is an animation between head and heart using anime.js!

The animation here is interpolation with a timing function.

This requires the polygons in each set, which are matched by id, to have same number of points. Instead of using triangles, which all have 3 points, I post processed the svgs after export from illustrator--looping back from the polygon's start as needed

I did NOT optimize the script as it was only intended to be run once but included a sample in the JS piece

I exported the svg's from illustrator, opened the file in a code editor and then replaced the svg attributes to form an array of hashes (`<polygon points=' => '{ points: `)
