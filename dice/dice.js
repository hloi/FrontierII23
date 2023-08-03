  
function roll() {
    const sides = 6;
      var randomNumber = Math.floor(Math.random() * sides) + 1;
      let placeholder = document.getElementById('placeholder');
      placeholder.innerHTML = randomNumber;
}
  
var button = document.getElementById('button');
button.addEventListener("click", roll);
  