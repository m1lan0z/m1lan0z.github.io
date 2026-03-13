const slideshows = document.querySelectorAll(".slideshow")

slideshows.forEach(slideshow => {
  const images = slideshow.querySelectorAll("img")

  slideshow.addEventListener("mousemove", function (event) {
    const x = event.offsetX
    const width = this.offsetWidth

    const percentage = x / width
    const imageNumber = Math.min(images.length - 1, Math.floor(percentage * images.length)
    )

    images.forEach(img => (img.style.zIndex = 0));
    images[imageNumber].style.zIndex = 1;
  })
})