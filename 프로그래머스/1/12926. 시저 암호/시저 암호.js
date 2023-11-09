function solution(s, n) {
    const movedArr = [...s].map(char=> {
        if(char===" ")return " ";
        let movedCharCode = char.charCodeAt()+n;
        if(char.charCodeAt()>=65 && char.charCodeAt()<=90)  {
            movedCharCode>90 ? movedCharCode-=26 : null
        }else {
            movedCharCode>122 ? movedCharCode-=26 : null
        }
        return String.fromCharCode(movedCharCode)
    })
    return movedArr.join("")
}