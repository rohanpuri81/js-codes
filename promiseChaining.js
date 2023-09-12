const cart=["shoe","dress"];

function validate(arr){
    return true;
}

function creteOrder(arr){
    return new Promise((res,rej)=>{
       if(validate(cart)){
        setTimeout(()=>{
            rej(706677);
        },4000)
       }
    })
}


function proceedToPayment(oid){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(oid+" Payment succesful . . .");
        },3000)
    })
}



creteOrder(cart)
.then((oid)=>{
    console.log(oid)
    return oid
})
.catch((err)=>{
    console.log(err)
})
.then((oid)=>{
    return proceedToPayment(oid);
})
.then((info)=>{
    console.log(info);
})