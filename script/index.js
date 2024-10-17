const numbersTot = 75

const removeOldNum = function () { 
                    const allRandom = document.getElementsByClassName('numextr')
                    for (let i = 0; i < allRandom.length; i++) {
                        
                        allRandom[i].remove(i)
                    }}
                    
                    
const createNumberCells = function (){
                    const numbersSection = document.getElementById('numbers')
                        
                    for (let i = 0; i <= numbersTot; i++) {
                            
                        const numberCells = document.createElement('div')
                        numberCells.classList.add('cells')
                        numberCells.setAttribute('data-value', i + 1)
                            
                        const cellValue = document.createElement('h3')
                        cellValue.innerText = i + 1
                            
                        numberCells.appendChild(cellValue)
                        numbersSection.appendChild(numberCells)
                    }}


const extractNumber = function (){
    randomNum = document.querySelector('button')
    randomNum.addEventListener('click', function() {
  
      removeOldNum()  
  
      const randomNumber = Math.floor(Math.random() * 76) + 1

        const allCells = document.querySelectorAll('.cells')
        allCells.forEach(cell => {
            if (parseInt(cell.getAttribute('data-value')) === randomNumber) {
                cell.classList.add('selected')
            }
        })
      
        const extrNum = document.createElement('div')
        extrNum.classList.add('numextr')
        const numValue = document.createElement('h3')
        numValue.innerText = randomNumber

        extrNum.appendChild(numValue)
        numextr.appendChild(extrNum)
    })
}


createNumberCells()
extractNumber()


