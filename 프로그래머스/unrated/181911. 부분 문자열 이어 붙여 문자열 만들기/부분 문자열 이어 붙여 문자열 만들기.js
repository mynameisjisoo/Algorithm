function solution(my_strings, parts) {
    let answer = ""
    my_strings.forEach((string,index)=> {
        const part = parts[index];
        answer+=string.slice(part[0],part[1]+1)
    })
    return answer
}
