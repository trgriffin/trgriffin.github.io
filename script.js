var state = false;

const div = document.getElementById('menu');

var button = document.getElementById('button');

button.onclick = function () {
   if(state == false) {
      div.classList.replace("off", "on")
      state = !state;
   }
   else {
      div.classList.replace("on", "off")
      state = !state;
   }
}
