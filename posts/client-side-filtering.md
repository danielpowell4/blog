---
title: "useFilters"
date: '2021-06-09'
image: "/images/gifs/client-side-filtering-june-9-2021.gif"
imageWidth: 480
imageHeight: 284
codepenLink: "https://gist.github.com/danielpowell4/1c03e624968b5e5b07b2017105bbe314"
slug: image-tilt
---

## Problem:

Offering users filters to more quickly parse what they are looking for in an e-commerce setting.

The data we're talking about is 'small enough' that the full dataset is readily available to the client either at build time (think JAMStack) or fetched from API when the page loads (a la componentDidMount) depending on context.

By 'small enough' I mean that pagination isn't at play and doing a full round trip to the database for fresh data on filter change doesn't really make sense.

I also wanted the data itself to dictate which filters should be available rather than hardcoding them from a known set. No need to present filters that can't apply or only have 1 option!

## Solution:

- write a hook that builds the filters from the data collection (array of objects)
- have the hook filter down the collection
- use a form in the UI to control the filters
- have the form submit ~onChange so that the URL's search query saves filter state

The URL allows for linking to / sharing specific preset filters

NOTE: This is in a Gatsby project that I contribute to so it is using @reach/router under the hood (which then became react-router v6)

## See it live!

[Data from build step](https://thecodingspace.netlify.app/classes/)
[Data from client-side fetch](https://thecodingspace.netlify.app/experience-levels/advanced-code/)
