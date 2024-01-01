const categorySectionOnHover = document.querySelector("#nav-section2-items-item1");
const hiddenSection = document.querySelector("#category-section-on-hover");
categorySectionOnHover.addEventListener("mouseover", function(){
    hiddenSection.style.display = "block";
});
categorySectionOnHover.addEventListener("mouseout", function(){
    hiddenSection.style.display = "none";
});
