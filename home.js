const button = document.querySelector(".button");
const gallery = document.querySelector(".gallery");

button.addEventListener("click", () => {
    gallery.classList.toggle("open");
    
    if(gallery.classList.contains("open")){
      button.textContent = "Hide Work";
    } 
    else {
      button.textContent = "View Work";
    }
});

const button2 = document.querySelector(".button2");
const workongallery = document.querySelector(".workongallery");

button2.addEventListener("click", () => {
    workongallery.classList.toggle("open");
    
    if(workongallery.classList.contains("open")){
      button2.textContent = "Hide Work";
    } 
    else {
      button.textContent = "View Work";
    }
});

