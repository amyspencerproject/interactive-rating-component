const formSubmit = document.getElementById("rating-form");
const ratingValueByName = document.getElementsByName("rating");
const thankyou = document.querySelector(".thankyou-wrapper");
const selectedText = document.querySelector(".selected-text");
const form = document.querySelector(".form-wrapper");
const errorText = document.querySelector(".error-text");

addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(ratingValueByName);
  for (let i = 0; i < ratingValueByName.length; i++) {
    if (ratingValueByName[i].checked) {
      const rating = ratingValueByName[i].value;
      console.log(rating);
      selectedText.innerText = `You selected ${rating} out of 5`;
      form.classList.add("hide");
      thankyou.classList.remove("hide");
    } else {
      errorText.classList.remove("hide");
    }
  }
});
