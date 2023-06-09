const encryptkeys = {
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat",
};
const decryptkeys = {
  enter: "e",
  imes: "i",
  ai: "a",
  ober: "o",
  ufat: "u",
};
const removeTildes = (string) => {
  const tildes = {
    á: "a",
    é: "e",
    í: "i",
    ó: "o",
    ú: "u",
  };
  return string.replace(/[áéíóú]/gi, (match) => tildes[match]);
};
const $outputText = document.getElementById("output");
const $textarea = document.querySelector(".input-container .input");
const $outputEmpty = document.querySelector(".output-empty");
const $outputResponse = document.querySelector(".output-response");

const encrypt = (text) =>
  ($outputText.textContent = text
    .split("")
    .map((letter) => (encryptkeys[letter] ? encryptkeys[letter] : letter))
    .join(""));
const decrypt = (text) => {
  for (key in decryptkeys) {
    text = text.replace(new RegExp(key, "g"), decryptkeys[key]);
  }
  $outputText.textContent = text;
};

const handleCopy = () => navigator.clipboard.writeText($outputText.textContent);

const handleOutputSection = (text) => {
  if (!text.trim()) {
    $outputEmpty.classList.remove("hide");
    $outputResponse.classList.add("hide");
    return;
  }
  $outputEmpty.classList.add("hide");
  $outputResponse.classList.remove("hide");
};

export const handleEncryptionButtons = () => {
  document.addEventListener("click", (e) => {
    if (e.target.matches("#encrypt")) {
      encrypt(removeTildes($textarea.value.trim().toLowerCase()));
      handleOutputSection($textarea.value);
    }
    if (e.target.matches("#decrypt")) {
      decrypt(removeTildes($textarea.value.trim().toLowerCase()));
      handleOutputSection($textarea.value);
    }
    if (e.target.matches("#copy")) {
      handleCopy();
    }
  });
};
