let $ = document
let map = $.querySelector('.map')
let square = $.querySelectorAll('.square')
for (let i = 0; i < square.length; i++) {
   let obstacle =  square[i]
   if (obstacle == 20) {
        target.Style.backgroundColor = 'red'
    }
}


