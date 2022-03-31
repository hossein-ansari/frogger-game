
// make arandom num 
function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
// var 
let random1 = Math.floor(randomNumber(10, 19));
let random2 = Math.floor(randomNumber(20, 29));
let random3 = Math.floor(randomNumber(30, 39));
let random3_2 = Math.floor(randomNumber(30, 39));
let random4 = Math.floor(randomNumber(40, 49));
let random5 = Math.floor(randomNumber(50, 59));
let random5_2 = Math.floor(randomNumber(50, 59));
let random6 = Math.floor(randomNumber(60, 69));
let random7 = Math.floor(randomNumber(70, 79));
let random8 = Math.floor(randomNumber(80, 89));
let random9 = Math.floor(randomNumber(90, 99));
//  code 
// cheke for lose or win and make Barrier 
function Barrier() {  
  if (square[frog].classList.contains("Barrier")) {
    square[frog].classList.remove("frog");
    alert("game over");
    history.go(0);
  } else if (square[frog].classList.contains("win")) {
    alert('your win')
    history.go(0);
  }
  // barriers 
  function randomOne() {
    if (random1 < 19) {
      square[random1].classList.remove("Barrier");
      random1++;
      square[random1].classList.add("Barrier");
    } else {
      square[random1].classList.remove("Barrier");
      random1 -= 10;
    }
  }
  function randomTwo() {
    if (random2 < 29) {
      square[random2].classList.remove("Barrier");
      random2++;
      square[random2].classList.add("Barrier");
    } else {
      square[random2].classList.remove("Barrier");
      random2 -= 10;
    }
  }
  function randomThree() {
    if (random3 < 39) {
      square[random3].classList.remove("Barrier");
      square[random3_2].classList.remove("Barrier");
      random3++;
      random3_2++;
      square[random3].classList.add("Barrier");
      square[random3_2].classList.add("Barrier");
    } else {
      square[random3].classList.remove("Barrier");
      square[random3_2].classList.remove("Barrier");
      random3_2 -= 10;
      random3 -= 10;
    }
  }
  function randomFour() {
    if (random4 < 49) {
      square[random4].classList.remove("Barrier");
      random4++;
      square[random4].classList.add("Barrier");
    } else {
      square[random4].classList.remove("Barrier");
      random4 -= 10;
    }
  }
  function randomFive() {
    if (random5 < 59) {
      square[random5].classList.remove("Barrier");
      square[random5_2].classList.remove("Barrier");

      random5++;
      random5_2++;

      square[random5].classList.add("Barrier");
      square[random5_2].classList.add("Barrier");
    } else {
      square[random5].classList.remove("Barrier");
      square[random5_2].classList.remove("Barrier");
      random5_2 -= 10;
      random5 -= 10;
    }
  }
  function randomSix() {
    if (random6 < 69) {
      square[random6].classList.remove("Barrier");
      random6++;
      square[random6].classList.add("Barrier");
    } else {
      square[random6].classList.remove("Barrier");
      random6 -= 10;
    }
  }
  function randomSeven() {
    if (random7 < 79) {
      square[random7].classList.remove("Barrier");
      random7++;
      square[random7].classList.add("Barrier");
    } else {
      square[random7].classList.remove("Barrier");
      random7 -= 10;
    }
  }
  function randomEighit() {
    if (random8 < 89) {
      square[random8].classList.remove("Barrier");
      random8++;
      square[random8].classList.add("Barrier");
    } else {
      square[random8].classList.remove("Barrier");
      random8 -= 10;
    }
  }
  function randomNine() {
    if (random9 < 89) {
      square[random9].classList.remove("Barrier");
      random9++;
      square[random9].classList.add("Barrier");
    } else {
      square[random9].classList.remove("Barrier");
      random9 -= 10;
    }
  }

  randomOne();
  randomTwo();
  randomThree();
  randomFour();
  randomFive();
  randomSix();
  randomSeven();
  randomEighit();
  randomNine();

}
setInterval(Barrier, 650);
