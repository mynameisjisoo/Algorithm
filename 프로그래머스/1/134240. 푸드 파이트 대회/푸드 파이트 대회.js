function solution(food) {
    let foodOrder =""
    for(let i=1; i<food.length; i++){
        const amount = Math.floor(food[i]/2);
        for(let j=0; j<amount; j++){
            foodOrder+=i.toString()
        }
    }
    return (foodOrder+"0"+[...foodOrder].reverse().join(""))
}