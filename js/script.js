<div>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/ScrollTrigger.min.js"></script>
</div>;
document.addEventListener("DOMContentLoaded", function () {
  var backToTopButton = document.getElementById("backToTop");

  if (backToTopButton) {
    window.onscroll = function () {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        backToTopButton.style.display = "block";
      } else {
        backToTopButton.style.display = "none";
      }
    };

    backToTopButton.onclick = function () {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    };
  }

  // Add event listeners for gallery images if they exist
  var galleryImages = document.querySelectorAll(".gallery img");
  galleryImages.forEach(function (img) {
    img.addEventListener("click", function () {
      changeImage(this.src, this.alt);
    });
  });
});

function changeImage(src, alt) {
  var mainImage = document.getElementById("mainImage");
  if (mainImage) {
    mainImage.src = src.replace("150&width=150", "400&width=600");
    mainImage.alt = alt;
  }
}
