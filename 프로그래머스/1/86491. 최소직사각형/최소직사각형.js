function solution(sizes) { 
    const smallSide = [];
    const largeSide = [];
    sizes.forEach(el=> {
        largeSide.push(Math.max(...el))
        smallSide.push(Math.min(...el))
    })
    return Math.max(...smallSide)*Math.max(...largeSide)
}