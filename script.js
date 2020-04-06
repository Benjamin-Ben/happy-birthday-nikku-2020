document.querySelector('body').addEventListener('keyup', function (e) {
    if (e.keyCode == 77) {
        if (document.querySelector('#colors-menu-box').style.display != 'block') {
            document.querySelector('#colors-menu-box').style.display = 'block';
        } else {
            document.querySelector('#colors-menu-box').style.display = 'none';
        };
    }

    if (e.keyCode == 27) {
        document.querySelector('#colors-menu-box').style.display = 'none';
    }
});

const allShapes = document.querySelectorAll('.shapes_animation_section > div');



// Light Pink
document.querySelector('.light_pink').addEventListener('click', function (e) {
    document.querySelector('#colors-menu-box').style.display = 'none';

    document.querySelector('body').style.backgroundColor = '#ffb6c1';

    for (let i = 0; i < allShapes.length; i++) {
        allShapes[i].style.backgroundColor = '#e75480';
    }
    
});


// Mint Green
document.querySelector('.mint_green').addEventListener('click', function (e) {
    document.querySelector('#colors-menu-box').style.display = 'none';

    document.querySelector('body').style.backgroundColor = '#98ff98';

    for (let i = 0; i < allShapes.length; i++) {
        allShapes[i].style.backgroundColor = 'green';
    }
    
});

// Light Blue
document.querySelector('.light_blue').addEventListener('click', function (e) {
    document.querySelector('#colors-menu-box').style.display = 'none';

    document.querySelector('body').style.backgroundColor = '#add8e6';

    for (let i = 0; i < allShapes.length; i++) {
        allShapes[i].style.backgroundColor = '#00008b';
    }
    
});

// Black & White
document.querySelector('.black_and_white').addEventListener('click', function (e) {
    document.querySelector('#colors-menu-box').style.display = 'none';

    document.querySelector('body').style.backgroundColor = '#000000';

    for (let i = 0; i < allShapes.length; i++) {
        allShapes[i].style.backgroundColor = '#ffffff';
    }
    
});

// Red
document.querySelector('.red').addEventListener('click', function (e) {
    document.querySelector('#colors-menu-box').style.display = 'none';

    document.querySelector('body').style.backgroundColor = 'red';

    for (let i = 0; i < allShapes.length; i++) {
        allShapes[i].style.backgroundColor = '#8b0000';
    }
    
});

// Blue
document.querySelector('.blue').addEventListener('click', function (e) {
    document.querySelector('#colors-menu-box').style.display = 'none';

    document.querySelector('body').style.backgroundColor = 'blue';

    for (let i = 0; i < allShapes.length; i++) {
        allShapes[i].style.backgroundColor = '#00008b';
    }
    
});

// Yellow
document.querySelector('.yellow').addEventListener('click', function (e) {
    document.querySelector('#colors-menu-box').style.display = 'none';

    document.querySelector('body').style.backgroundColor = 'yellow';

    for (let i = 0; i < allShapes.length; i++) {
        allShapes[i].style.backgroundColor = '#DAA520';
    }
    
});

// Orange
document.querySelector('.orange').addEventListener('click', function (e) {
    document.querySelector('#colors-menu-box').style.display = 'none';

    document.querySelector('body').style.backgroundColor = 'orange';

    for (let i = 0; i < allShapes.length; i++) {
        allShapes[i].style.backgroundColor = '#cd7000';
    }
    
});

// Purple
document.querySelector('.purple').addEventListener('click', function (e) {
    document.querySelector('#colors-menu-box').style.display = 'none';

    document.querySelector('body').style.backgroundColor = 'purple';

    for (let i = 0; i < allShapes.length; i++) {
        allShapes[i].style.backgroundColor = '#32174d';
    }
    
});

// Green
document.querySelector('.green').addEventListener('click', function (e) {
    document.querySelector('#colors-menu-box').style.display = 'none';

    document.querySelector('body').style.backgroundColor = 'green';

    for (let i = 0; i < allShapes.length; i++) {
        allShapes[i].style.backgroundColor = '#006400';
    }
    
});

// Brown
document.querySelector('.brown').addEventListener('click', function (e) {
    document.querySelector('#colors-menu-box').style.display = 'none';

    document.querySelector('body').style.backgroundColor = 'brown';

    for (let i = 0; i < allShapes.length; i++) {
        allShapes[i].style.backgroundColor = '#362204';
    }
    
});

// Gray
document.querySelector('.gray').addEventListener('click', function (e) {
    document.querySelector('#colors-menu-box').style.display = 'none';

    document.querySelector('body').style.backgroundColor = 'gray';

    for (let i = 0; i < allShapes.length; i++) {
        allShapes[i].style.backgroundColor = '#555555';
    }
    
});

// RANDOM COLORS
document.querySelector('.random_colors').addEventListener('click', function (e) {
    document.querySelector('#colors-menu-box').style.display = 'none';

    // Generating Random Numbers between 30 and 255 and puts each random number in a const
    const r = Math.round(Math.random() * (255 - 30) + 30);
    const g = Math.round(Math.random() * (255 - 30) + 30);
    const b = Math.round(Math.random() * (255 - 30) + 30);

    document.querySelector('body').style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    for (let i = 0; i < allShapes.length; i++) {
        allShapes[i].style.backgroundColor = `rgb(${r - 25}, ${g - 25}, ${b - 25})`;
    }
    
});