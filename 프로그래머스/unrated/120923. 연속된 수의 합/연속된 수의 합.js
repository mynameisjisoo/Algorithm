function solution(num, total) {
    for(let i=0; i<num; i++){
        total-=i
    }
    const a =total/num;
    const answer = new Array(num).fill().map((_,i)=>a+i);
    return answer;
}
    