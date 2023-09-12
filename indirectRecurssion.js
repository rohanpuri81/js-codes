let money = 100;
let totalApple =0;

function buyApple(x){
    console.log(x);
    if(x>0){
        buyMore(x);
    }else{
        console.log("I dont have more money",totalApple)
    }
}

function buyMore(x){
    console.log("buy More",x);
}

buyApple(money);

