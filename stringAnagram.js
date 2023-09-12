function anagram(s1,s2){
    let str1= s1.toLowerCase();
    let str2= s2.toLowerCase();

    if(str1.length!==str2.length){
        return false;
    }

    let occ={};

    for(let i of str1){
        occ[i]=occ[i]?occ[i]+1:1;
    }
    for(let i of str2){
        if(!occ[i]){
            return false;
        }
        occ[i]--;
    }
    return true;
}


console.log(anagram('sky','ksy'));
console.log(anagram('skyy','ksy'));
console.log(anagram('sky','sy'));
console.log(anagram('sk','kksy'));