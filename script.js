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

// Image slider

const slider = document.querySelector(".image-slider");
const arrLeft = document.querySelector(".arrow-left");
const arrRight = document.querySelector(".arrow-right");
const heading = document.querySelector(".caption ");

const images = [
    "makarska.jpg", "zgrada-ured.jpg"
];
const headings = [
    "Makarska iz zraka", "Lokacija ureda"
];
let id = 0;
function slide(id){
    slider.style.backgroundImage = `url(/slike/${images[id]})`;
    slider.classList.add("image-fade");
    setTimeout(() => {
        slider.classList.remove("image-fade");
    }, 550);
    heading.innerHTML = `<div class="caption">${headings[id]}</div>` ;
}
arrLeft.addEventListener("click",()=>{
    id--;
    if(id<0){
        id = images.length-1;
    }
    slide(id);
});

arrRight.addEventListener("click",()=>{
    id++;
    if(id > images.length -1){
        id = 0;
    }
    slide(id);
});


