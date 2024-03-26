const container = document.querySelector('#container');

for (let i=0; i<16; i++)
{
    let rowDiv = document.createElement('div');
    rowDiv.setAttribute('class', 'row');
    container.appendChild(rowDiv);
    
    for (let j=0; j<16; j++)
    {
        let colDiv = document.createElement('div');
        colDiv.setAttribute('class', 'unit');
        rowDiv.appendChild(colDiv);
    }
}

container.addEventListener('mouseover', (e) => {
    if (e.target.getAttribute('class') == 'unit')
    {
        e.target.style.backgroundColor = 'blue';
    }
});