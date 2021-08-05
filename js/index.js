import sendRequest from "./request.js";

document.getElementById("search-engine").addEventListener("keyup", el => {
    if(el.target.value.length > 1) sendRequest(el);
})