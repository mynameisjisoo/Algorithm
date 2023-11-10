function solution(n, arr1, arr2) {
    return arr1.map((el,i)=> (el|arr2[i]).toString(2).padStart(n,"0")).map(el=>el.replace(/1/g,"#").replace(/0/g," "))

}