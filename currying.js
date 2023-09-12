function f(a){
    return function (b){
        return function (c){
            return a+b+c;
        };
    };
}

console.log(f(5)(6)(6));



let arr=[7,8];
arr.for