const container = document.querySelector('#container');
const sizeBtn = document.querySelector('#size');
const resetBtn = document.querySelector('#reset');
let initialSize = 16;

createGrid(initialSize);

sizeBtn.addEventListener('click', () => {
    let size = prompt("Input grid size. (Eg: 16 for 16x16 grid)\nMaximum allowed size = 100");
    while (size > 100)
    {
        size = prompt("Maximum allowed size is 100.\nKindly input a valid grid size.");
    }
    if (size == null || size == "")
    {
        size = 16;
    }
    deleteGrid(initialSize);
    createGrid(size);
    initialSize = size;
});

resetBtn.addEventListener('click', () => {
    deleteGrid(initialSize);
    createGrid(initialSize);
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
            colDiv.setAttribute('value', '1');
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

let click = false;
container.addEventListener('click', (e) => {
    if (click)
    {
        click = false;
    }
    else
    {
        click = true;
    }

    container.addEventListener('mouseover', (e) => {
        if (e.target.getAttribute('class') == 'unit' && click)
        {
            e.target.style.backgroundColor = generateColor();
            e.target.style.filter = darken(e.target);
        }
    });
});

function generateColor()
{
    return `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`;
}

function randomRGB()
{
    return Math.floor(Math.random()*255);
}

function darken(target)
{
    let value = target.getAttribute('value')
    if (value == '0')
    {
        return 'brightness(0)';
    }
    value = value - 0.1;
    target.setAttribute('value', `${value}`);
    return `brightness(${value})`;
}