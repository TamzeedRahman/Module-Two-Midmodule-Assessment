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
            roll()
        })
        function roll(){
           let diceDsply = ''
            for (let i = 0; i < input; i++) {

                let arrKeys = Object.keys(dice) //[array of dice]
                 diceDsply = arrKeys[floor(Math.random() * 6)] // 
              
                 
            }
            diceStory.textContent = diceDsply
        }
    })
 