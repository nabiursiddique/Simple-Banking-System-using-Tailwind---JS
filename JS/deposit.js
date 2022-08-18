//Adding the event listener in the deposit button
document.getElementById('deposit-btn').addEventListener('click' , function(){
   //Getting the input field value 
   const depositFieldValue = getTheInputValue('deposit-field');
   console.log(depositFieldValue);
});