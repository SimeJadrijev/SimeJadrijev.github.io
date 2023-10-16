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
/*
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
*/
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

// Animacije
/*
let sections = document.querySelectorAll(".treba");

window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height){
            sec.classList.add("animate")
        }else{
            sec.classList.remove("animate")
        }
    })
} 
*/
//Kontakt forma

let imePosiljatelja = document.getElementById("ime").value;
let emailPosiljatelja = document.getElementById("email").value;
let brojPosiljatelja = document.getElementById("phone").value;
let porukaPosiljatelja = document.getElementById("poruka").value;


let xmlhttp = new XMLHttpRequest();
let url = "test.php";
xmlhttp.open("POST",url, true);

xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        imePosiljatelja.value = "";
        emailPosiljatelja.value = "";
        brojPosiljatelja.value = "";
        porukaPosiljatelja.value = "";
    }
}

let data = "ime=" +imePosiljatelja + "&email=" + emailPosiljatelja + "&phone=" + brojPosiljatelja + "&poruka=" + porukaPosiljatelja;
xmlhttp.send(data);


/*
window.onscroll = () =>{

    this.oldScroll = this.scrollY;
    let sectionForAnimation = document.querySelector(".hero-upper");
    let sectionPosition = sectionForAnimation.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.3;
    let ciljani = document.querySelector(".hero-upper")

    if(sectionPosition < screenPosition){
        ciljani.classList.add("animate");
        ciljani.classList.add("animate");
    }
     
}*/

/*
document.addEventListener("DOMContentLoaded", function() {
  // Pronađite sve navigacijske linkove u listi
  var navigationLinks = document.querySelectorAll('.donji a');
  
  // Dodajte slušatelja događaja na klik svakog linka
  navigationLinks.forEach(function(link) {
    link.addEventListener("click", function(e) {
      e.preventDefault(); // Spriječite preusmjeravanje na ciljanu sekciju
      
      // Pronađite ciljanu sekciju na temelju href atributa linka
      var targetSectionId = link.getAttribute('href').substring(1); 
      var targetSection = document.getElementById(targetSectionId);
      
      if (targetSection) {
        // Izračunajte krajnju visinu na koju želite pomaknuti stranicu (50 piksela iznad ciljane sekcije)
        var targetPosition = targetSection.getBoundingClientRect().top - 100;
        
        // Pomaknite stranicu pomoću smooth scroll animacije
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});


*/


