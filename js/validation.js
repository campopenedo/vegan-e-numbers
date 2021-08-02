export default async function validationForm(bruteText) {
    let text = bruteText.target.value,
    eNumbers = text.replace(/ |"|'|`|\[|\]/g, ""),
    verifyNumbers = new RegExp("^([Ee][0-9]{3,4}[a-zA-Z]{0,1},){1,}$"),
    nextElem = bruteText.target.nextElementSibling;
    
    console.log(verifyNumbers.test(eNumbers));
    
    if(!verifyNumbers.test(eNumbers) && nextElem.innerHTML.length === 0) {
        let notValid = `
            <p>Not valid data. Valid data examples: E100, E101, E102 || "E100", \`E101\`, 'E102' || ["e100", "E101", "E102"]</p>
       `;
        nextElem.innerHTML = notValid;
        
        nextElem.classList.add("activo");
    } else if(verifyNumbers.test(eNumbers)) {
        nextElem.classList.remove("inactivo");
        nextElem.innerText = "";
    }
}