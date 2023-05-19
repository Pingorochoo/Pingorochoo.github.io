import { handleEncryptionButtons } from "./encrypt.js";
import { reziseTextArea } from "./handleHeightTextArea.js";
import { handleInputAdvice } from "./inputAdviceHandle.js";

document.addEventListener("DOMContentLoaded", (e) => {
    reziseTextArea()
    handleEncryptionButtons()
    handleInputAdvice()
});
