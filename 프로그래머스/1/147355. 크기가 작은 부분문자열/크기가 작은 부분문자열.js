function solution(t, p) {
    let count=0;
    
    for(let i=0; i+p.length<=t.length; i++) {
        const num = Number(t.slice(i,i+p.length));
        if(num<=p) count++
    }
    return count
}