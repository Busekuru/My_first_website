let myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "my_image/profile_photo.jpeg") {
      myImage.setAttribute("src", "my_image/profile_photo2.webp");
    } else {
      myImage.setAttribute("src", "my_image/profile_photo.jpeg");
    }
  });

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
