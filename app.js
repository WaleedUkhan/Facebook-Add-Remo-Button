let isstatus = document.querySelector("h1");

let Btn1 = document.querySelector("#frnd");

let count = 0;

// let Btn2 = document.querySelector("#remofrnd");

Btn1.addEventListener("click", function() {
   if(count == 0){
    isstatus.innerHTML = "Friends";
    isstatus.style.color = "green";
    // Btn1.style.color = "blue";
    Btn1.innerHTML = "Remove Frnd";
    count = 1;
   }
   else{
    isstatus.innerHTML = "Stranger";
    isstatus.style.color = "red";
    // Btn1.style.color = "yellow";
    Btn1.innerHTML = "Add Friend";
    count = 0;
   }
});

// Btn2.addEventListener("click", function() {
//     isstatus.innerHTML = "Stranger";
//     isstatus.style.color = "red";
// });
