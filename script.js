document.querySelector('body').addEventListener('keyup', function (e) {
    if (e.keyCode == 77) {
        if (document.querySelector('#colors-menu-box').style.display != 'block') {
            document.querySelector('#colors-menu-box').style.display = 'block';
        } else {
            document.querySelector('#colors-menu-box').style.display = 'none';
        };
    }
});