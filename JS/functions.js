//This function will work for getting the value from the input field
function getTheInputValue(idName){
    const inputFieldElement = document.getElementById(idName);
    const inputFieldString = inputFieldElement.value;
    inputFieldElement.value = '';
    const inputFieldValue = parseFloat(inputFieldString);
    return inputFieldValue;
}

//This function will work to get or read the value in the dashboard
function getDashboardValue(idName){
    const dashboardElement = document.getElementById(idName);
    const previousAmountString = dashboardElement.innerText;
    const previousAmountValue = parseFloat(previousAmountString);
    return previousAmountValue;
}

//This function will set the final value in the dashboard
function setTheUpdatedValue(idName, newValue){
    document.getElementById(idName).innerText = newValue;
 }