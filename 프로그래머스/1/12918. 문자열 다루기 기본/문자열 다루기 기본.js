function solution(s) {
    if(s.length===4 || s.length===6){
        if(!s.match(/[e]/i) && !isNaN(Number(s))) return true
        
    }
    return false
}