---
title: "useFilters"
date: "2021-06-09"
image: "/images/gifs/client-side-filtering-june-9-2021.gif"
imageWidth: 480
imageHeight: 284
githubLink: "https://gist.github.com/danielpowell4/1c03e624968b5e5b07b2017105bbe314"
slug: client-side-filtering
---

## Problem:

Offering users filters to more quickly parse what they are looking for in an e-commerce setting.

The data we're talking about is 'small enough' that the full dataset is readily available to the client either at build time (think JAMStack) or fetched from API when the page loads (a la componentDidMount) depending on context.

## Solution:

- write a hook that builds the filters from the data collection (array of objects)
- have the hook filter down the collection
- use a form in the UI to control the filters
- have the form submit ~onChange so that the URL's search query saves filter state (good for pre-fill/sharing)

BONUS: This is abstracted so it can power really anything that needs this sort of functionality!

## See it live!

- [Data from build step](https://thecodingspace.netlify.app/classes/)
- [Data from client-side fetch](https://thecodingspace.netlify.app/experience-levels/advanced-code/)

NOTE: This is in a Gatsby project that I contribute to so it is using @reach/router under the hood (which then became react-router v6)
