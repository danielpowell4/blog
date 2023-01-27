---
title: "dataset.Props"
date: "2023-01-27"
image: "/images/gifs/dataset-props-jan-27-2023.png"
imageWidth: 1406
imageHeight: 618
githubLink: "https://gist.github.com/danielpowell4/fda80fe497486ecb41924461a81485ae"
slug: dataset-props
---

## Baseline:

Rails resourceful routes are fantastic for building resource-aware pages and dedicated URLs for interactions. ActiveRecord is a dream to work with.

## Problem:

Dynamic interactions require at least some javascript.
Data from the database needs to make its way into the client somehow.
API calls to load options a few radio buttons or niche routes are often more than is strictly needed.

## Solution:

- load simple data (like form options) via Rails controller
- serve up to client via data attributes
- parse data set props
- render dynamic elements with react tooling
