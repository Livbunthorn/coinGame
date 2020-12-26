const creatditcard = document.querySelector("#cc");
const termcheckBox = document.querySelector("term");
const language = document.querySelector("#language");
const submit = document.querySelector("#submit-form");
submit.addEventListener("submit", function (e) {
  alert("submited");
  console.log("cc", creatditcard.value);
  console.log("term", termcheckBox.value);
  console.log("submit-form", language.value);
  e.preventDefault();
});
