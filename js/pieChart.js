document.addEventListener("DOMContentLoaded", function() {
  
  const JAVASCRIPT = this.getElementById("javaScript");
  const CSS = this.getElementById("css");
  const REACT = this.getElementById("react");
  const VIDEO = this.getElementById("video");
  const WORK = this.getElementById("work");
  const CATEGORY_CARD = this.getElementById("categoryCard");
  const PIE_PIECE = this.querySelectorAll("circle.piePiece");
  console.log(PIE_PIECE);
  
  const SKILLS_LIST = [JAVASCRIPT, CSS, REACT, VIDEO, WORK];

  PIE_PIECE.forEach(function(slice) {
    slice.addEventListener("click", function (event) {
      let slice = event.target; //slice is not working here****
      console.log(slice);
      let i;
  
      
      switch (slice.getAttribute('id')) {
        case pieceOne:
          i = 1;
          console.log(i);
          break;
        case pieceTwo:
          i = 2;
          console.log(i);
          break;
        case pieceThree:
          i = 3;
          console.log(i);
          break;
        case pieceFour:
          i = 4;
          console.log(i);
          break;
        default:
          i = 5;
          console.log(i);
      }; //end switch
    }); //end click event lister
  }); //end for each

  //add an event listener for the class on each piece of the pie chart. let that program the index on the array that is chosen.
  CATEGORY_CARD.innerHTML = SKILLS_LIST[0].innerHTML;
}); //end ready