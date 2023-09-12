function Cou(s){
    this.count =s;

    this.incement=function (){
        this.count++;
    }
    this.decrement=function (){
        this.count--;
    }
    this.getCount=function (){
        console.log(this.count);
    }

     
}

let s1 = new Cou(4);
s1.incement();
s1.incement();
s1.incement();
s1.decrement();
s1.getCount();