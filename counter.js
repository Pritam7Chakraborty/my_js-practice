const Decreament=  document.getElementById("decreasebtn");
const Reset=  document.getElementById("Resetbtn");
const Increament=  document.getElementById("increasebtn");
const countlabel = document.getElementById("countlabel");

let count =0;

Increament.onclick = function (){
    count++;
    countlabel.textContent =count;
}
Reset.onclick = function (){
    count =0;
    countlabel.textContent =count;
}
Decreament.onclick = function (){
    count--;
    countlabel.textContent =count;
}