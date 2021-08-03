export default function sendData(form) {
    form.preventDefault();
    let finalWarning = document.querySelector(".not-valid-data");
    if(document.querySelector(".not-valid-text p")){
        let notValid = "<p>Not valid data.</p>";
        finalWarning.innerHTML = notValid;
    } else {
        finalWarning.innerHTML = "";
        let data = new FormData(document.querySelector("form"));
        fetch("php/enviarDatos.php", {
            method: "POST",
            body: data
        })
            .then(data => data.text())
            .then(text => console.log(text));
    }
}