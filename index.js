const mainCardDivs = document.querySelectorAll('.main-card');

mainCardDivs.forEach((card) => {
  card.addEventListener('click', function() {
    const checkbox = card.querySelector('.radion-button');
    checkbox.checked = !checkbox.checked;
  });
});

function toggleDropdown(event) {
    event.stopPropagation(); 
    var dropdownContent = this.nextElementSibling;
    dropdownContent.classList.toggle("show");
    

    var overlay = document.querySelector(".overlay");
    overlay.style.display = "block";
}

function closeDropdowns() {

    var dropdowns = document.querySelectorAll(".dropdown-content");
    dropdowns.forEach(function(dropdown) {
        dropdown.classList.remove("show");
    });

    var overlay = document.querySelector(".overlay");
    overlay.style.display = "none";
}

function toggleAccordion(item) {
    var cardContent = item.querySelector(".card-item-content");
    var cardItems = document.querySelectorAll(".card-item");

    cardItems.forEach(function (otherItem) {
        var otherContent = otherItem.querySelector(".card-item-content");
        if (otherItem !== item) {
            otherContent.style.maxHeight = "0";
            otherContent.style.margin = "0 22px 0 22px";
            otherItem.classList.remove("active");
        }
    });

    if (cardContent.style.maxHeight === "0px" || cardContent.style.maxHeight === "") {
        cardContent.style.maxHeight = cardContent.scrollHeight + "px";
        cardContent.style.margin = "0 22px 22px 22px";
        item.classList.add("active");
        cardContent.classList.add("active");
    } else {
        cardContent.style.maxHeight = "0";
        cardContent.style.margin = "0 22px 0px 22px";
        item.classList.remove("active");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var dropdownButtons = document.querySelectorAll(".drop-button");
    dropdownButtons.forEach(function(button) {
        button.addEventListener("click", toggleDropdown);
    });

    var overlay = document.querySelector(".overlay");
    overlay.addEventListener("click", closeDropdowns);

    var cardItems = document.querySelectorAll(".card-item");
    cardItems.forEach(function(item) {
        item.addEventListener("click", function(event) {
            toggleAccordion(item);
            
        });
    });
});
