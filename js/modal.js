document.addEventListener("DOMContentLoaded", function () {

    //hide fig caption
    var figCaption = document.querySelectorAll(".figure-caption");
    figCaption.forEach(figCaption => {
        figCaption.style.display = "none";
    });
    

    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    //need to make a new function to loop through the node list.

    var img = document.getElementById("myImg");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = figCaption.innerHTML;
        document.querySelector("header").classList.remove("sticky-top");
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }



}); //end wait load event listerner