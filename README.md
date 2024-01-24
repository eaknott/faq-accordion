# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla Javascript

### What I learned

- I learned about more selectors available for use in Javascript: 
    nextElementSibling
    lastChild
    firstChild
- When starting out with my HTML doc, I put too many unique class names. When I finished, I ended up deleting many of these class names that were unique to their elements, as I never used them and they were unnecessary.
- One color was not provided, but I used Figma to find the color HSL
- This time I coded with accessibility in mind from the beginning, and my workflow was much easier 
- Selecting an element's child by simply coding "this.querySelector(".className")"
- using forEach - remembering that this array method does not create a new array, it changes the existing array

### Continued development



### Useful resources

- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Element/nextElementSibling) - This helped me in selecting an element's next sibling. For this project, I used it to select a question title's next sibling, which was question's answer paragraph.

## Author

- Website - [Emily Knott](https://www.emilyknott.com)
- Frontend Mentor - [@eaknott](https://www.frontendmentor.io/profile/eaknott)