class User{
    constructor(email,password){
        this.email=email;
        this.password=password;
    }

    get password(){
        return this._password.toUpperCase();
    }

    set password(value){
        this._password=value.toUpperCase();
    }
}


let rohan = new User("rana","hds");
console.log(rohan.password);
console.log(rohan.password("jkl"))
console.log(rohan.password);