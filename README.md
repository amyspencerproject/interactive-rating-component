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
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

Rating and Thank You views

![](./screenshots/mobile%20view%20rate.png) ![](./screenshots/mobile%20view%20thank%20you.png)

Mouse hover and Keyboard focus views

![](./screenshots/hover%20focus%20states.png) ![](./screenshots/hover%20focus%20state%20mouse.png)

### Links

- Github Repo URL: [Interactive Rating Component Code Repo](https://github.com/amyspencerproject/interactive-rating-component)
- Live Site URL: [Interactive Rating Component Page](https://amyspencerproject.github.io/interactive-rating-component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- vanilla JS (the old skool best!)

### What I learned

**Radio Button Form**

- Was not sure how to get the nice round rating buttons for this design.

  - Started with using an unordered list with a border-radius of 50% for all the `<li>` elements. Quickly realised that this would not work with JS.
  - Thought about making each rating choice a seperate button but figured that would add a lot of extra steps with JS and then the user would be submitting by choosing a rating and not with a proper submitt button.
  - Finally decided on a radio button form where only one rating choice could be made and submitted by the user. This would make the JS much easier and the user experiance intuitive.

- Radio buttons are used so often that they have a lot of browser specific default styling. Look at the buttons on left in Firefox and on the right in Chrome.
  
  ![](./screenshots/screenshot%20radio%20buttons.png)

- To wipe out the browser styling use the following reset. You must add custom styling if you do this because it really wipes out the buttons entirely

  ```
  input[type="radio"] {
    /* Add if not using autoprefixer */
    -webkit-appearance: none;
    /* appearance: none allows input to be picked up by screen readers */
    appearance: none;
    /* For iOS < 15 to remove gradient background */
    background-color: #fff;
    /* Not removed via appearance */
   margin: 0;
  }
  ```

- Wasn't sure whether to style input or label? Asked on the FEM Discord channel and learned that to be cross browser compatible the best option is to keep label and input un-nested, use adjacent sibling combinators, and style on the label. In the future when the :has becomes accepted with browsers like Firefox then nesting can be done successfully.

  - Pulled the `<input>` out of the `<label>` and added the `for= {id of input}` as an attribute in for `<label`.
  - Added a `<fieldset>` around the radio buttons so that it is very clear that the radio buttons belong together as a group.
  - Styled the `:hover`, `:checked`, `:focus-visible` using adjacent sibling combinators

- Added a div around the `<input>` and `<label>` to make positioning the two elements on top of each other managable

- Learned about how `:focus-visibility` allows keyboard users to know what button is selected without annoying the mouse over users. Used an outline instead of a border so the number wouldn't shift when the focus was on.

**JavaScript**

- Used a defer and put the script towards the begining of the index.html
- Put event listener on the form with a "submit" because this is better JS practice than just using a "click" on the submitt button.
- Put all the HTML into the index.html and used the class of "hide" to change the majority of the UI within JS script. Ran into an issue where the "hide" class with a `display:none` would not override the `display:flex` for the form after a rating was submitted. I used a !important to get around this temporarily. Got some feedback from the FEM community about the issue.

- Turns out the order of CSS rules matter! I had moved the "hide" class to the top of the CSS file. Since the specificity of the "thankyou-wrapper" and the "hide" classes are equal the last one to be read takes precedent. Therefore `.thankyou-wrapper {
display: flex;
} ` must be listed before `.hide {
display: none;
}` in order for the thank you message to be hidden.

### Useful resources

- [Radio Button Forms](https://blog.hubspot.com/website/html-radio-button) - Helpful blog post
- [Radio Buttons](https://www.w3schools.com/tags/att_input_type_radio.asp) - W3schools page
- [Radial Gradients CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/radial-gradient)
- [Custom Radio Buttons](https://moderncss.dev/pure-css-custom-styled-radio-buttons/)
- [Fieldset for Radio Buttons](https://www.w3.org/WAI/tutorials/forms/grouping/#radio-buttons) - this is an accesiblity thing and makes it very clear that the buttons are in a group
- [Adjacent Sibling Combinators](https://moderncss.dev/guide-to-advanced-css-selectors-part-one/#adjacent-sibling-combinator)
- [Focus Visible CSS](https://css-tricks.com/almanac/selectors/f/focus-visible/)

## Author

- Website - [Amy Spencer](https://spencerproject.com/)
- Frontend Mentor - [@amyspencerproject](https://www.frontendmentor.io/profile/amyspencerproject)
- Linkedin - [amyspencercodes](https://www.linkedin.com/in/amyspencercodes/)
