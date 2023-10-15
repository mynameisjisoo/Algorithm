function solution(n) {
    return [...n.toString()].reduce((arr, curr)=> Number(arr)+Number(curr),0)
}