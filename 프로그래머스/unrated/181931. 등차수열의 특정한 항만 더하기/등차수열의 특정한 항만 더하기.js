function solution(a, d, included) {
const array =included.map((el,idx)=> el? a+(d*idx) : 0);
    const sum = array.reduce((acc, curr)=> acc+ curr, 0)
    return sum
}