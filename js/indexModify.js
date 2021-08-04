import modifyBBDD from "./modifyBBDD.js";
import validationForm from "./validationForm.js";

let d = document;

d.addEventListener("DOMContentLoaded", () =>{
    document.getElementById("vegan-numbers").value = "";
    document.getElementById("not-vegan-numbers").value = "";
    document.getElementById("unclear-numbers").value = "";
})

d.getElementById("actualizar-bbdd").addEventListener("submit", el => {
    let inputs = Array.prototype.slice.call(document.getElementsByTagName("textarea"));
    inputs.forEach(input => {
        if(!validationForm(input)) return;
    });
    modifyBBDD(el)
}
);

d.addEventListener("keyup", el => {
    if((el.target.id === "vegan-numbers" || el.target.id === "not-vegan-numbers" || el.target.id === "unclear-numbers") && el.key === ",") validationForm(el.target);
})

d.addEventListener("focusout", el => {
    if((el.target.id === "vegan-numbers" || el.target.id === "not-vegan-numbers" || el.target.id === "unclear-numbers")) validationForm(el.target);
})