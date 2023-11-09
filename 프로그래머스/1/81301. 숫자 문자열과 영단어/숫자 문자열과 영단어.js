function solution(s) {
    const words =["zero","one","two","three","four","five","six","seven","eight","nine"];
    const arr =words.map((word, i) => s=s.replace(new RegExp(word,"g"),i))
    return +s
}