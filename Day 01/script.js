const body = document.getElementsByTagName("body")[0]; 
// getElementsByTagName returns an HTMLCollection (array-like object).
//Even though there is only one <body> element, it is returned as a collection.
// So we use [0] to access the first (and only) body element.
function setColor(name){
    body.style.backgroundColor = name;
}

function randomColor(){
    const red= Math.round(Math.random()*255);
    const green= Math.round(Math.random()*255);
    const blue= Math.round(Math.random()*255);

    const color=`rgb(${red},${green},${blue})`;
    // Creates a CSS color string using template literals.
    // CSS understands colors in the format: rgb(red, green, blue)
    // ${} inserts the JS variable values into the string dynamically.
    // Example result: "rgb(123, 45, 200)"
    body.style.backgroundColor = color;
}