import {createSuccessPopup, createErrorPopup, createErrorMessage} from "./popup.js";

document.addEventListener("DOMContentLoaded", function() {
    const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const form = document.getElementById("form");

    form.addEventListener("submit", formSend);

    function formAddError(input) {
        input.parentElement.classList.add("error");
        input.classList.add("error");
    }

    function formRemoveError(input) {
        input.parentElement.classList.remove("error");
        input.classList.remove("error");
    }

    function isValid(input) {
        return emailRegExp.test(input.value);
    }

    function formValidate() {
        let error = 0;
        let formReq = document.querySelector(".required");

        formRemoveError(formReq);

        if (formReq.getAttribute("name") === "email") {
            if (formReq.value === "") {
                formAddError(formReq);
                error++;
            }
            if (!isValid(formReq)) {
                formAddError(formReq);
                error++;
            }
        }

        return error;
    }

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate();
        let formData = new FormData(form);

        if (error === 0) {
            await fetch("https://httpbin.org/post", {
                method: 'POST',
                body: formData
            }).then((response) => {
                if (response.ok) {
                    createSuccessPopup();
                    form.reset();
                } else {
                    throw new Error(`Server error: ${response.status}`);
                }
            }).catch((error) => {
                console.error(error);
                createErrorPopup();
                form.reset();
            })
        } else {
            createErrorMessage();
        }
    }
})