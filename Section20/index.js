let level = 1;
let playing = false;

let nButtons = 4;
let colors = ['green', 'red', 'yellow', 'blue'];
let serial = [0, 1, 2, 3];
let audioFiles = [];
let errorAudio = new Audio('./sounds/wrong.mp3');
let sequence = [];
let playerSequence = [];

buttons = $('.btn');

$(document).on('keydown', function (event){
    if(!playing){
        $('h1').text("Level " + level);
        setTimeout(prompt, 300);
        playing = true;
    }
})


let counter = 0;
let currentSeq = 0;

function gameOver(){
    errorAudio.play();
    $('body').addClass('game-over');
    $('h1').text("Game Over, Press Any Key to Restart!");
    level = 1;
    currentSeq = 0;
    sequence = [];
    playerSequence = [];
    playing = false;
    setTimeout(function() {$('body').removeClass('game-over');}, 300);
}

function checkSeq(){
    if(sequence[currentSeq] === playerSequence[currentSeq]){
        currentSeq += 1;
        if(currentSeq == level){
            playerSequence = [];
            currentSeq = 0;
            level += 1;
            $('h1').text("Level " + level);
            setTimeout(prompt, 1000);
        }
    }else{
        gameOver();
    }
}

for(let item of buttons){
    let fileName = './sounds/' + colors[counter] + '.mp3';
    let audio = new Audio(fileName);
    audioFiles.push(audio);
    let currColorNumber = counter;
    let currColorClass = '.' + colors[counter];
    item.addEventListener('click', function(){
        audio.play();
        $(currColorClass).animate({opacity: 0.5}, 100).animate({opacity: 1}, 100);

        if(playing === false){
            gameOver();
        }

        playerSequence.push(currColorNumber);

        checkSeq();
    });
    counter += 1;
}

function prompt(){
    randButton = Math.floor(Math.random() * 4);
    sequence.push(randButton);
    audioFiles[randButton].play();
    console.log(buttons[randButton]);
    $('.' + colors[randButton]).animate({opacity: 0.5}, 100).animate({opacity: 1}, 100);
}