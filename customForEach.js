function setUserName(un){
    this.username = un;
    console.log("called");
}

function createUser(uName,email,password){
    setUserName.call(this,uName);

    this.email=email;
    this.password=password;
}

const chai=new createUser("chai","abc@bbc.com","123");
console.log(chai);