function solution(numer1, denom1, numer2, denom2) {
    const sum = [numer1*denom2 + numer2*denom1, denom1*denom2];
    let commonMax;

    for(let i=Math.min(...sum); i>0; i--){
        if(Math.max(...sum)%i===0 && Math.min(...sum)%i===0) {
            commonMax=i;
            break;
        }
    }
    return sum.map(el=>el/commonMax)
}
