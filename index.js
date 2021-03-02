//SMART GOAL

// refactor my code so that the dice appear on the page after a input of a number and reformat

let dice = {
    '&#9856':1,
    '&#9857':2, 
    '&#9858':3, 
    '&#9859':4, 
    '&#9860':5, 
    '&#9861':6
        }

    document.addEventListener('DOMContentLoaded', () => {
        let input = Number(document.querySelector('#number-of-dice').value)
        let rollTheDice = document.querySelector('#roll-the-dice')
        let diceStory = document.querySelector('#dice-para')
        rollTheDice.addEventListener('click', () => {
            let diceDsply = ''
            for (let i = 0; i < input; i++) {

                let arrKeys = Object.keys(dice) //[array of dice]
                 diceDsply += arrKeys[Math.floor(Math.random() * 6) + 1] // 
              
                 
            }
            diceStory.textContent = diceDsply
        })
      
    })
 