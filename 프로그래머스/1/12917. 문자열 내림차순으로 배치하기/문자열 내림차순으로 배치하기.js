function solution(s) {
    const sort = [...s].sort((a,b)=> {
        if(a>b) return -1
        if(a<b) return 1
        if(a=b) return 0
    });
    return sort.join("")

}