function solution(s) {
    const caseChange= s.split(" ").map(el=>[...el].map((char,idx)=>idx%2?char.toLowerCase():char.toUpperCase()));
    return caseChange.map(word=>word.join("")).join(" ")
}

