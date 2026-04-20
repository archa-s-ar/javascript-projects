const input=document.getElementById("input");
// Gets the input element from the HTML using its ID "input" and stores it in the variable 'input' for later use.

function reverseString(str){
    return str.split("").reverse().join("");
    // str.split("") converts the string into an array of characters. If " ", it would split by words instead.
    // .reverse() reverses the order of the elements in the array.
    // .join("") concatenates the array back into a string without any separator.
}
function check(){
    const value= input.value.toLowerCase();
    // Gets the current text from the input field.
    const reverse= reverseString(value);
    // Calls the reverseString function to get the reversed version of the input text.
    if (value === reverse)
    {
        alert("P A L I N D R O M E");
    } else{
        alert("Try another:(");
    }
    input.value="";
    // Clears the input box after checking.
}