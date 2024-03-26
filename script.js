const container = document.querySelector('#container');
const sizeBtn = document.querySelector('#size');
let initialSize = 16;

createGrid(initialSize);

sizeBtn.addEventListener('click', () => {
    let size = prompt("Input grid size. (Eg: 16 for 16x16 grid)\nMaximum allowed size = 100");
    while (size > 100)
    {
        size = prompt("Maximum allowed size is 100.\nKindly input a valid grid size.");
    }
    deleteGrid(initialSize);
    createGrid(size);
    initialSize = size;
});

function createGrid(size)
{
    for (let i=0; i<size; i++)
    {
        let rowDiv = document.createElement('div');
        rowDiv.setAttribute('class', 'row');
        container.appendChild(rowDiv);
        
        for (let j=0; j<size; j++)
        {
            let colDiv = document.createElement('div');
            colDiv.setAttribute('class', 'unit');
            rowDiv.appendChild(colDiv);
        }
    }
}

function deleteGrid(size)
{
    for (let i=0; i<size; i++)
    {
        container.removeChild(document.querySelector('.row'));
    }
}


container.addEventListener('mouseover', (e) => {
    if (e.target.getAttribute('class') == 'unit')
    {
        e.target.style.backgroundColor = 'blue';
    }
});