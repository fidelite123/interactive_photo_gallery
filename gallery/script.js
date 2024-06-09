// Get all gallery items
const galleryItems = document.querySelectorAll('.gallery01 .gallery-item');

// Function to show details
function showDetails(item, show) {
    const heading = item.querySelector('.Heading');
    const description = item.querySelector('.Description');
    heading.style.opacity = show ? '1' : '0';
    description.style.opacity = show ? '1' : '0.7';
}

// Add hover interaction and click event to open modal
galleryItems.forEach(item => {
    item.addEventListener('mouseenter', () => showDetails(item, true));
    item.addEventListener('mouseleave', () => showDetails(item, false));
    item.addEventListener('click', () => {
        const imgSrc = item.querySelector('img').src;
        const caption = item.querySelector('.Heading').innerText;
        openModal(imgSrc, caption);
    });
});

// Modal functionality
const modal = document.getElementById('myModal');
const modalImg = document.getElementById('img01');
const captionText = document.getElementById('caption');
const closeBtn = document.querySelector('.modal .close');

function openModal(src, caption) {
    modal.style.display = 'block';
    modalImg.src = src;
    captionText.innerText = caption;
}

// Close the modal when the close button is clicked
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close the modal when clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
