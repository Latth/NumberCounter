var btnDecrease = document.getElementById('decrease');
var btnReset = document.getElementById('reset');
var btnIncrease = document.getElementById('increase');
var numbr = document.getElementById('number')
var numberIndex = 0

btnIncrease.addEventListener('click', function() {
    numberIndex++;
    numbr.innerHTML = numberIndex
    numbr.style.color = "black"
})

btnDecrease.addEventListener('click', function() {
    if(numbr.innerHTML == 0){
        numberIndex = 0
        numbr.innerHTML = 0
        numbr.style.color = "red"
    }else{
        numberIndex--
        numbr.innerHTML = numberIndex
        
    }

})

btnReset.addEventListener('click', function() {
    numberIndex = 0;
    numbr.innerHTML = numberIndex
    numbr.style.color = "black"
})

