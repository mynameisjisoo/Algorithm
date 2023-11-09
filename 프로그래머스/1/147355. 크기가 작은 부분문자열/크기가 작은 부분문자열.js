function solution(t, p) {
    const stringArr =[];
    
    for(let i=0; i+p.length<=t.length; i++) {
        stringArr.push(t.slice(i,i+p.length))
    }
    return stringArr.filter(el=>Number(el)<=p).length;
}