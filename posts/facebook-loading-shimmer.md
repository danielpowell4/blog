---
title: "FB Flat Loading Shimmer"
date: '2016-08-23'
image: "/images/gifs/facebook-loading-shimmer-aug-23-2016.gif"
imageWidth: 480
imageHeight: 325
codepenLink: "https://codepen.io/bloom-dan/pen/OXYQay?editors=0100#1"
slug: facebook-loading-shimmer
---

This well-seen loading bar does a few things effectively.
1. It acts as a great placeholder that affords the absence of data to not wreck or drastically ch ange the view.
2. It includes animation signifying that information is coming.
3. It looks pretty neat.

**How it works:**
A single wide rectangle has a linear gradient of various shades of grey. This is animated with a simple @keyframes that cycles the background position from far left to far right and back again. There are then various smaller white rectangles placed on top of the animated grey background that cut away to create the illusion of type.

**Another note:**
The asymmetrically colored border gives an awesome almost shadow. Nice and super flat.
