---
title: "DisplayStorage"
date: "2021-08-06"
image: "/images/gifs/device-storage-debugger-2021-08-06.png"
imageWidth: 1416
imageHeight: 1054
githubLink: "https://gist.github.com/danielpowell4/f2575ea47f3b70c0014bc17aa9b08501"
slug: localstorage-display
---

## Problem:

Reading what's inside of stashed in device-specific localStorage isn't super fun and is near impossible to do for non-developers.

## Solution:

- loop through localStorage and print it out to screen
- allow simple UI to clear objects
- track changes in simple state to ensure a simply re-render on each change (no event listening)
