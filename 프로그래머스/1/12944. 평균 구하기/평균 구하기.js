function solution(arr) {
const sum = arr.reduce((arr, curr)=> arr + curr);
    return sum / arr.length
}