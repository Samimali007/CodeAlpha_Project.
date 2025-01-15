const images = [
    'images/image1.webp',
    'images/image2.jpeg',
    'images/image3.jpeg',
    'images/image4.jpg',
    'images/image5.jpg',
    'images/image6.jpg',
  ];
  
  let currentImageIndex = 0;
  
  function openLightbox(index) {
    currentImageIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightbox.style.display = 'flex';
    lightboxImg.src = images[currentImageIndex];
  }
  
  // Close lightbox on clicking the overlay
  function closeLightbox(event) {
    // Check if the click is on the overlay (not on the content)
    if (event.target === event.currentTarget) {
      const lightbox = document.getElementById('lightbox');
      lightbox.style.display = 'none';
    }
  }
  
  // Change image when clicking next/prev buttons
  function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) {
      currentImageIndex = images.length - 1; // Loop to the last image
    } else if (currentImageIndex >= images.length) {
      currentImageIndex = 0; // Loop back to the first image
    }
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = images[currentImageIndex];
  }
  
  // Prevent event bubbling for navigation buttons
  document.querySelector('.prev').addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent event bubbling
    changeImage(-1);
  });
  
  document.querySelector('.next').addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent event bubbling
    changeImage(1);
  });
  
  // Close the lightbox when clicking on the close button
  document.querySelector('.close-btn').addEventListener('click', () => {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
  });
  