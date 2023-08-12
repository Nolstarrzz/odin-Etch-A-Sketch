const container = document.querySelector('#container');


container.style.display = 'flex';
container.style.width = '500px';
container.style.flexWrap = 'wrap';
container.style.height = '500px'

/*container.style.width = (blockSize * blockSize) + 'px';
container.style.display = 'grid';
container.style.gridTemplateColumns = 'repeat(' + blockSize + ', ' + blockSize + 'px)';
container.style.gridTemplateRows = 'repeat(' + blockSize + ', ' + blockSize + 'px)';*/


function makeBlocks(number)
{    
    for (let i = 0; i < number; i++) {   
        for (let j = 0; j < number; j++) {
            const blocks = document.createElement('div');
            blocks.classList.add('paintSurface');
            blocks.style.flex = `0 0 ${100/number}%`;
            container.appendChild(blocks);
        }
    }
}

makeBlocks(16)