const container = document.querySelector('#container');
const buttons = document.querySelector('#buttonSide');
let paintType = 'black';
let numBlocks = 16;


container.style.display = 'flex';
container.style.width = '500px';
container.style.flexWrap = 'wrap';
container.style.height = '500px';

function clearContainer() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function makeBlocks(number)
{
    clearContainer()    
    for (let i = 0; i < number; i++) {   
        for (let j = 0; j < number; j++) {
            const blocks = document.createElement('div');
            blocks.classList.add('paintSurface');
            blocks.style.flex = `0 0 ${100/number}%`;
            container.appendChild(blocks);
        }
    }
}

/*function generateRandomColor(){
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
}*/

container.addEventListener('mouseover', (event) => {
    console.log(paintType)
    if (event.target.classList.contains('paintSurface')) {
        if(paintType === 'black')
        {
            event.target.style.backgroundColor = 'black';
        }
        /*else if(paintType === 'blue')
        {
            event.target.style.backgroundColor = 'blue';
        }*/
        else if(paintType === 'white')
        {
            event.target.style.backgroundColor = 'white';
        }
    }
});


buttons.addEventListener('click', (event) => {
    if (event.target.classList.contains('rainbowButton')){
        return paintType;
    }
    else if (event.target.classList.contains('colorButton')){
        paintType = 'black';
        return paintType;
    }
    else if (event.target.classList.contains('eraseButton')){
        paintType = 'white';
        return paintType;
    }
    else if (event.target.classList.contains('blocksButton')){
        numBlocks = 0;
        do {
            numBlocks = parseInt(prompt('How many blocks now? 7-100'));
        } while (isNaN(numBlocks) || numBlocks <= 6 || numBlocks > 100);

        makeBlocks(numBlocks);
    }
    else if (event.target.classList.contains('clearButton')){
        clearContainer();
        makeBlocks(numBlocks);
    }
});

numBlocks = parseInt(prompt('How many blocks now? 7-100'));
makeBlocks(numBlocks);
