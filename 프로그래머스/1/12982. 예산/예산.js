function solution(d, budget) {
    const sum=d.reduce((acc,curr)=>acc+curr,0);
    if(sum <=budget) return d.length;
    
    let count=budget;
    d.sort((a,b)=>a-b);
    for(let i=0; i<d.length; i++){
        count-=d[i];
        if(count<0) return i
    }
    
}
