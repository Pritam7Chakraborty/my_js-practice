// const = a variable that cannot be changed

/*const PI = 3.1411059;
let radius;
let circumference;

radius = window.prompt("Enter the radius: ");
radius=Number(radius);

circumference = 2* PI * radius;*/
const PI = 3.1411059;
let radius;
let circumference;
document.getElementById("mysubmit").onclick = function()
{
    radius = document.getElementById("mytext").value;
    radius=Number(radius);
    circumference = 2* PI * radius;
    document.getElementById("myh3").textContent = circumference + "cm";
}