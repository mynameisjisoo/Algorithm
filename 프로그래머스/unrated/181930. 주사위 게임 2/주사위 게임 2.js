function solution(a, b, c) {
    const set = new Set([a,b,c]);

    switch (set.size) {
        case 1 : return makePow(3);
        case 2 : return makePow(2);
        case 3 : return makePow(1);
    }
    
    function makePow(square) {
        let answer=1;
        for(let i=1; i<=square; i++) {
            answer *= Math.pow(a,i) + Math.pow(b,i) + Math.pow(c,i);
        }
        
        return answer;
    }
    
    
}