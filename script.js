document.addEventListener("DOMContentLoaded", function() {
    let currentIndex = 0;
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;
  
    function showSlide(index) {
      if (index < 0) {
        currentIndex = totalSlides - 1;
      } else if (index >= totalSlides) {
        currentIndex = 0;
      } else {
        currentIndex = index;
      }
  
      const transformValue = -currentIndex * 100 + "%";
      document.querySelector(".slider").style.transform = "translateX(" + transformValue + ")";
    }
  
    function nextSlide() {
      showSlide(currentIndex + 1);
    }
  
    function prevSlide() {
      showSlide(currentIndex - 1);
    }
  
    setInterval(nextSlide, 5000); // Change slide every 5 seconds
  
    // Loop back to the first slide when reaching the last one
    document.querySelector(".slider").addEventListener("transitionend", function() {
      if (currentIndex === totalSlides - 1) {
        document.querySelector(".slider").style.transition = "none";
        currentIndex = 0;
        showSlide(currentIndex);
        setTimeout(() => {
          document.querySelector(".slider").style.transition = "transform 0.1s";
        });
      }
    });
  });
  