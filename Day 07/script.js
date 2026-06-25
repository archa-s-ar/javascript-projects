const roll=document.getElementById('roll');
const dice_1=document.getElementById('dice_1');
const dice_2=document.getElementById('dice_2');
const dice_3=document.getElementById('dice_3');
const min=1;
const max=6;

let random_1;
let random_2;
let random_3;

roll.onclick=function(){
    random_1= Math.floor(Math.random()*(max-min))+min;
    document.getElementById('dice_1').textContent=random_1
    random_2= Math.floor(Math.random()*(max-min))+min;
    document.getElementById('dice_2').textContent=random_2
    random_3= Math.floor(Math.random()*(max-min))+min;
    document.getElementById('dice_3').textContent=random_3
}