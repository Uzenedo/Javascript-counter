const countervalue = document.getElementById("counter-value");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");

var counter = 0;
increase.addEventListener("click", () => {
    if (counter <= 49) {
       counter += 1;
       countervalue.innerHTML = counter 
    }
});

decrease.addEventListener("click", () => {
    if (counter >= 1) {
       counter -= 1;
       countervalue.innerHTML = counter 
    }
})