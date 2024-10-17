const extractNumber = document.getElementsByTagName('button')



const createNumberCells = function (){
    const numbersSection = document.getElementById('numbers')
    const numbersTot = 75
    for (let i = 0; i <= numbersTot; i++) {
        const numberCells = document.createElement('div')
        numberCells.classList.add('cells')

        const cellValue = document.createElement('h3')
        cellValue.innerText = i + 1

        numberCells.appendChild(cellValue)
    
        numbers.appendChild(numberCells)
        
    }


}

createNumberCells()


// extractNumber.addEventListener('click',function () {

    
// } )