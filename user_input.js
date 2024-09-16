// taking userinput

// Easy way = window promt

/*let username;

username = window.prompt("what's your user name?");
console.log(username);*/

//PRofessional way = HTML textbox;
let username;
document.getElementById("mysubmit").onclick = function()
{
    username = document.getElementById("mytext").value;
    console.log(username);
    document.getElementById("myH1").textContent = `Hello ${username}`
}
