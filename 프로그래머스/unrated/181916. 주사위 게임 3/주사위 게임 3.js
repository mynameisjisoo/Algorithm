function solution(a, b, c, d) {
    const numArr = [a,b,c,d]
    const numSet = new Set(numArr)

    if(numSet.size===1) return 1111*a;
    if(numSet.size===2) {
        const duplicatedNum = numArr.filter(num=>numArr.indexOf(num)!==numArr.lastIndexOf(num))   
        // 세개가 같고 하나만 다른 경우
        if(duplicatedNum.length===3) {
            const p = duplicatedNum[0];
            const [q] = [...numSet].filter(el=>el!==p)
            return Math.pow(10*p+q,2)
        }else {
        // 두개씩 같은 경우
            const [p,q] = [...numSet];
            return (p+q)*Math.abs(p-q)
        }
    }
    if(numSet.size===3){
        const [q,r]=numArr.filter(num=>numArr.indexOf(num)===numArr.lastIndexOf(num));
        return q*r
    }
    if(numSet.size===4) return Math.min(...numArr);
}
