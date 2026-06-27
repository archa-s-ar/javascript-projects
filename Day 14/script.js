
const pass=document.getElementById('pass');


//function to generate password
function generatePass(length,includeLowercase,includeUpperCase,includeNumbers,includeSymbols){

    const lowercaseChars='abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const Numbers='1234567890';
    const symbols='@#$%^&*_-<>./?!~';

    let allowedChars='';
    let password='';

    allowedChars += includeLowercase ? lowercaseChars:""; //if there is lowercase charas, then concatenate it into allowedChars
    allowedChars += includeUpperCase ? uppercaseChars:"";
    allowedChars += includeNumbers ? Numbers : "";
    allowedChars += includeSymbols ? symbols : "";

    if (length<=0){ //if password length=0
        return `Password length must be atleast 1`;
    }
    if (allowedChars.length===0){ //if includeLowercase.upper and all false
        return `Atleast 1 set of character needs to be selected`;
    }
    for (let i=0; i<length; i++){ //execute 12 times
        const randomIndex=Math.floor(Math.random()*allowedChars.length); // a random index [Math.floor(Math.random()*26)=>0-25]
        password += allowedChars[randomIndex]
    }

    return password;
}


/* const passwordLength=12; // length of password
const includeLowercase=true; //do we want lowercase?
const includeUpperCase=true; //do we want uppercase
const includeNumbers=true; //do we want numbers
const includeSymbols=true; //do we want symbols */


// calling function
function displaypass(){

    const passwordLength=document.getElementById('length').value; // length of password
const includeLowercase=document.getElementById('lowercase').checked; //do we want lowercase?
const includeUpperCase=document.getElementById('uppercase').checked; //do we want uppercase
const includeNumbers=document.getElementById('number').checked; //do we want numbers
const includeSymbols=document.getElementById('symbol').checked; //do we want symbols

const password = generatePass(passwordLength,
                                includeLowercase,
                                includeUpperCase,
                                includeNumbers,
                                includeSymbols);


console.log(`Generated Password: ${password}`);
pass.textContent=`${password}`;
}