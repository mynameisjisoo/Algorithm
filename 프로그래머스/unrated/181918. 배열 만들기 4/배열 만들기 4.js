function solution(arr) {
    let i =0;
    const stk=[];
    
    while(i <arr.length) {
    if(!stk.length || stk.at(-1)<arr[i]) {
        stk.push(arr[i]);
        i++;
    } else if(stk.at(-1) >=arr[i]) {
        stk.pop();
        }
    }
    return stk
}
