let dice = {
    '&#9856':1,
    '&#9857':2, 
    '&#9858':3, 
    '&#9859':4, 
    '&#9860':5, 
    '&#9861':6
        }

    document.addEventListener('DOMContentLoaded', () => {
        const numberOfDice = document.querySelector('#number-of-dice') //3
        const rollTheDice = document.querySelector('#roll-the-dice')
        const diceStory = document.querySelector('#dice-para')
        rollTheDice.addEventListener('click', () => {
            roll()
        })
        function roll(){
           let diceDsply = ''
            for (let i = 0; i < numberOfDice.value; i++) {
                console.log(numberOfDice.value)
                 diceNum = Math.floor(Math.random() * 6) // 1-6
              let arrKeys = Object.keys('dice')
              
               diceDsply += arrKeys[diceNum]
                 
            }
            diceStory.textContent = diceDsply
        }
    })
 