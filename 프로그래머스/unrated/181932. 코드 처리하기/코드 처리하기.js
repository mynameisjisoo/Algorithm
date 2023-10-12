function solution(code) {
    let mode = 0;
    let ret ="";

    function changeMode() {
        mode = (mode === 1) ? 0 : 1;
    };
    
    function makeRet(char){
        ret +=char;
    };
    
    [...code].forEach((char, idx)=> {
        if(mode === 0 ) {   
            if(char !== "1" && idx%2===0) makeRet(char);
        } else {
            if(char !=="1" && idx%2===1) makeRet(char);
        };
        if(char === "1") changeMode();
    });
    
    return ret !=="" ? ret : "EMPTY" ;
    
}