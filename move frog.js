let $ = document;
let map = $.querySelector(".map");
let square = $.querySelectorAll(".square");
let rows = $.querySelectorAll(".rows div");
let frog = 89;
let movehight = 10;
function movefrog(e) {
  square[frog].classList.remove("frog");
  switch (e.key) {
    case "ArrowUp":
        if (frog > 10) {
            
            frog -= movehight;
        }
      break;
    case "ArrowLeft":
      if (frog > 0) {
        frog -= 1;
      }
      break;
    case "ArrowDown":
        if (frog < 90) {
            frog += movehight;
        }
      
      break;
    case "ArrowRight":
        if (frog < 99) {
            
            frog += 1;
        }
      break;

  }
  square[frog].classList.add("frog");
}
window.addEventListener("keyup", movefrog);
