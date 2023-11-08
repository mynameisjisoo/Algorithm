function solution(wallpaper) {
    const row=[];
    const col=[]
    
    for(let i=0; i<wallpaper.length; i++){
        for(let j=0; j<wallpaper[0].length; j++){
            if(wallpaper[i][j]==="#") {
                row.push(i);
                col.push(j);
            }
        }
    }
    const lux=Math.min(...row);
    const luy=Math.min(...col);
    const rdx=Math.max(...row)+1;
    const rdy=Math.max(...col)+1;
    return [lux, luy, rdx, rdy];
}