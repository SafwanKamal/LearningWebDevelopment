// const fs = require('fs');

// fs.readFile('./reloaded.txt', 'utf8', (err, data) => {
//   if (err) throw err;
//   const number = Number(data.trim());
//   alert(number);
// });

// alert(number); 

// function handle_reload(){
//     let dice1 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
//     let dice2 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    
//     let dice1_img = './images/dice' + dice1 + '.png';
//     let dice2_img = './images/dice' + dice2 + '.png';

//     document.querySelector('.img1').setAttribute('src', dice1_img);
//     document.querySelector('.img2').setAttribute('src', dice2_img);

//     if(dice1 > dice2){
//         document.querySelector('h1').innerHTML = '🚩Player 1 Wins!';
//     }else if(dice2 > dice1){
//         document.querySelector('h1').innerHTML = 'Player 2 Wins!🚩';
//     }else{
//         document.querySelector('h1').innerHTML = '🚩Draw!🚩';
//     }

// }


let dice1 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
let dice2 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;

let dice1_img = './images/dice' + dice1 + '.png';
let dice2_img = './images/dice' + dice2 + '.png';

document.querySelector('.img1').setAttribute('src', dice1_img);
document.querySelector('.img2').setAttribute('src', dice2_img);

if(dice1 > dice2){
    document.querySelector('h1').innerHTML = '🚩Player 1 Wins!';
}else if(dice2 > dice1){
    document.querySelector('h1').innerHTML = 'Player 2 Wins!🚩';
}else{
    document.querySelector('h1').innerHTML = '🚩Draw!🚩';
}

// document.addEventListener('DOMContentLoaded', handle_reload);