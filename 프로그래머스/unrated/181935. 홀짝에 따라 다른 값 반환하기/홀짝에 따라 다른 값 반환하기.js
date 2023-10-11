function solution(n) {
    const numArr = Array(n).fill().map((_,index)=>(index+1));
 if(n%2) {
     const filteredArr = numArr.filter((num) => num%2);
     return filteredArr.reduce((acc, cur)=> acc+cur, 0);
 } else {
     const filteredArr = numArr.filter((num) => !(num%2));
     return filteredArr.reduce((acc, cur)=> acc + Math.pow(cur,2), 0)
 }
}
