function solution(s){
    let pCount=0; let yCount=0;
    [...s].forEach((char)=> {
        if(char.toUpperCase()!=="P"&& char.toUpperCase()!=="Y") return true
        if(char.toUpperCase()==="P") pCount++;
        if(char.toUpperCase()==="Y") yCount++;
    });
    return pCount===yCount ? true : false
}