// Responsive menu
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

let odabirBtn = document.querySelectorAll("#menuList a");
odabirBtn.forEach((o) => {
    o.addEventListener("click", () =>{
        menuList.classList.remove("active");
        menuIcon.style.display = "block";
        closeIcon.style.display = "none";
    })
})

//Counter animation
let brojKlijenata = document.querySelector("#brojKlijenata");
let godineIskustva = document.querySelector("#godineIskustva");

function animateCounter(element, endValue, duration) {
    let startValue = 0;
    let intervalDuration = duration / endValue;

    let counter = setInterval(() => {
        startValue += 1;
        element.textContent = startValue;

        if (startValue >= endValue) {
            clearInterval(counter);
        }
    }, intervalDuration);
}

animateCounter(brojKlijenata, parseInt(brojKlijenata.getAttribute("data-val")), 1);
animateCounter(godineIskustva, parseInt(godineIskustva.getAttribute("data-val")), 4000);


