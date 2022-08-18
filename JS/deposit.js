//Adding the event listener in the deposit button
document.getElementById('deposit-btn').addEventListener('click' , function(){
   //Getting the input field value 
   const depositFieldValue = getTheInputValue('deposit-field');

   //Show the input field value in the dashboard
   const previousDepositAmount = getDashboardValue('deposit-amount');

   //set the new value in the dashboard
   const newDepositAmount = previousDepositAmount + depositFieldValue;
   setTheUpdatedValue('deposit-amount',newDepositAmount);

   //Now updating the value in the balance dashboard 
   
   //getting the balance field value
   const balanceFieldValue = getDashboardValue('balance-amount');
   const newBalanceAmount = balanceFieldValue + depositFieldValue;
   //setting the new balance in the balance dashboard
   setTheUpdatedValue('balance-amount', newBalanceAmount);

   
});