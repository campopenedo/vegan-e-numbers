import sendData from "./sendData.js";
import validation from "./validation.js";

let d = document;

d.addEventListener("DOMContentLoaded", () =>{
    document.getElementById("vegan-numbers").value = "";
    document.getElementById("not-vegan-numbers").value = "";
    document.getElementById("unclear-numbers").value = "";
})

d.getElementById("actualizar-bbdd").addEventListener("submit", el => sendData(el)
);

d.addEventListener("keyup", el => {
    if((el.target.id === "vegan-numbers" || el.target.id === "not-vegan-numbers" || el.target.id === "unclear-numbers") && el.key === ",") validation(el);
})

d.addEventListener("focusout", el => {
    if((el.target.id === "vegan-numbers" || el.target.id === "not-vegan-numbers" || el.target.id === "unclear-numbers")) validation(el);
})