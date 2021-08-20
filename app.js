
function updateButton(product, price, isIncresing){
    const productInput = document.getElementById(product + '-number');
    let productValue = productInput.value;
    const updateValue = parseInt(productValue) 
    if(isIncresing){
        productValue = updateValue +1;
    }
    else if(productValue > 0){
        productValue = updateValue - 1;
    }
    productInput.value = productValue;
    const caseTotal = document.getElementById(product + '-total')
    caseTotal.innerText = productValue * price;

    calculateTotal();
}
function getInputValue(product){
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal(){
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;

    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}

//CASE BUTTONS
document.getElementById('case-plus').addEventListener('click', function(){
    updateButton('case', 59, true);
})
document.getElementById('case-minus').addEventListener('click', function(){
    updateButton('case',59, false);
})

//PHONE BUTTONS
document.getElementById('phone-plus').addEventListener('click', function(){
    updateButton('phone',1219, true);
})
document.getElementById('phone-minus').addEventListener('click', function(){
    updateButton('phone',1219, false);
})