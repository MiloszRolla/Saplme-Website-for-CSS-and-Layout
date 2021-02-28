function activateGallery() {
  let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img")
  let mainImage  = document.querySelector("#gallery-photo > img")
  let currentClass = "current"

thumbnails.forEach(function(thumbnail){
  thumbnail.addEventListener("click",function () {
    // set clicled image as main image.
    let newImageSrc = thumbnail.dataset.largeVersion;
    mainImage.setAttribute("src",newImageSrc)
    mainImage.setAttribute("alt", thumbnail.dataset.description);

    // Change which image is current.
    document.querySelector(".current").classList.remove(currentClass);
    thumbnail.parentNode.classList.add(currentClass);

    // Update imgae info.
    let galleryInfo = document.querySelector("#gallery-info");
    let title = galleryInfo.querySelector(".title");
    let description = galleryInfo.querySelector(".description");

    title.innerHTML = thumbnail.dataset.title;
    description.innerHTML = thumbnail.dataset.description;
  });
});

}
