//This function will work for getting the value from the input field
function getTheInputValue(idName){
    const inputFieldElement = document.getElementById(idName);
    const inputFieldString = inputFieldElement.value;
    const inputFieldValue = parseFloat(inputFieldString);
    return inputFieldValue;
}