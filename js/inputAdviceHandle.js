const $inputAdvice = document.querySelector(".input-advice");
console.log($inputAdvice);
const regex = /[^a-z]/;
const isValid = (value) => {
  return !regex.test(value);
};
export const handleInputAdvice = () => {
  document.addEventListener("keyup", (e) => {
    if (e.target.matches(".input-container .input")) {
      if (!isValid(e.target.value)) $inputAdvice.classList.add("alertOn");
      else $inputAdvice.classList.remove("alertOn");
    }
  });
};
