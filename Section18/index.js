let a = document.querySelectorAll('.drum');
let instruments = ['crash', 'kick', 'snare', 'tom-1', 'tom-2', 'tom-3', 'tom-4'];
let buttons = ['w', 'a', 's', 'd', 'j', 'k', 'l'];
let soundFiles = [];

let counter = 0;

for (let item of a) {
    let current_ins = instruments[counter];
    let audio_file = './sounds/' + current_ins + '.mp3';
    let img_file = "background-image: url('./images/" + current_ins + ".png')";

    // adding img to each button
    item.setAttribute('style', img_file);

    let audio = new Audio(audio_file);

    soundFiles.push(audio)
    
    item.addEventListener('click', function() {
        audio.play();
        item.classList.add('pressed');
        setTimeout(function() {item.classList.remove('pressed');}, audio.duration);
    });

    counter += 1; 
}

// adding listeners to keypresses
document.addEventListener('keydown', function(event) {
    let n = buttons.length;
    for(var i = 0; i < n; i++){
        if(event.key == buttons[i]){
            soundFiles[i].play();
            a[i].classList.add('pressed');
            setTimeout(function() {a[i].classList.remove('pressed');}, soundFiles[i].duration);
        }
    }
});
