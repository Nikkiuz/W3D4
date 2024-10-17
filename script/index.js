const numbersTot = 75

const removeOldNum = function () { 
                    const allRandom = document.getElementsByClassName('numextr')
                    for (let i = 0; i < allRandom.length; i++) {
                        
                        allRandom[i].remove(i)
        }}

const extractNumber = function (){
        randomNum = document.querySelector('button')
        
        randomNum.addEventListener('click', function() {        
                
            const removeOldNum = function () { 
                const allRandom = document.getElementsByClassName('numextr')
                for (let i = 0; i < allRandom.length; i++) {
                    
                    allRandom[i].remove(i)
    }}

                 const extrNum = document.createElement('div')
                 extrNum.classList.add('numextr')

                const numValue = document.createElement('h3')
                 numValue.innerText = Math.floor(Math.random() * 76) + 1

                 extrNum.appendChild(numValue)
                 numextr.appendChild(extrNum)
 
            }
        
        )}





const createNumberCells = function (){
    const numbersSection = document.getElementById('numbers')
    for (let i = 0; i <= numbersTot; i++) {
        const numberCells = document.createElement('div')
        numberCells.classList.add('cells')

        const cellValue = document.createElement('h3')
        cellValue.innerText = i + 1

        numberCells.appendChild(cellValue)
    
        numbersSection.appendChild(numberCells)
        
    }


}

createNumberCells()
console.log(extractNumber())
removeOldNum()
