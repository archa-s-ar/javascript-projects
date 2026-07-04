let timeoutId;

function startTimer(){
    timeoutId=setTimeout(()=>window.alert("Yup 8s have passed"),8000);
    console.log("Done")
}
function stopTimer(){
    clearTimeout(timeoutId);
    console.log("Timer Stopped")
}