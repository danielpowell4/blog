---
title: "progressiveTagging"
date: "2023-01-27"
image: "/images/gifs/tagging-jan-27-2023.png"
imageWidth: 640
imageHeight: 394
githubLink: "https://gist.github.com/danielpowell4/fa3e9ad9453d5a6d609f170dd13e8c9e"
slug: disable-tags
---

## Problem:

Even relatively simple hierarchical tagging systems can get tricky for users to interact with. What sub-category belongs to which category again?

Cascading drop downs across multiple columns could require rebuilding the options many times with many network requests and vectors of potential issues.

## Solution:

- render all tags 1x (there aren't _that_ many options in this use case)
- enforce hierarchy on client via disabling non-children
