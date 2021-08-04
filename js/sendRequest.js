export default function sendRequest(el){
    let numbers = el.target.value;
    let formData = new FormData();

    formData.append("search-engine" ,numbers)

    fetch("php/sendRequest.php", {
        method: "POST",
        body: formData
    })
        .then(data => data.text())
        .then(text => console.log(text));
}