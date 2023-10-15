function solution(n) {
    const answer = [n];
    while(answer.at(-1)!==1){     
        const lastNum = answer.at(-1)
        lastNum%2===0 ? answer.push(lastNum/2) : answer.push(3*lastNum+1);
    }
    return answer;
}
