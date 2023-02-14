document.getElementById('btn-kitkat').addEventListener('click' , function(){
    const kitkatQuantity = getQuantity('kitkat-field') ;
    if(isNaN(kitkatQuantity) || kitkatQuantity <=0){
        return alert('Please provide a number')
    }
    const kitkatCost = kitkatQuantity * 200;
    setPrice('total-chocolate-price',kitkatCost);
    total();
})

document.getElementById('btn-rose').addEventListener('click' , function(){
    const roseQuantity = getQuantity('rose-field');
    if(isNaN(roseQuantity) || roseQuantity <=0){
        return alert('Please provide a number')
    }
    const roseCost = roseQuantity * 100 ;
    setPrice('total-rose-price',roseCost);
    total()
})

document.getElementById('btn-diary').addEventListener('click' , function(){
    const diaryQuantity = getQuantity('diary-field');
    if(isNaN(diaryQuantity) || diaryQuantity <=0){
        return alert('Please provide a number')
    }
    const diaryCost = diaryQuantity * 100 ;
    setPrice('total-diary-price',diaryCost);
    total()
})

document.getElementById('btn-discount').addEventListener('click', function(){
    const copon = getQuantity('copon-field');
    
    if(copon !== 101){
        return alert('Please Provide the valid Promo code');
    }
    const beforeTotal = getInnerText('total-price');
    const afterDiscountTotal = beforeTotal - (beforeTotal * .10);
    setPrice('after-discount-total-price',afterDiscountTotal);
})

function setPrice(id, value){
    document.getElementById(id).innerText = value ;
}

function getQuantity(id){
   const needQuantity =document.getElementById(id).value;
   return parseInt(needQuantity);
}
function getInnerText(id){
    const innerText = document.getElementById(id).innerText;
    return parseInt(innerText);
}

function total(){
   const totalValue = getInnerText('total-chocolate-price') + getInnerText('total-rose-price') + getInnerText('total-diary-price');
   setPrice('total-price',totalValue);
   
}