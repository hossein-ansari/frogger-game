function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
let random1 = Math.floor(randomNumber(10, 19));
let random2 = Math.floor(randomNumber(10, 19));
let random3 = Math.floor(randomNumber(30, 39));
let random4 = Math.floor(randomNumber(30, 39));
let random5 = Math.floor(randomNumber(50, 59));
let random6 = Math.floor(randomNumber(50, 59));
let random7 = Math.floor(randomNumber(70, 79));
let random8 = Math.floor(randomNumber(60, 69));
let random9 = Math.floor(randomNumber(40, 51));
let random10 = Math.floor(randomNumber(40, 53));

function Barrier() {
  square[random1].classList.remove("Barrier");
  square[random2].classList.remove("Barrier");
  square[random3].classList.remove("Barrier");
  square[random4].classList.remove("Barrier");
  square[random5].classList.remove("Barrier");
  square[random6].classList.remove("Barrier");
  square[random7].classList.remove("Barrier");
  square[random8].classList.remove("Barrier");
  square[random9].classList.remove("Barrier");
  square[random8].classList.remove("Barrier");

  random1++;
  random2++;
  random3++;
  random4++;
  random5++;
  random6++;
  random7++;
  random8++;
  random9++;
  random10++;

  square[random1].classList.add("Barrier");
  square[random2].classList.add("Barrier");
  square[random3].classList.add("Barrier");
  square[random4].classList.add("Barrier");
  square[random5].classList.add("Barrier");
  square[random6].classList.add("Barrier");
  square[random7].classList.add("Barrier");
  square[random8].classList.add("Barrier");
  square[random9].classList.add("Barrier");
  square[random10].classList.add("Barrier");
}
setInterval(Barrier, 650);
