let timeDelay = -3;

let animationSection = document.querySelector('#animation-section');

for(let i = 1; i <= 100; i++ ) {
    timeDelay += 3;

    

    let newDiv = document.createElement('div');
    newDiv.innerHTML = 'Happy Birthday<br>Nikku';
    newDiv.classList.add(`animation-element-number-${i}`);
    
    animationSection.appendChild(newDiv);
    
    newDiv.style.animationDelay = `${timeDelay}s`;
    
    /*console.log(timeDelay);
    console.log(i);*/
}