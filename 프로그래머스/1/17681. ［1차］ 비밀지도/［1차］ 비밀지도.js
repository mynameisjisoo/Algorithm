function solution(n, arr1, arr2) {
    
    const decimalToBinary =(array)=> array.map(num=> {
        const binaryArr =[];
        let decimal =num;
        for(let i=n; i>0; i--) {
             const pow = Math.pow(2,i-1);
             if(pow > decimal) {
                binaryArr.push(0);
             }
             if(pow === decimal){
                decimal-=pow;
                 binaryArr.push(1);
             }
             if(pow < decimal) {
                decimal-=pow;
                 binaryArr.push(1);
             }
            }
        return binaryArr
    })
    
    const answer= decimalToBinary(arr1).map((arr,i)=>{
        return arr.map((el, j)=> el===1 || decimalToBinary(arr2)[i][j]===1 ? "#" : " ").join("")
    })
    return answer

}