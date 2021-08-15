// Handle deposit button event 
document.getElementById('deposit-button').addEventListener
    ('click', function () {

        // update deposit section 
        const depositInput = document.getElementById('deposit-input');
        const newDepositAmount = depositInput.value;

        const depositTotal = document.getElementById('deposit-total');
        const previousDepositAmount = depositTotal.innerText
        const newDepositTotal = parseFloat(previousDepositAmount) + parseFloat(newDepositAmount);
        depositTotal.innerText = newDepositTotal;
        depositInput.value = '';

        // update account balance 
        const balanceTotal = document.getElementById('balance-total');
        const previousBalanceAmount = balanceTotal.innerText;
        const newBalanceTotal = parseFloat(previousBalanceAmount) + parseFloat(newDepositAmount);
        balanceTotal.innerText = newBalanceTotal;
    })

// Handle withdraw button event 

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmount = withdrawInput.value;

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawAmount = withdrawTotal.innerText;
    const newWithdrawTotal = parseFloat(previousWithdrawAmount) + parseFloat(newWithdrawAmount);
    withdrawTotal.innerText = newWithdrawTotal;
    withdrawInput.value = '';

    // update account balance 
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceAmount = balanceTotal.innerText;
    const newBalanceTotal = parseFloat(previousBalanceAmount) - parseFloat(newWithdrawAmount);
    balanceTotal.innerText = newBalanceTotal;
})