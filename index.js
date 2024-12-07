let sta=document.querySelector("h5");

var add=document.querySelector("#add");
let rem=document.querySelector("#remove");
var value = 0;
add.addEventListener("click", function() {
    if (value === 0) {
        sta.innerHTML = "friends";
        sta.style.color = "green";
        value = 1; // Toggle to next state
    } else {
        sta.innerText = "Stranger";
        sta.style.color = "red";
        value = 0; // Toggle back to initial state
    }
});
// rem.addEventListener("click",()=>{
//     sta.innerText="Stranger";
//     sta.style.color="red";
// });
