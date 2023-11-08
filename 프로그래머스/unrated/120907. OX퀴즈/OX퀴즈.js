function solution(quizs) {
    const answerArray = quizs.map(quize=>quize.split(" ")).map(el=>{
        if(el[1]==="+") return Number(el[0])+Number(el[2])===Number(el[4])
        else return Number(el[0])-Number(el[2])===Number(el[4])})
    return answerArray.map(answer=>answer?"O":"X")
}