let money = 0;
const moneyText = document.getElementById("moneycount");
money++;
moneyText.textContent = money
const moneyButton = document.getElementById("moneyButton")
moneyButton.addEventListener("click", function ()  {
money++
moneyText.textContent = money
})