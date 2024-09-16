//String slicing = creating A SUBstring from a portion of another string

//string.slice(start,end)

const email ="cpritam870@gmail.com";

let username = email.slice(0,email.indexOf("@"));
let extension = email.slice(email.indexOf("@")+1) ;

console.log(username);
console.log(extension);