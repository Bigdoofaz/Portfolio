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

