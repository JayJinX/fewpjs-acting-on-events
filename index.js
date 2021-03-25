// Your code here
let dodger = document.getElementById('dodger');
function moveDodgerLeft(){
    let leftN = dodger.style.left.replace('px', '');
    let leftInteger = parseInt(leftN, 10);
    dodger.style.left = `${leftInteger-1}px`;
}

function moveDodgerRight(){
    let leftN = dodger.style.left.replace('px', '');
    let leftInteger = parseInt(leftN, 10);
    dodger.style.left = `${leftInteger+1}px`;
}