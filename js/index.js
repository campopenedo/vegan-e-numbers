import sendRequest from "./sendRequest.js";

document.getElementById("search-engine").addEventListener("keyup", el => {
    sendRequest(el);
})