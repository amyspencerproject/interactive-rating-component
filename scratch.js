const displayRating = () => {
  for (let i = 0; i < ratingValueByName.length; i++) {
    if (ratingValueByName[i].checked) {
      console.log(ratingValueByName[i].value);
      console.log("Something worked!");
    }
  }
};
return displayRating;
