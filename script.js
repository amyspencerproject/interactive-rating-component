const formSubmit = document.getElementById("rating-form");
const ratingValueByName = document.getElementsByName("rating");
// const ratingValue = document.getElementById("rating-form").value;
// const ratingValueInput = document.querySelector('input[  name="rating"].value');
const thankyou = document.querySelector("thankyou-wrapper");
const form = document.querySelector("form-wrapper");

addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(ratingValueByName);
  for (let i = 0; i < ratingValueByName.length; i++) {
    if (ratingValueByName[i].checked) {
      console.log(ratingValueByName[i].value);
      console.log("Something worked! 🚀");
    }
  }
});

// event listener on form submit
// if statement when no rating value has been selected, with user message
// else statement to move on to changing the UI
// make sure value is text and then send to the UI `${ratingValue}`
// Thankyou JSX to the UI
