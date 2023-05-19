const $textarea = document.querySelector('.input-container .input');
const initialHeight = $textarea.scrollHeight
export const reziseTextArea = () => {

    $textarea.addEventListener('input', (e) => {
        if (e.target.value !== '')
            $textarea.style.height = `${$textarea.scrollHeight}px`;
        else
            $textarea.style.height = `${initialHeight}px`;
    });
}