const depositBtn = document.querySelector(".deposit-btn");
const withdrawBtn = document.querySelector(".withdraw-btn");

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
  let depositValue = getInputValue("#deposit-input");
  //INNER TEXT
  getAndUpdateInnerTextValue("#deposit-amount", depositValue);
  //UPDATE BALANCE
  updateBalance(depositValue, true);
});

withdrawBtn.addEventListener("click", function () {
  //INNNER VALUE
  let withdrawAmountValue = getInputValue("#withdraw-input");
  //INNER TEXT
  getAndUpdateInnerTextValue("#withdraw-amount", withdrawAmountValue);
  //UPDATE BALANCE
  updateBalance(withdrawAmountValue, false);
});
