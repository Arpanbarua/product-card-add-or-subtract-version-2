let result = document.querySelector('.txtbox');
let incrementBtn = document.querySelector('.inc');
let decrementBtn = document.querySelector('.dec');
let bill = document.querySelector('.bill .main');
let bkash = document.querySelector('#bkash');
let nagad = document.querySelector('#nagad');
// let tagprice = document.querySelector('.tagprice');
// let quantity = document.querySelector('.quantity');
// let total = document.querySelector('.total');
// let twd = document.querySelector('.twd');




let price = 684;

function updateBill()
{
    let num = Number(result.value);
     if(bkash.checked)
        {
            let p = price*num*0.98;
            p = p.toFixed(2);
            bill.innerHTML = `Price is ${price} tk<br> quantity: ${num}<br> total: ${price*num} tk<br> You have to pay: ${p} tk (with discount)`;
        //    tagprice.textContent = `${price}`;
        //    quantity.textContent = `${num}`;
        //     total.textContent = `${price*num}`;
        //     twd.textContent  =`${p}`;
        }
        else if(nagad.checked)
        {
            let p = price*num*0.985;
            p = p.toFixed(2);
            bill.innerHTML = `Price is ${price} tk<br> quantity: ${num}<br>total: ${price*num} tk<br> You have to pay: ${p} tk (with discount)`;
            // tagprice.textContent = `${price}`;
            // quantity.textContent = `${num}`;
            // total.textContent = `${price*num}`;
            // twd.textContent  =`${p}`;
        }
        else 
        {
            
            bill.innerHTML = `Price is ${price} tk<br>  quantity: ${num}<br>total: ${price*num} tk<br> You have to pay: ${price} tk`;
            // tagprice.textContent = `${price}`;
            // quantity.textContent = `${num}`;
            // total.textContent = `${price*num}`;
            // twd.textContent  =`${price}`;
        }
}

bkash.addEventListener('change', updateBill);
nagad.addEventListener('change', updateBill);

updateBill();
// bill.textContent = `You have to pay: ${price} tk`;



incrementBtn.addEventListener('click', function()
{
    let num = Number(result.value);

    if(num + 1 < 16)
    {
        num++;
        result.value = num;
        decrementBtn.style.cursor = `pointer`;
        // bill.textContent = `You have to pay: ${price*num} tk`;
        
        
        if(bkash.checked)
        {
            let p = price*num*0.98;
            p = p.toFixed(2);
            bill.innerHTML = `Price is ${price} tk<br>  quantity: ${num} <br> total: ${price*num} tk <br>  You have to pay: ${p} tk (with discount)`;
        //     tagprice.textContent = `${price}`;
        //    quantity.textContent = `${num}`;
        //     total.textContent = `${price*num}`;
        //     twd.textContent  =`${p}`;
        }
        else if(nagad.checked)
        {
            let p = price*num*0.985;
            p = p.toFixed(2);
            bill.innerHTML = `Price is ${price} tk<br> quantity: ${num}<br> total: ${price*num} tk<br> You have to pay: ${p} tk (with discount)`;
            // tagprice.textContent = `${price}`;
            // quantity.textContent = `${num}`;
            // total.textContent = `${price*num}`;
            // twd.textContent  =`${p}`;
            
        }
        else 
        {
            
            bill.innerHTML = `Price is ${price} tk<br> quantity: ${num}<br> total: ${price*num} tk<br> You have to pay: ${price*num} tk`;
            // tagprice.textContent = `${price}`;
            // quantity.textContent = `${num}`;
            // total.textContent = `${price*num}`;
            // twd.textContent  =`${price*num}`;
        }
        
    }
    else 
    {
        incrementBtn.style.cursor = `not-allowed`;
    }
});


decrementBtn.addEventListener('click', function()
{
    let num = Number(result.value);
    if(num  > 1)
    {
        num--;
        result.value = num;
        incrementBtn.style.cursor = 'pointer';
        // bill.textContent = `You have to pay: ${price*num} tk`;
        if(bkash.checked)
        {
            let p = price*num*0.98;
            p = p.toFixed(2);
            bill.innerHTML = `Price is ${price} tk<br> quantity: ${num}<br> total: ${price*num} tk<br> You have to pay: ${p} tk (with discount)`;
            // tagprice.textContent = `${price}`;
            // quantity.textContent = `${num}`;
            // total.textContent = `${price*num}`;
            // twd.textContent  =`${p}`;
       
        }
        else if(nagad.checked)
        {
            let p = price*num*0.985;
            p = p.toFixed(2);
            bill.innerHTML = `Price is ${price} tk<br> quantity: ${num}<br> total: ${price*num} tk<br> You have to pay: ${p} tk (with discount)`;
        //      tagprice.textContent = `${price}`;
        //    quantity.textContent = `${num}`;
        //     total.textContent = `${price*num}`;
        //     twd.textContent  =`${p}`;
       
        }
        else 
        {
            bill.innerHTML = `Price is ${price} tk<br> quantity: ${num}<br> total: ${price*num} tk<br> You have to pay: ${price*num} tk`;
        //     tagprice.textContent = `${price}`;
        //    quantity.textContent = `${num}`;
        //     total.textContent = `${price*num}`;
        //     twd.textContent  =`${price*num}`;
        }
    }
    else 
    {
        decrementBtn.style.cursor = `not-allowed`;
    }
});