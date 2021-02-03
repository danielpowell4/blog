---
title: "CSS only color filter"
date: '2016-11-16'
image: "/images/gifs/css-only-color-filter-nov-16-16.gif"
codepen_link: "https://codepen.io/bloom-dan/pen/yVaqVQ?editors=0100#1"
slug: css-only-color-filter
---

This filter is CSS only and allows quick filtering online without the need for a photoshop intermediate.

How it works:

Base layer: background image wrapped in a div container.
No tricks here.

B&W filter -- ::before element
Using absolute positioning a white filter is applied on top of the base image with opacity 100% and with mix-blend-mode set to hue. This created a B&W effect.

Color Overlay -- ::after element
Using absolute positioning a red filter is applied on top of these layers (z-index: 3) a red layer is applied. To soften the effect, the  opacity is lowered and mix-blend-mode set to screen. Color burn, darken and multiply produce similar effects.

The animation on hover is created by animating the opacity of the before and after pseudo elements from 0 to their final states.
