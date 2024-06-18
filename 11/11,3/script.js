document.addEventListener("DOMContentLoaded", function() {
    const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg'];
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];

    const imageElement = document.getElementById("randomImage");
    imageElement.src = randomImage;
})