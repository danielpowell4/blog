---
title: "Form w/ Floating Labels"
date: '2017-05-07'
image: "/images/gifs/form-with-floating-labels_mar-07-2017.gif"
imageWidth: 480
imageHeight: 318
codepenLink: "https://codepen.io/bloom-dan/pen/NpbbrV?editors=0100#1"
slug: form-with-floating-labels
---

There is an ongoing debate of how best to display labels for fields. Labels often lay above the input field and take up precious pixels. The go to, then, is to use a placeholder. Though this is fine in theory (especially for those who wrote the form) it's not uncommon for users to forget what they are filling out.

The simple instruction of a label keeps it clear and keeping it is best practice.

But what about the real estate? No one wants to see 60+ px wasted on pesky labels!

This pen, largely lifted from a concept first spotted on Bernie's website, is a delightful in-between.

On initial load, the label feels like a placeholder. It is inline with where the input would go.

When a user clicks on the input field/textarea and it becomes active, an aptly named "active" class is added to the parent container. This activates a new bit of css, which tweaks the label to be smaller and in the corner.

A smooth, yet prompt, animated transition keeps it all flowing well.

On blur, that is when a user clicks away from an input field, if the field it empty, the "active" class is removed. This re-instantiates the initial placeholder-esque style. If a user has filled out the field, though, the active class stays so that the label and input value don't overlap.

Ajax is used to handle the form submission. If it is successful, a success message is displayed. When a failure occurs, like in this demo, an error message is rendered
