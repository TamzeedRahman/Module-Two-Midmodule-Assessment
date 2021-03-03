//SMART GOAL

// refactor my code so that the dice appear on the page after a input of a number and reformat

let diceObj = {
    '⚀':1,
    '⚁':2, 
    '⚂':3, 
    '⚃':4, 
    '⚄':5, 
    '⚅':6
        }

    document.addEventListener('DOMContentLoaded', () => {
        let input = document.querySelector('#number-of-dice') // 3
        let rollTheDiceBtn = document.querySelector('#roll-The-Dice-Btn')
        let diceStory = document.querySelector('#dice-para')
        let diceSum = document.querySelector('#sum-para')
        rollTheDiceBtn.addEventListener('click', () => {
            let diceDsply = ''
            let sum = 0
            for (let i = 1; i <= input.value ; i++) {
                
                let arrKeys = Object.keys(diceObj) //['&#9856','&#9857']
                let arrValue = Object.values(diceObj)
                randomNum = Math.floor(Math.random() * 6)
                dice = arrKeys[randomNum] // 
                diceNum = arrValue[randomNum]
                diceDsply += dice
                sum += diceNum
                 
            }
            
            diceStory.textContent = diceDsply
            diceSum.textContent = `Sum = ${sum}`
        })
      
    })
 