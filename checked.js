const mycheckbox = document.getElementById("mycheckbox");
const sub = document.getElementById("sub");

const visapay = document.getElementById("visapay");
const googlepay = document.getElementById("googlepay");
const ppay = document.getElementById("ppay");
const mysubmit = document.getElementById("mysubmit");

const Payresult = document.getElementById("Payresult");

mycheckbox.onclick = function () {
  if (mycheckbox.checked) {
    console.log("Checkbox is checked");
    sub.textContent = `Subscribed`;
  } else {
    console.log("Checkbox is not checked");
    sub.textContent = `Subscribe`;
  }
}

mysubmit.onclick = function () {
  if (visapay.checked) {
    Payresult.textContent = " Your payment is successfull via Visa";
  } else if (googlepay.checked) {
    Payresult.textContent = " Your payment is successfull via googlepay";
  } else if (ppay.checked) {
    Payresult.textContent = " Your payment is successfull via Phonepe";
  } else {
    Payresult.textContent = " Your payment is not done yet";
  }
}
