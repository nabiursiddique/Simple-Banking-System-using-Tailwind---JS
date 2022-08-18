document.getElementById('withdraw-btn').addEventListener('click', function () {
    //Getting the withdraw input field value
    const withdrawFieldValue = getTheInputValue('withdraw-field');

    //Getting the withdraw dashboard value
    const withdrawDashboardValue = getDashboardValue('withdraw-amount');

    //setting the new calculated value in the dashboard
    const newWithdrawTotal = withdrawDashboardValue + withdrawFieldValue;
    setTheUpdatedValue('withdraw-amount', newWithdrawTotal);

    //Now updating the value in the balance dashboard 
    //getting the balance field value
    const balanceFieldValue = getDashboardValue('balance-amount');

    //If the balance field amount is less than withdraw amount then we will show a alert
    if(balanceFieldValue < withdrawFieldValue){
        alert("You don't have efficient balance to withdraw.");
        return;
    }
    
    const newBalanceAmount = balanceFieldValue - withdrawFieldValue;
    //setting the new balance in the balance dashboard
    setTheUpdatedValue('balance-amount', newBalanceAmount);
});