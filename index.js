let againbtn = document.querySelector("#againbtn");
let para = document.querySelector("#para");
let input = document.querySelector("#input");
let checkbtn = document.querySelector("#checkbtn");
let heading1 = document.querySelector("#heading1");
let heading2 = document.querySelector("#heading2");

let x = Math.floor(Math.random() * 100);
count = 0;

checkbtn.addEventListener("click", (event) => {
  
  count += 1;

  let ivalue = input.value;
  if (ivalue < 0) {
    heading1.innerHTML = "Invalid Input";
  }
  if (ivalue > 100) {
    heading1.innerHTML = "Invalid Input";
  }
  if (ivalue > x) {
    heading1.innerHTML = "Entered Number is High";
  }
  if (ivalue < x) {
    heading1.innerHTML = "Entered Number is Low";
  }
  if (ivalue == x) {
    heading1.innerHTML = "Correct Number";
    para.innerHTML = x;
    document.body.style.background = "maroon";

    heading2.innerHTML = 100 - count;
  }
});
