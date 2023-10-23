function solution(n) {
    const string = "수박";
    return n%2? string.repeat(n/2)+string[0] : string.repeat(n/2) 
}
