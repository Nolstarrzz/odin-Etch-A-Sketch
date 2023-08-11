const container = document.querySelector('#container');
let blockSize = 16;

container.style.width = (blockSize * blockSize) + 'px';
container.style.display = 'grid';
container.style.gridTemplateColumns = 'repeat(' + blockSize + ', ' + blockSize + 'px)';
container.style.gridTemplateRows = 'repeat(' + blockSize + ', ' + blockSize + 'px)';

for (let i = 0; i < 16; i++) {   
    for (let j = 0; j < 16; j++) {
        const blocks = document.createElement('div');
        blocks.classList.add('paintSurface');
        blocks.style.width = blockSize + 'px';
        blocks.style.height = blockSize + 'px';
        blocks.textContent = 'hi';
        container.appendChild(blocks);
    }
}