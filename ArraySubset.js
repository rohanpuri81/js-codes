let arr2 =[-5,-4,-3,-2,5,3,4,3,1,-1];

for(let i=0;i<arr2.length;i++){
    for(let j=i;j<arr2.length;j++){
        let arr=[];
        if(i!=j){
            if(arr2[i]+arr2[j]==0){
                arr[0]=arr2[i];
                arr[1]=arr2[j]
                console.log(arr)
            }
        }
    }
}