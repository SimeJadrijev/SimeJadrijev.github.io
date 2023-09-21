const menuIcon = document.getElementById("menuIcon");
const closeIcon = document.getElementById("closeIcon");
const menuList = document.getElementById("menuList");

menuIcon.addEventListener("click", () => {
    menuList.classList.add("active");
    menuIcon.style.display = "none";
    closeIcon.style.display = "block";
});

closeIcon.addEventListener("click", () => {
    menuList.classList.remove("active");
    menuIcon.style.display = "block";
    closeIcon.style.display = "none";
});
