const my_age=document.getElementById('my_age');
const enter=document.getElementById('enter');
const info=document.getElementById('info')
let age;

enter.onclick =function(){

age=my_age.value;
 age=Number(age);


    if (age>=100){
        info.textContent='You are too old to be here!';
    }
    else if(age==0){
       info.textContent= `You can't enter. You were just born!`;
    }
    else if (age>=18){
        info.textContent='You are old enough to be here!';
    }
    else if (age<0){
        info.textContent='Try again later.. you are yet to be born!';
    }
    else{
        info.textContent='You must be 18+ to enter this site';
    }
}