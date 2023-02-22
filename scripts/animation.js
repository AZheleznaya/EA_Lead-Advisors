const animationItem = document.querySelector(".animation");

window.addEventListener("scroll", animationOnScroll);

function offset(el) {
    const rect = el.getBoundingClientRect();
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
}

function animationOnScroll() {
    const animationItemHeight = animationItem.offsetHeight;
    const animationItemOffset = offset(animationItem).top;
    const animationStart = 4;

    let animationItemPoint = window.innerHeight - animationItemHeight / animationStart;

    if (animationItemHeight > window.innerHeight) {
        animationItemPoint = window.innerHeight - window.innerHeight / animationStart;
    }

    if ((pageYOffset > animationItemOffset - animationItemPoint) && pageYOffset < (animationItemOffset + animationItemHeight)) {
        animationItem.classList.add("show-title");
    } else {
        animationItem.classList.remove("show-title")
    }
}

