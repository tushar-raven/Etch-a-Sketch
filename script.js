const container = document.querySelector('.container');


function createGrid(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size*size;

    for (let i = 0; i < numDivs; i++){
        const div = document.createElement('div');
        container.appendChild(div);
    }
}

createGrid(64);