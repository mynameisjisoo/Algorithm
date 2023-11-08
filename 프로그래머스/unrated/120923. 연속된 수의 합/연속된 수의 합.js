function solution(num, total) {
    for(let i=0; i<num; i++){
        total-=i
    }
    const a =total/num;
    const answer = new Array(num).fill(a);
    for(let i=0; i<num; i++){
        answer[i]=answer[i]+i
    }
    return answer;
}
    