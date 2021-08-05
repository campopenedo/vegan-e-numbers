export default function sendRequest(el){
    let numbers = el.target.value;
    let formData = new FormData();

    formData.append("search-engine" ,numbers)

    fetch("php/sendRequest.php", {
        method: "POST",
        body: formData
    })
        .then(data => data.json())
        .then(json => {
            let text = "";
            json.forEach(element => {
                let atr = "";
                switch(element.vegan) {
                    case "Vegan":
                        atr = "vegan";
                        break;
                    case "Not Vegan":
                        atr = "not-vegan";
                        break;
                    case "Depends of manufacter":
                        atr="depends";
                        break;
                        
                }
                text += `<li>${element.enumber}: <span class='${atr}'>${element.vegan}</span>. Last update: ${element.last_update}</li>`;
            });

            document.getElementsByTagName("ul")[0].innerHTML = text;
        });
}