---
title: "Snapchat's Spinner"
date: '2017-10-19'
image: "/images/gifs/snapchats-spinner-2017-10-19.gif"
imageWidth: 480
imageHeight: 276
codepenLink: "https://codepen.io/bloom-dan/pen/oGVxNm"
slug: snapchats-spinner
---

Spinner straight from the snap feed.

I've been on a spinner kick as of late. A pixel-y animated spinner GIF put me over the edge.

This is a reverse engineer from Snapchat's feed. An outer spinner moves clockwise slowly. An inner spinner moves twice as fast from the inside in the other--negative--direction.

I then slap on a pretty #F8 background and center everything up with flex.

I noticed that using pixels in defining the width, height and border radius avoided an odd oblong petal-ish bug I was seeing in Chrome while using rem. I won't pretend to understand what that's about but a good-to-know for the future. Pixels === #perfmatters ? totes : lol; in all seriousness, though there is a chance the bug has to do with inheritance and parent-container's width as this Pen gets a tad buggy on screen sizes under 40 pixels in width
