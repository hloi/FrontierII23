var cube = document.getElementById('cube');
var cloneCube = cube.cloneNode(true);
document.body.appendChild(cloneCube);
var min = 1;
var max = 24;

cube.onclick = function() {
    var xRand = getRandom(max, min);
    var yRand = getRandom(max, min);

    cube.style.transform = 'rotateX('+xRand+'deg) rotateY('+yRand+'deg)';
    xRand = getRandom(max, min);
    yRand = getRandom(max, min);
    cloneCube.style.transform = 'rotateX('+xRand+'deg) rotateY('+yRand+'deg)';
    //cube.style.transform = `rotateX(${xRand}deg) rotateY(${yRand}deg)`;
    // NOTE: Use the ` symbol (found above TAB)
    
    console.log(getResult(xRand, yRand));
}

function getRandom(max, min) {
    return (Math.floor(Math.random()*(max-min)) + min)*90;
}

function mod(n, m) {
    return ((n % m) + m) % m;
}

function getResult(rotX, rotY) {
    let countX = mod(rotX/90, 4);
    if (countX === 1) {
        return 6;
    }
    if (countX === 3)
    {
        return 5;
    }
    let countY = mod(rotY / 90 + countX, 4);
    return [1,4,2,3][countY];

}
