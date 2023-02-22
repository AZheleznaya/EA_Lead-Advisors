export {createSuccessPopup, createErrorPopup, createErrorMessage};

const popup = document.querySelector(".popup");
const popupTitle = document.querySelector(".popup__content_title");
const popupText = document.querySelector(".popup__content_text");
const popupCloseCross = document.querySelector(".popup__content_close-cross");
const popupCloseButton = document.querySelector(".popup__content_close-button");

function showPopup(...className) {
    popup.classList.add(...className);
    document.body.style.overflow = "hidden";
}

function closePopup(e) {
    e.stopPropagation();
    e.stopImmediatePropagation();
    popup.classList.remove("active", "error-popup");
    document.body.style.overflow = "";
}

function createSuccessPopup() {
    popupTitle.innerText = "SUCCESS!";
    popupText.innerText = "You have successfully subscribed to the email newsletter";

    showPopup("active");
}

function createErrorPopup() {
    popupTitle.innerText = "FAILED!";
    popupText.innerText = "Unable to subscribe. Please try again later";

    showPopup("active");
}

function createErrorMessage() {
    popupTitle.innerText = "Invalid input";
    popupText.innerText = "Please fill required fields with correct data";

    showPopup("active", "error-popup");
}

popupCloseCross.addEventListener("click", closePopup);

popupCloseButton.addEventListener("click", closePopup);