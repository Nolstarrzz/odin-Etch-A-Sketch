const container = document.querySelector('#container');
let blockSize = 64;

/*container.style.width = (blockSize * blockSize) + 'px';
container.style.display = 'grid';
container.style.gridTemplateColumns = 'repeat(' + blockSize + ', ' + blockSize + 'px)';
container.style.gridTemplateRows = 'repeat(' + blockSize + ', ' + blockSize + 'px)';*/

container.style.display = 'flex';
container.style.width = '500px';
container.style.flexWrap = 'wrap';
container.style.height = '500px'

for (let i = 0; i < blockSize; i++) {   
    for (let j = 0; j < blockSize; j++) {
        const blocks = document.createElement('div');
        blocks.classList.add('paintSurface');
        //blocks.style.width = `${100/blockSize}%`;
        //blocks.style.height = `${100/blockSize}%`;
        blocks.style.flex = `0 0 ${100/blockSize}%`;
        container.appendChild(blocks);
    }
}