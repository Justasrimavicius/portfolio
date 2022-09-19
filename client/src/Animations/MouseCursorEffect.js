

function MouseCursorEffect(){

/*VARIABLES*/

let canvas = document.querySelector('#myCanvas');
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;
var ctx = canvas.getContext('2d');



/*Modify options here*/

//possible characters that will appear
var characterList = ['<html>', '<br>', '3rem', '<div>', 'display:flex', 'app.use()', 'return;', '<h1></h1>', '.css', 'useEffect()', '.env', '.gitignore', '.jsx', 'window', 'let', 'var', 'fetch()', '.then()', 'npm start', 'VSCode', 'npm test'];

//stocks possible character attributes
var layers = {
    n: 5, //number of layers
    letters: [20, 16, 14, 12, 10], //letters per layer (starting from the deepest layer)
    coef: [0.1, 0.2, 0.3, 0.4, 1], //how much the letters move from the mouse (starting from the deepest layer)
    size: [16, 22, 36, 40, 46],
    color: ['rgb(33, 41, 43)', 'rgb(62, 74, 77)', 'rgb(68, 92, 98)', 'rgb(110, 110, 92)', 'rgba(162, 123, 92,0.5)'], //color of the letters (starting from the deepest layer)
    font: 'Courier' //font family (of every layer)
};

/*End of options*/



var characters = [];
var mouseX = document.body.clientWidth/2;
var mouseY = document.body.clientHeight/2;

var rnd = {
    btwn: function(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    },
    choose: function(list) {
        return list[rnd.btwn(0, list.length)];
    }
};



/*LETTER DRAWING*/

function drawLetter(char) {
    ctx.font = char.size + 'px ' + char.font;
    ctx.fillStyle = char.color;
    
    var x = char.posX + (mouseX-canvas.width/2)*char.coef;
    var y = char.posY + (mouseY-canvas.height/2)*char.coef;

    ctx.fillText(char.char, x, y);
}



/*ANIMATION*/

document.onmousemove = function(ev) {
    mouseX = ev.pageX - canvas.offsetLeft;
    mouseY = ev.pageY - canvas.offsetTop;

    if (window.requestAnimationFrame) {
        requestAnimationFrame(update);
    } else {
        update();
    }
};

function update() {
    clear();
    render();
}

function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function render() {
    for (var i = 0; i < characters.length; i++) {
        drawLetter(characters[i]);
    }
}



/*INITIALIZE*/

function createLetters() {
    for (var i = 0; i < layers.n; i++) {
        for (var j = 0; j < layers.letters[i]; j++) {

            var character = rnd.choose(characterList);
            var x = rnd.btwn(0, canvas.width);
            var y = rnd.btwn(0, canvas.height);

            characters.push({
                char: character,
                font: layers.font,
                size: layers.size[i],
                color: layers.color[i],
                layer: i,
                coef: layers.coef[i],
                posX: x,
                posY: y
            });

        }
    }
}

createLetters();
update();

// document.getElementById('close').onclick = function() {
//     this.parentElement.style.visibility = 'hidden';
//     this.parentElement.style.opacity = '0';
// }

}

export default MouseCursorEffect;