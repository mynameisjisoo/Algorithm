function solution(spell, dic) {
    const arr = dic.filter(word=> spell.every(char=> [...word].includes(char)));
    return arr.length? 1: 2
}