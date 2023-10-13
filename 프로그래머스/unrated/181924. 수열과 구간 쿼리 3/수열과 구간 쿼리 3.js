function solution(arr, queries) {
   queries.forEach((query)=> {
       const i = query[0]; const j =query[1];
       const temp = arr[i];
       arr[i]= arr[j];
       arr[j]= temp;
   })
    return arr;
}