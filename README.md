# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process
- downloaded files
- made git repo and made first commit with the untouched starter files
- added a CSS reset file. This time used [Josh Comeau's](https://www.joshwcomeau.com/css/custom-css-reset/) modern reset.
- Used [Overpass](https://fonts.google.com/specimen/Overpass) font from google fonts

Set the font size on the body as instructed in the style guide (only included if it should differ from the default, and must always be converted to rem before use in code)
Then do all html.
Start with mobile styling
Note where the lines break in the paragraph - that plus the content areas padding should give you a good max width to apply.
Now you can work from there, using your eye to get everything else close


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- vanilla JS (the old skool best!)


### What I learned
Was not sure how to get the nice round rating buttons for this design. Started with using an unordered list with a border-radius of 50% for all the ```<li>``` elements. Quickly realised that this would not work with JS. Thought about making each rating choice a seperate button but figured that would add a lot of extra steps with JS and then the user would be submitting by choosing a rating and not with a proper submitt button. Finally decided on a radio button form where only one rating choice could be made and submitted by the user. This would make the JS much easier and the user experiance intuitive. Learned about radio button forms from this [Blog Post](https://blog.hubspot.com/website/html-radio-button) and [W3schools page](https://www.w3schools.com/tags/att_input_type_radio.asp).

## Author

- Website - [Amy Spencer](https://spencerproject.com/)
- Frontend Mentor - [@amyspencerproject](https://www.frontendmentor.io/profile/amyspencerproject)
- Linkedin - [amyspencercodes](https://www.linkedin.com/in/amyspencercodes/)