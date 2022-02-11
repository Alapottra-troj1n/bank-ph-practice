const depositBtn = document.querySelector(".deposit-btn");
const withdrawBtn = document.querySelector(".withdraw-btn");
const errorHandle = document.querySelector('#error-handle');

function getInputValue(id) {
  let inputText = document.querySelector(id);
  let inputValue = parseFloat(inputText.value);
  inputText.value = "";
  return inputValue;
}
function getAndUpdateInnerTextValue(id, amount) {
  let currentAmount = document.querySelector(id);
  let currentTextValue = parseFloat(currentAmount.innerText);
  let totalValue = currentTextValue + amount;
  currentAmount.innerText = totalValue;
}

function updateBalance(value, isAdd) {
  let currentBalance = document.querySelector("#balance");
  let currentBalanceValue = parseFloat(currentBalance.innerText);

  if (isAdd === true) {
    let totalBalance = currentBalanceValue + value;
    currentBalance.innerText = totalBalance;
  } else {
    let totalBalance = currentBalanceValue - value;
    currentBalance.innerText = totalBalance;
  }
}

depositBtn.addEventListener("click", function () {
 //INNNER VALUE
  const depositValue = getInputValue("#deposit-input");
  console.log(depositValue);

  if(depositValue > 0) {

    //INNER TEXT
    getAndUpdateInnerTextValue("#deposit-amount", depositValue);
    //UPDATE BALANCE
    updateBalance(depositValue, true);
    errorHandle.classList.remove('text-red-500');
    errorHandle.classList.add('text-green-500');
    errorHandle.innerText = "Funds have been sucessfully added to you account";
    
    
  }else{
    errorHandle.classList.remove('text-green-500');
    errorHandle.classList.add('text-red-500');
    errorHandle.innerText = "Please Insert a Positive Number";
 
  }

 
});

withdrawBtn.addEventListener("click", function () {
  //BALANCE
  let balance = parseFloat(document.getElementById("balance").innerText);
  console.log(balance);

   //INNNER VALUE
  let withdrawAmountValue = getInputValue("#withdraw-input");

  if(withdrawAmountValue > 0 && withdrawAmountValue < balance){
      //INNER TEXT
  getAndUpdateInnerTextValue("#withdraw-amount", withdrawAmountValue);
  //UPDATE BALANCE
  updateBalance(withdrawAmountValue, false);
  errorHandle.classList.remove('text-red-500');
  errorHandle.classList.add('text-green-500');
  errorHandle.innerText = "Funds have been sucessfully withdrawn from your account";
  }else{
    errorHandle.classList.remove('text-green-500');
    errorHandle.classList.add('text-red-500');
    errorHandle.innerText = "Withdraw Failed ! Insufficient Funds";

  }

 

});
