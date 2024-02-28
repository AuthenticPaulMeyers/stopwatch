// variables
let counterMinutesEl = document.querySelector('.counter-minutes');
let counterSecondsEl = document.querySelector('.counter-seconds');
let startButton = document.querySelector('.start-button');
let resetButton = document.querySelector('.reset-button');
let progressBar = document.querySelector('.progress');

let countSecs = 0;
let countMins = 0;
let intervalId;
let isPlaying = false;


// Start stopwatch
startButton.addEventListener('click', () => {

    if(!isPlaying){

        intervalId = setInterval(function(){

            setWatch(); // call timer function

            updateHTML();

        }, 1000);

        startButton.innerHTML = 'Pause';

        isPlaying = true;

    } else {

        clearInterval(intervalId);
        isPlaying = false;
        startButton.innerHTML = 'Play';
    }

});

// Reset Stop watch
resetButton.addEventListener('click', () => {
    countMins = 0;
    countSecs = 0;
    clearInterval(intervalId);
    isPlaying = false;

    updateHTML();

    startButton.innerHTML = 'Start';
    countMins = addZero(countMins);	
    counterMinutesEl.innerHTML	=  countMins;
    progressBar.style.width = 0;

});

// A function to add zero when minutes and seconds are less than zero
function addZero(zero){
    if(zero < 10){
        zero = '0' + zero;
    }

    return zero;
}

// Configure stop watch
function setWatch(){
    if(countSecs < 60){

        countSecs ++;
        progressBar.style.width = `${(countSecs / 60) * 100}%`;

    }else if(countSecs === 60) {

        countSecs = 0;
        progressBar.style.width = 0;
        countSecs ++;
        countMins ++;

        countMins = addZero(countMins);	
        counterMinutesEl.innerHTML	=  countMins;
    }
}

// Update HTML
function updateHTML(){
    // Add string zero in front
    countSecs = addZero(countSecs);	

      // add to html
    counterSecondsEl.innerHTML	=  countSecs;  
}
