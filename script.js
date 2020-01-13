// Change this to -3 when you don't need the test animation element
let timeDelay = /*-3*/ 0;

let animationSection = document.querySelector('#animation-section');

for(let i = 1; i <= 100; i++ ) {
    timeDelay += 3;

    let newDiv = document.createElement('div');
    newDiv.innerHTML = 'Happy Birthday<br>Nikku';
    newDiv.classList.add(`animation-element-number-${i}`);
    
    animationSection.appendChild(newDiv);
    
    newDiv.style.animationDelay = `${timeDelay}s`;
    newDiv.style.animationName = `animation-element-keyframe-number-${i}`;
    
    /*console.log(timeDelay);
    console.log(i);*/
}