export default function sendData(form) {
    form.preventDefault();
    let finalWarning = document.querySelector(".not-valid-data");
    if(document.querySelector(".not-valid-text p")){
        let notValid = "<p>Not valid data.</p>";

        finalWarning.innerHTML = notValid;
    } else {
        finalWarning.innerHTML = "";
    }
}