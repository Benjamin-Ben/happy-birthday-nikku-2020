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