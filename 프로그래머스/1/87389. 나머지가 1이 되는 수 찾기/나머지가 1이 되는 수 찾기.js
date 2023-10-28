function solution(n) {
    let x = 1;
    let isContinue = true;
    while(isContinue) {
        n%x===1 ? isContinue = false : x+=1;
    }
    return x
}