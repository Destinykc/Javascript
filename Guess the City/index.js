document.querySelector("button").addEventListener("click", handleClick);
function handleClick() {
  let randomNumber = Math.floor(Math.random() * 7) + 1;
  let randomSource = "city" + randomNumber + ".jpg";
  let randomSourceImage = "images/" + randomSource;
  document.querySelectorAll("img")[0].setAttribute("src", randomSourceImage);
  //second player
  let randomNumber2 = Math.floor(Math.random() * 7) + 1;
  let randomSource2 = "city" + randomNumber2 + ".jpg";
  let randomSourceImage2 = "images/" + randomSource2;
  document.querySelectorAll("img")[1].setAttribute("src", randomSourceImage2);
}
document.querySelectorAll("button").addEventListener("click", handleClick);
