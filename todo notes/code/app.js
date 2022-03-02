
import("./app.css")


const h1= document.createElement("h1");
h1.innerText= "jatin sharma";
h1.classList.add("green")

const h2= document.createElement("h2");
h2.innerText= "asd";
h2.classList.add("border");


document.getElementById("root").appendChild(h1, h2);