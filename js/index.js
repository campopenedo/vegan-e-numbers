import sendRequest from "./request.js";

document.getElementById("search-engine").addEventListener("keyup", el => {
    sendRequest(el);
})