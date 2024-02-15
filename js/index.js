const cards=document.querySelectorAll('.card');
// console.log(cards);
let titleCount=1;
let totalPrice=0;
for(const card of cards){
    
    // console.log(card);
    card.addEventListener('click',function(){
        // console.log('clicked');
        
        // get the title
        const title=card.querySelector('h3').innerText;
        // console.log(title.innerText);
        const price=parseFloat(card.querySelector('span').innerText.split(' ')[1]);
        // console.log(price);
        const titleContainer=document.getElementById('title-container');
        const p=document.createElement('p');
        p.style.fontSize='20px';
        p.innerText=titleCount +'.' + title;
        titleContainer.appendChild(p);
        titleCount++;

        // calculate price
        totalPrice +=price;
        console.log(totalPrice);

        // get the total price
        const totalPriceSpanId=document.getElementById('totalPrice');
        totalPriceSpanId.innerText=totalPrice.toFixed(2);
    });
}

const btn=document.getElementById('apply-btn');
// console.log(btn);
btn.addEventListener('click',function(){
    // console.log('Clicked');
    const couponElement=document.getElementById('input-field').value;
    const couponCode=couponElement.split(' ').join('').toUpperCase();
    
    // console.log(couponCode);
    if(totalPrice>=200){
        if(couponCode==='SELL200'){
            // get discount
            const discountElement=document.getElementById('discountPrice');
            const discount=totalPrice*0.2;
            discountElement.innerText=discount.toFixed(2);
            // get total Discount Calculation
            const total=document.getElementById('total');
            const totaValue=totalPrice-discount;
            total.innerText=totaValue.toFixed(2);
            // আমাদের calculation হওয়ার পর input field ফাকা করে দিলাম।
            document.getElementById('input-field').value='';
        }
        else{
            alert('invalid coupon');
        }
        
    }
    else{
       alert('Please Purchase upto $200');
    }
});

