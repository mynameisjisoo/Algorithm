function solution(arr, queries) {
let answer=[]
let temp=[]
    queries.forEach(([s,e,k])=>{
    for(let i=s; i<=e ; i++) {
        if(arr[i]> k) temp.push(arr[i])
    }
        !temp.length ? answer.push(-1) : answer.push(Math.min(...temp))
        return temp =[]
    })
    return answer;
}
