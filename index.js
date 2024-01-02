const navItemCategory = document.querySelector("#nav-section2-item1-container");
const hiddenDropdownSectionNavItemCategory = document.querySelector(".category-section-on-hover-mouseout");

navItemCategory.addEventListener("mouseover", function(){
    hiddenDropdownSectionNavItemCategory.classList.add("category-section-on-hover-mouseover");
});
navItemCategory.addEventListener("mouseout", function(){
    hiddenDropdownSectionNavItemCategory.classList.remove("category-section-on-hover-mouseover");
});

const hiddenSection = document.querySelector(".category-section-on-hover-mouseover");

hiddenSection.addEventListener("mouseover", function(){
    hiddenSection.style.display = "grid";
});
hiddenSection.addEventListener("mouseout", function(){
    hiddenSection.style.display = "none";
});
