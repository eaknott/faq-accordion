const accordionList = document.querySelectorAll(".questionTitle");

function toggleAnswer() {
    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("active");
    this.querySelector(".minusButton").classList.toggle("active");
    this.querySelector(".plusButton").classList.toggle("active");
}

accordionList.forEach((item) => {
    item.addEventListener("click", toggleAnswer);
});
