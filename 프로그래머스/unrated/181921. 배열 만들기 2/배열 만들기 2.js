function solution(l, r) {
    const answer = [];
    const isZeroFive = (num) => {
        const regex = /^[05]+$/;
        return regex.test(num.toString())
    }
    
    for(let i=l; i<=r; i++){
        if(isZeroFive(i)) answer.push(i);
    }
    return answer.length? answer: [-1]
}