function solution(common) {
    const len = common.length;
    if(common[len-1]-common[len-2]===common[1]-common[0]) {
       const d = common[1]-common[0];
        return common[len-1]+d;
    }else {
        const d = common[1]/common[0];
        return common[len-1]*d;
    }
    
}