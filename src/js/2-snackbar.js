import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");

form.addEventListener("submit", )

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const delayInput = form.querySelector('input[name="delay"]');
    const stateInput = form.querySelector('input[name="state"]:checked');
    const delay = parseInt(delayInput.value);
    const state = stateInput.value;

    if (isNaN(delay)) {
        showMessage
    }