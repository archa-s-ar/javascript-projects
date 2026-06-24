
const subscribe= document.getElementById(`subscribe`);
const visaBtn= document.getElementById(`visaBtn`);
const masterCard=document.getElementById(`masterCard`);
const paypal= document.getElementById(`paypal`);
const submit=document.getElementById(`submit`);
const subscribe_info= document.getElementById(`subscribe_info`);
const payment_info=document.getElementById('payment_info');

submit.onclick=function(){
    if (subscribe.checked){
        subscribe_info.textContent=`You are subscribed`;
    }
    else{
        subscribe_info.textContent=`You are not subscribed`;
    }
    if (visaBtn.checked){
        payment_info.textContent=`You are using Visa Card`;
    }
    else if (masterCard.checked){
        payment_info.textContent=`You are using Master Card`;
    }
    else if (paypal.checked){
        payment_info.textContent=`You are using PayPal`;
    }
    else{
        payment_info.textContent=`You must choose a payment method`;
    }
}