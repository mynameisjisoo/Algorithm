function solution(arr1, arr2) {
    const answer = arr1.map((el, idx1)=> el.map((innerEl, idx2)=> innerEl+arr2[idx1][idx2]))
    return answer
}