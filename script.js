let money = 0;
let hungerLevel = 100
let upgradeCost1 = 30
let upgradeCost2 = 75
let moneyPerClick = 0.25
const moneyText = document.getElementById("moneycount");
const starterText = document.getElementById("starterText")
moneyText.textContent = `$${money}`
const moneyButton = document.getElementById("moneyButton")
moneyButton.addEventListener("click", function click()  {
money += moneyPerClick
starterText.textContent = " "
moneyText.textContent = `$${money}`
})
const upgradeButton = document.getElementById("upgradeButton")
upgradeButton.addEventListener("click", function upgradeclick() {
  if (money >= upgradeCost1){
    moneyPerClick = 1
    money -= upgradeCost1
    moneyText.textContent = money
    upgradeCost1 = Infinity
    if (upgradeCost1 = Infinity){
      upgradeButton.textContent = "Unavailable"
    }
  }
  else if (money < upgradeCost1){
    starterText.textContent = "Unable to purchase upgrade."
  }
})
  
    
  const upgradeButton2 = document.getElementById("upgradeButton2")
upgradeButton2.addEventListener("click", function upgradeclick2() {
  if (money >= upgradeCost2){
    moneyPerClick = 5
    money - 75
    money -= upgradeCost2
    moneyText.textContent = money
    upgradeCost2 = Infinity
    if (upgradeCost2 = Infinity){
      upgradeButton2.textContent = "Unavailable"
    }
  }
  else if (money < upgradeCost2){
    starterText.textContent = "Unable to purchase upgrade."
  }
})
  
const foodButton = document.getElementById("foodButton")
