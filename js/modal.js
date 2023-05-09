document.addEventListener("DOMContentLoaded", function () {

    //hide fig caption
    var figCaption = document.querySelectorAll(".figure-caption");
    figCaption.forEach(figCaption => {
        figCaption.style.display = "none";
    });


    // Get the modal
    var modal = document.querySelectorAll(".modal");

    // Get the image and insert it inside the modal - use its caption text as a caption
    var img = document.querySelectorAll(".img-thumbnail");
    // var modalImg = document.querySelectorAll(".modal-content");
    var video = document.querySelectorAll(".video");
    var captionText = document.querySelectorAll(".caption");
    img.forEach(img => {
        img.addEventListener("click", (event) => {
            var index = event.target.id;
            // var sourceLink = event.target.src

            modal[index].style.display = "block";
            // modalImg[index].src = sourceLink.substring(0, sourceLink.lastIndexOf(".")) + ".mp4";

            //add auto play to video?

            captionText[index].innerHTML = figCaption[index].innerHTML;
            document.querySelector("header").classList.remove("sticky-top");

            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[index];

            // When the user clicks on <span> (x), close the modal
            span.onclick = function () {
                modal[index].style.display = "none";
                video[index].pause();
                video[index].currentTime = 0;
            }
        }); //end click
    }); //end forEach img event listener
}); //end wait load event listerner