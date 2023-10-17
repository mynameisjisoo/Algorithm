function solution(my_string, index_list) {
    return index_list.reduce((arr,curr)=>arr+=my_string[curr],"");
}