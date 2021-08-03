export default async function validationForm(bruteText) {
    let text = `${bruteText.value.length === 0 ? bruteText.innerText : bruteText.value}`,
    eNumbers = text.replace(/ |"|'|`|\[|\]/g, ""),
    verifyNumbers = new RegExp("^([Ee][0-9]{3,4}[a-zA-Z]{0,1},{0,1}){1,}$"),
    nextElem = bruteText.nextElementSibling;
        
    if(!verifyNumbers.test(eNumbers) && eNumbers.length > 0 && nextElem.innerHTML.length === 0) {
        
        let notValid = `
            <p>Not valid data. Valid data examples: E100, E101b, E1022,"E100C", \`E101\`, 'E102',["e100", "E101", "E102"]</p>
       `;
        nextElem.innerHTML = notValid;
        return false;
    } else if(verifyNumbers.test(eNumbers) || eNumbers.length === 0) {
        nextElem.innerText = "";
        return true;
    }
}