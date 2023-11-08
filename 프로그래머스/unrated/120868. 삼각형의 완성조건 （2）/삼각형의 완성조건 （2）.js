function solution(sides) {
  // 가장 큰 값이 sides에 속할 경우 (큰-작은 이상~큰값)
    const min = Math.abs(sides[0]-sides[1])+1; 
    const case1 = Math.max(...sides)-min+1;

 // 나머지가 가장 긴 변인 경우
    const sum = sides.reduce((acc,curr)=>acc+curr);
    // side의 가장 큰 값부터 합-1 까지의 갯수 6~9
    const case2 = sum-Math.max(...sides)-1;  // 9-6-1=2;
    return case1+case2;
}