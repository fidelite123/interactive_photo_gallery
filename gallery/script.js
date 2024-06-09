
// Array containing the gallery data
const galleryData = [
    {
        imgSrc: "./images/fennec-fox.png",
        title: "FENNEC FOX",
        location: "India",
    },
    {
        imgSrc: "./images/humpback-whale.png",
        title: "HUMPBACK WHALE",
        location: "south africa",
    },
    {
        imgSrc: "./images/baboon.png",
        title: "COMMON,BROWN BABOON",
        location: "south africa"
    },
    {
        imgSrc: "./images/spotted-deer.png",
        title: "SPOTTED DEER",
        location: "amazon",
    },
];

// Function to create gallery cards
function createGalleryCards() {
    const galleryWrapper = document.querySelector(".galleryWrapper");
    galleryData.forEach((data) => {
        const galleryCard = document.createElement("div");
        galleryCard.classList.add("galleryCard");

        galleryCard.innerHTML = `
    <img src="${data.imgSrc}" alt="${data.title}" />
    <div class="galleryOverlay">
      <div class="contents">
        <h1>${data.title.split(" ").join("<br>")}</h1>
        <small class="location">${data.location}</small>
        <p class="more"> <span> Know More </span> <i class="fa-solid fa-arrow-right-long"></i></p>
        
      </div>
    </div>
  `;

        galleryWrapper.appendChild(galleryCard);
    });
}

// Call the function to create gallery cards on page load
document.addEventListener("DOMContentLoaded", createGalleryCards);
