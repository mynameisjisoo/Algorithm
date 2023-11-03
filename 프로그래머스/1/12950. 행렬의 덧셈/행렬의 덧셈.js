function solution(arr1, arr2) {
    const answer = arr1.map((el, index)=> {
        const innerLength=el.length;
        const newArr=[];
        for(i=0; i< innerLength; i++){
            newArr.push(el[i]+arr2[index][i])
        }
        return newArr
    })
    return answer
}