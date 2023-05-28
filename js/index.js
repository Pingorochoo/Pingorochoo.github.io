import { handleEncryptionButtons } from "./encrypt.js";
import { handleTheme } from "./handleTheme.js";
import { handleInputAdvice } from "./inputAdviceHandle.js";
document.addEventListener("DOMContentLoaded", (e) => {
    handleEncryptionButtons()
    handleInputAdvice()
    handleTheme()
});
