export default function validationForm(letter) {
    let text = letter.target.value,
    eNumbers = text.replace(/ |"|'|`|\[|\]/g, ""),
    verifyNumbers = new RegExp("^(E[0-9]{3,4}[a-z]{0,1},){1,}$"),
    nextElem = letter.target.nextElementSibling;
    
    console.log(verifyNumbers.test(eNumbers));
    
    if(!verifyNumbers.test(eNumbers) && nextElem.id !== "not-valid-text") {
        let notValid = `<section id='not-valid-text'>
            <p>Not valid data. Valid data examples: E100, E101, E102 || "100", "E101", "E102" || ["100", "E101", "E102"]</p>
        </section>`;
        letter.target.insertAdjacentHTML("afterend", notValid);
    } else if(verifyNumbers.test(eNumbers) && nextElem.id === "not-valid-text") {
            letter.target.nextElementSibling.remove();
    }
}